export default [
  {
    "statements": [
      "CREATE TABLE \"trpc_calls\" (\n  \"id\" TEXT NOT NULL,\n  \"createdat\" TEXT NOT NULL,\n  \"elapsedms\" INTEGER,\n  \"path\" TEXT NOT NULL,\n  \"input\" TEXT,\n  \"type\" TEXT NOT NULL,\n  \"state\" TEXT NOT NULL,\n  \"clientid\" TEXT NOT NULL,\n  \"response\" TEXT,\n  CONSTRAINT \"trpc_calls_pkey\" PRIMARY KEY (\"id\")\n) WITHOUT ROWID;\n",
      "-- Toggles for turning the triggers on and off\nINSERT OR IGNORE INTO _electric_trigger_settings(tablename,flag) VALUES ('main.trpc_calls', 1);",
      "  /* Triggers for table trpc_calls */\n\n  -- ensures primary key is immutable\n  DROP TRIGGER IF EXISTS update_ensure_main_trpc_calls_primarykey;",
      "CREATE TRIGGER update_ensure_main_trpc_calls_primarykey\n  BEFORE UPDATE ON \"main\".\"trpc_calls\"\nBEGIN\n  SELECT\n    CASE\n      WHEN old.\"id\" != new.\"id\" THEN\n      \t\tRAISE (ABORT, 'cannot change the value of column id as it belongs to the primary key')\n    END;\nEND;",
      "-- Triggers that add INSERT, UPDATE, DELETE operation to the _opslog table\nDROP TRIGGER IF EXISTS insert_main_trpc_calls_into_oplog;",
      "CREATE TRIGGER insert_main_trpc_calls_into_oplog\n   AFTER INSERT ON \"main\".\"trpc_calls\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.trpc_calls')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'trpc_calls', 'INSERT', json_object('id', new.\"id\"), json_object('clientid', new.\"clientid\", 'createdat', new.\"createdat\", 'elapsedms', new.\"elapsedms\", 'id', new.\"id\", 'input', new.\"input\", 'path', new.\"path\", 'response', new.\"response\", 'state', new.\"state\", 'type', new.\"type\"), NULL, NULL);\nEND;",
      "DROP TRIGGER IF EXISTS update_main_trpc_calls_into_oplog;",
      "CREATE TRIGGER update_main_trpc_calls_into_oplog\n   AFTER UPDATE ON \"main\".\"trpc_calls\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.trpc_calls')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'trpc_calls', 'UPDATE', json_object('id', new.\"id\"), json_object('clientid', new.\"clientid\", 'createdat', new.\"createdat\", 'elapsedms', new.\"elapsedms\", 'id', new.\"id\", 'input', new.\"input\", 'path', new.\"path\", 'response', new.\"response\", 'state', new.\"state\", 'type', new.\"type\"), json_object('clientid', old.\"clientid\", 'createdat', old.\"createdat\", 'elapsedms', old.\"elapsedms\", 'id', old.\"id\", 'input', old.\"input\", 'path', old.\"path\", 'response', old.\"response\", 'state', old.\"state\", 'type', old.\"type\"), NULL);\nEND;",
      "DROP TRIGGER IF EXISTS delete_main_trpc_calls_into_oplog;",
      "CREATE TRIGGER delete_main_trpc_calls_into_oplog\n   AFTER DELETE ON \"main\".\"trpc_calls\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.trpc_calls')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'trpc_calls', 'DELETE', json_object('id', old.\"id\"), NULL, json_object('clientid', old.\"clientid\", 'createdat', old.\"createdat\", 'elapsedms', old.\"elapsedms\", 'id', old.\"id\", 'input', old.\"input\", 'path', old.\"path\", 'response', old.\"response\", 'state', old.\"state\", 'type', old.\"type\"), NULL);\nEND;"
    ],
    "version": "1"
  },
  {
    "statements": [
      "CREATE TABLE \"youtube_videos\" (\n  \"id\" TEXT NOT NULL,\n  \"transcript\" TEXT,\n  \"created_at\" TEXT,\n  \"updated_at\" TEXT,\n  \"title\" TEXT,\n  \"author_name\" TEXT,\n  \"author_url\" TEXT,\n  \"type\" TEXT,\n  \"height\" INTEGER,\n  \"width\" INTEGER,\n  \"version\" TEXT,\n  \"provider_name\" TEXT,\n  \"provider_url\" TEXT,\n  \"thumbnail_height\" INTEGER,\n  \"thumbnail_width\" INTEGER,\n  \"thumbnail_url\" TEXT,\n  \"html\" TEXT,\n  CONSTRAINT \"youtube_videos_pkey\" PRIMARY KEY (\"id\")\n) WITHOUT ROWID;\n",
      "-- Toggles for turning the triggers on and off\nINSERT OR IGNORE INTO _electric_trigger_settings(tablename,flag) VALUES ('main.youtube_videos', 1);",
      "  /* Triggers for table youtube_videos */\n\n  -- ensures primary key is immutable\n  DROP TRIGGER IF EXISTS update_ensure_main_youtube_videos_primarykey;",
      "CREATE TRIGGER update_ensure_main_youtube_videos_primarykey\n  BEFORE UPDATE ON \"main\".\"youtube_videos\"\nBEGIN\n  SELECT\n    CASE\n      WHEN old.\"id\" != new.\"id\" THEN\n      \t\tRAISE (ABORT, 'cannot change the value of column id as it belongs to the primary key')\n    END;\nEND;",
      "-- Triggers that add INSERT, UPDATE, DELETE operation to the _opslog table\nDROP TRIGGER IF EXISTS insert_main_youtube_videos_into_oplog;",
      "CREATE TRIGGER insert_main_youtube_videos_into_oplog\n   AFTER INSERT ON \"main\".\"youtube_videos\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.youtube_videos')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'youtube_videos', 'INSERT', json_object('id', new.\"id\"), json_object('author_name', new.\"author_name\", 'author_url', new.\"author_url\", 'created_at', new.\"created_at\", 'height', new.\"height\", 'html', new.\"html\", 'id', new.\"id\", 'provider_name', new.\"provider_name\", 'provider_url', new.\"provider_url\", 'thumbnail_height', new.\"thumbnail_height\", 'thumbnail_url', new.\"thumbnail_url\", 'thumbnail_width', new.\"thumbnail_width\", 'title', new.\"title\", 'transcript', new.\"transcript\", 'type', new.\"type\", 'updated_at', new.\"updated_at\", 'version', new.\"version\", 'width', new.\"width\"), NULL, NULL);\nEND;",
      "DROP TRIGGER IF EXISTS update_main_youtube_videos_into_oplog;",
      "CREATE TRIGGER update_main_youtube_videos_into_oplog\n   AFTER UPDATE ON \"main\".\"youtube_videos\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.youtube_videos')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'youtube_videos', 'UPDATE', json_object('id', new.\"id\"), json_object('author_name', new.\"author_name\", 'author_url', new.\"author_url\", 'created_at', new.\"created_at\", 'height', new.\"height\", 'html', new.\"html\", 'id', new.\"id\", 'provider_name', new.\"provider_name\", 'provider_url', new.\"provider_url\", 'thumbnail_height', new.\"thumbnail_height\", 'thumbnail_url', new.\"thumbnail_url\", 'thumbnail_width', new.\"thumbnail_width\", 'title', new.\"title\", 'transcript', new.\"transcript\", 'type', new.\"type\", 'updated_at', new.\"updated_at\", 'version', new.\"version\", 'width', new.\"width\"), json_object('author_name', old.\"author_name\", 'author_url', old.\"author_url\", 'created_at', old.\"created_at\", 'height', old.\"height\", 'html', old.\"html\", 'id', old.\"id\", 'provider_name', old.\"provider_name\", 'provider_url', old.\"provider_url\", 'thumbnail_height', old.\"thumbnail_height\", 'thumbnail_url', old.\"thumbnail_url\", 'thumbnail_width', old.\"thumbnail_width\", 'title', old.\"title\", 'transcript', old.\"transcript\", 'type', old.\"type\", 'updated_at', old.\"updated_at\", 'version', old.\"version\", 'width', old.\"width\"), NULL);\nEND;",
      "DROP TRIGGER IF EXISTS delete_main_youtube_videos_into_oplog;",
      "CREATE TRIGGER delete_main_youtube_videos_into_oplog\n   AFTER DELETE ON \"main\".\"youtube_videos\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.youtube_videos')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'youtube_videos', 'DELETE', json_object('id', old.\"id\"), NULL, json_object('author_name', old.\"author_name\", 'author_url', old.\"author_url\", 'created_at', old.\"created_at\", 'height', old.\"height\", 'html', old.\"html\", 'id', old.\"id\", 'provider_name', old.\"provider_name\", 'provider_url', old.\"provider_url\", 'thumbnail_height', old.\"thumbnail_height\", 'thumbnail_url', old.\"thumbnail_url\", 'thumbnail_width', old.\"thumbnail_width\", 'title', old.\"title\", 'transcript', old.\"transcript\", 'type', old.\"type\", 'updated_at', old.\"updated_at\", 'version', old.\"version\", 'width', old.\"width\"), NULL);\nEND;"
    ],
    "version": "2"
  },
  {
    "statements": [
      "CREATE TABLE \"youtube_basic_summary\" (\n  \"id\" TEXT NOT NULL,\n  \"youtube_id\" TEXT,\n  \"created_at\" TEXT,\n  \"hour_summaries\" TEXT,\n  CONSTRAINT \"youtube_basic_summary_youtube_id_fkey\" FOREIGN KEY (\"youtube_id\") REFERENCES \"youtube_videos\" (\"id\"),\n  CONSTRAINT \"youtube_basic_summary_pkey\" PRIMARY KEY (\"id\")\n) WITHOUT ROWID;\n",
      "-- Toggles for turning the triggers on and off\nINSERT OR IGNORE INTO _electric_trigger_settings(tablename,flag) VALUES ('main.youtube_basic_summary', 1);",
      "  /* Triggers for table youtube_basic_summary */\n\n  -- ensures primary key is immutable\n  DROP TRIGGER IF EXISTS update_ensure_main_youtube_basic_summary_primarykey;",
      "CREATE TRIGGER update_ensure_main_youtube_basic_summary_primarykey\n  BEFORE UPDATE ON \"main\".\"youtube_basic_summary\"\nBEGIN\n  SELECT\n    CASE\n      WHEN old.\"id\" != new.\"id\" THEN\n      \t\tRAISE (ABORT, 'cannot change the value of column id as it belongs to the primary key')\n    END;\nEND;",
      "-- Triggers that add INSERT, UPDATE, DELETE operation to the _opslog table\nDROP TRIGGER IF EXISTS insert_main_youtube_basic_summary_into_oplog;",
      "CREATE TRIGGER insert_main_youtube_basic_summary_into_oplog\n   AFTER INSERT ON \"main\".\"youtube_basic_summary\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.youtube_basic_summary')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'youtube_basic_summary', 'INSERT', json_object('id', new.\"id\"), json_object('created_at', new.\"created_at\", 'hour_summaries', new.\"hour_summaries\", 'id', new.\"id\", 'youtube_id', new.\"youtube_id\"), NULL, NULL);\nEND;",
      "DROP TRIGGER IF EXISTS update_main_youtube_basic_summary_into_oplog;",
      "CREATE TRIGGER update_main_youtube_basic_summary_into_oplog\n   AFTER UPDATE ON \"main\".\"youtube_basic_summary\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.youtube_basic_summary')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'youtube_basic_summary', 'UPDATE', json_object('id', new.\"id\"), json_object('created_at', new.\"created_at\", 'hour_summaries', new.\"hour_summaries\", 'id', new.\"id\", 'youtube_id', new.\"youtube_id\"), json_object('created_at', old.\"created_at\", 'hour_summaries', old.\"hour_summaries\", 'id', old.\"id\", 'youtube_id', old.\"youtube_id\"), NULL);\nEND;",
      "DROP TRIGGER IF EXISTS delete_main_youtube_basic_summary_into_oplog;",
      "CREATE TRIGGER delete_main_youtube_basic_summary_into_oplog\n   AFTER DELETE ON \"main\".\"youtube_basic_summary\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.youtube_basic_summary')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'youtube_basic_summary', 'DELETE', json_object('id', old.\"id\"), NULL, json_object('created_at', old.\"created_at\", 'hour_summaries', old.\"hour_summaries\", 'id', old.\"id\", 'youtube_id', old.\"youtube_id\"), NULL);\nEND;",
      "-- Triggers for foreign key compensations\nDROP TRIGGER IF EXISTS compensation_insert_main_youtube_basic_summary_youtube_id_into_oplog;",
      "CREATE TRIGGER compensation_insert_main_youtube_basic_summary_youtube_id_into_oplog\n  AFTER INSERT ON \"main\".\"youtube_basic_summary\"\n  WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.youtube_videos') AND\n       1 == (SELECT value from _electric_meta WHERE key == 'compensations')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  SELECT 'main', 'youtube_videos', 'UPDATE', json_object('id', \"id\"), json_object('id', \"id\"), NULL, NULL\n  FROM \"main\".\"youtube_videos\" WHERE \"id\" = new.\"youtube_id\";\nEND;",
      "DROP TRIGGER IF EXISTS compensation_update_main_youtube_basic_summary_youtube_id_into_oplog;",
      "CREATE TRIGGER compensation_update_main_youtube_basic_summary_youtube_id_into_oplog\n   AFTER UPDATE ON \"main\".\"youtube_basic_summary\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.youtube_videos') AND\n        1 == (SELECT value from _electric_meta WHERE key == 'compensations')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  SELECT 'main', 'youtube_videos', 'UPDATE', json_object('id', \"id\"), json_object('id', \"id\"), NULL, NULL\n  FROM \"main\".\"youtube_videos\" WHERE \"id\" = new.\"youtube_id\";\nEND;"
    ],
    "version": "3"
  },
  {
    "statements": [
      "CREATE TABLE \"youtube_llm_outputs\" (\n  \"id\" TEXT NOT NULL,\n  \"youtube_id\" TEXT,\n  \"created_at\" TEXT,\n  \"llm_prompt_type\" TEXT,\n  \"output\" TEXT,\n  CONSTRAINT \"youtube_llm_outputs_youtube_id_fkey\" FOREIGN KEY (\"youtube_id\") REFERENCES \"youtube_videos\" (\"id\"),\n  CONSTRAINT \"youtube_llm_outputs_pkey\" PRIMARY KEY (\"id\")\n) WITHOUT ROWID;\n",
      "-- Toggles for turning the triggers on and off\nINSERT OR IGNORE INTO _electric_trigger_settings(tablename,flag) VALUES ('main.youtube_llm_outputs', 1);",
      "  /* Triggers for table youtube_llm_outputs */\n\n  -- ensures primary key is immutable\n  DROP TRIGGER IF EXISTS update_ensure_main_youtube_llm_outputs_primarykey;",
      "CREATE TRIGGER update_ensure_main_youtube_llm_outputs_primarykey\n  BEFORE UPDATE ON \"main\".\"youtube_llm_outputs\"\nBEGIN\n  SELECT\n    CASE\n      WHEN old.\"id\" != new.\"id\" THEN\n      \t\tRAISE (ABORT, 'cannot change the value of column id as it belongs to the primary key')\n    END;\nEND;",
      "-- Triggers that add INSERT, UPDATE, DELETE operation to the _opslog table\nDROP TRIGGER IF EXISTS insert_main_youtube_llm_outputs_into_oplog;",
      "CREATE TRIGGER insert_main_youtube_llm_outputs_into_oplog\n   AFTER INSERT ON \"main\".\"youtube_llm_outputs\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.youtube_llm_outputs')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'youtube_llm_outputs', 'INSERT', json_object('id', new.\"id\"), json_object('created_at', new.\"created_at\", 'id', new.\"id\", 'llm_prompt_type', new.\"llm_prompt_type\", 'output', new.\"output\", 'youtube_id', new.\"youtube_id\"), NULL, NULL);\nEND;",
      "DROP TRIGGER IF EXISTS update_main_youtube_llm_outputs_into_oplog;",
      "CREATE TRIGGER update_main_youtube_llm_outputs_into_oplog\n   AFTER UPDATE ON \"main\".\"youtube_llm_outputs\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.youtube_llm_outputs')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'youtube_llm_outputs', 'UPDATE', json_object('id', new.\"id\"), json_object('created_at', new.\"created_at\", 'id', new.\"id\", 'llm_prompt_type', new.\"llm_prompt_type\", 'output', new.\"output\", 'youtube_id', new.\"youtube_id\"), json_object('created_at', old.\"created_at\", 'id', old.\"id\", 'llm_prompt_type', old.\"llm_prompt_type\", 'output', old.\"output\", 'youtube_id', old.\"youtube_id\"), NULL);\nEND;",
      "DROP TRIGGER IF EXISTS delete_main_youtube_llm_outputs_into_oplog;",
      "CREATE TRIGGER delete_main_youtube_llm_outputs_into_oplog\n   AFTER DELETE ON \"main\".\"youtube_llm_outputs\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.youtube_llm_outputs')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'youtube_llm_outputs', 'DELETE', json_object('id', old.\"id\"), NULL, json_object('created_at', old.\"created_at\", 'id', old.\"id\", 'llm_prompt_type', old.\"llm_prompt_type\", 'output', old.\"output\", 'youtube_id', old.\"youtube_id\"), NULL);\nEND;",
      "-- Triggers for foreign key compensations\nDROP TRIGGER IF EXISTS compensation_insert_main_youtube_llm_outputs_youtube_id_into_oplog;",
      "CREATE TRIGGER compensation_insert_main_youtube_llm_outputs_youtube_id_into_oplog\n  AFTER INSERT ON \"main\".\"youtube_llm_outputs\"\n  WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.youtube_videos') AND\n       1 == (SELECT value from _electric_meta WHERE key == 'compensations')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  SELECT 'main', 'youtube_videos', 'UPDATE', json_object('id', \"id\"), json_object('id', \"id\"), NULL, NULL\n  FROM \"main\".\"youtube_videos\" WHERE \"id\" = new.\"youtube_id\";\nEND;",
      "DROP TRIGGER IF EXISTS compensation_update_main_youtube_llm_outputs_youtube_id_into_oplog;",
      "CREATE TRIGGER compensation_update_main_youtube_llm_outputs_youtube_id_into_oplog\n   AFTER UPDATE ON \"main\".\"youtube_llm_outputs\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.youtube_videos') AND\n        1 == (SELECT value from _electric_meta WHERE key == 'compensations')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  SELECT 'main', 'youtube_videos', 'UPDATE', json_object('id', \"id\"), json_object('id', \"id\"), NULL, NULL\n  FROM \"main\".\"youtube_videos\" WHERE \"id\" = new.\"youtube_id\";\nEND;"
    ],
    "version": "4"
  }
]