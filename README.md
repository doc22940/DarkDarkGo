## Index Builder

Index Builder was set up at 54.174.171.194 at port 5000. The folder contains several files. Description of each file can be found below:

#### index\_builder\_final.py: 

- Status: Completed
- Description: a class for Index_Builder, in charge of building the index chunk for each content chunk.
- Input: chunk_id + directory/file name of content chunk
- Output: json file containing the index chunk

#### index\_builder\_server.py:

- Status: Completed
- Description: List of endpoints to interact with Index Server
- Endpoint 1: Get indexed chunk (to be called by Index Server)
	- URL: `/indexed_chunk/<string:chunk_id>`
	- Method: `GET`
	- Return index chunk given chunk_id
	- Sample data:
		```
		{
			"deep": {
				"word_count": 2,
				"doc_id": {"12c-0": [8, 23]}
			},
			"create": {
				"word_count": 2,
				"doc_id": {"12c-1": [2, 26]}
			}
		}
		```
- Endpoint 2: Get content chunk (to be called by Index Server)
	- URL: `content_chunk/<string:chunk_id>`
	- Method: `GET`
	- Return content chunk in the same format given by crawler
	- Sample data: (referred to crawler documentation for more details)
- Endpoint 3: Get health (to be called by mgmt watchdog)
	- URL: `/get_health`
	- Method: `GET`
	- Return True if index builder is still online
		
#### indexing.py:

- Status: Completed
- Description: Index Builder first notified mgmt of its 'online' status by hitting the `/set_state/component` endpoint. Then, it keeps sending mgmt requests for content chunk metadata for every 5 seconds (the whole system is in a while True loop so that it will always have the metadata from mgmt). After successfully receiving metadata from mgmt, it sends a request to Crawler to get the actually content chunk (using the chunk_id and host given by mgmt). It then copies the content files and stores these files in the local disk. It calls the class Index\_Builder from `index_builder_final.py` and saves indexed chunk files into the local disk. Finally, the system sends mgmt the two states `built` and `propagated` so that mgmt can keeps track of what content chunk has been finished indexing. The system then sleeps for 2 minutes before hitting mgmt again for new content chunk metadata.

#### Sample_files

The content chunk files and indexed chunk files in this folder were outdated. SSH into the machine containing index builder for the correct files.

