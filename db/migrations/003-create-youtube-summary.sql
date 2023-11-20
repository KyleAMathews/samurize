CREATE TABLE IF NOT EXISTS youtube_basic_summary (
    id UUID PRIMARY KEY,
    youtube_id TEXT REFERENCES youtube_videos(id),
    created_at TIMESTAMP WITH TIME ZONE,
    hour_summaries TEXT -- JSON with structure [{ summary: string, chunkSummuries }]
);

ALTER TABLE youtube_basic_summary ENABLE ELECTRIC;
