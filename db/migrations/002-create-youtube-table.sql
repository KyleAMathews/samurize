CREATE TABLE IF NOT EXISTS youtube_videos (
    id TEXT PRIMARY KEY,
    transcript TEXT,
    created_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE,
    title TEXT,
    author_name TEXT,
    author_url TEXT,
    type TEXT,
    height INT,
    width INT,
    version TEXT,
    provider_name TEXT,
    provider_url TEXT,
    thumbnail_height INT,
    thumbnail_width INT,
    thumbnail_url TEXT,
    html TEXT
);

ALTER TABLE youtube_videos ENABLE ELECTRIC;
