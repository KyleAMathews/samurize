CREATE TABLE IF NOT EXISTS youtube_llm_outputs (
    id UUID PRIMARY KEY,
    youtube_id TEXT REFERENCES youtube_videos(id),
    created_at TIMESTAMP WITH TIME ZONE,
    llm_prompt_type TEXT,
    output TEXT
);

ALTER TABLE youtube_llm_outputs ENABLE ELECTRIC;

