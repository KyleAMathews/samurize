import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TableSchema, DbSchema, Relation, ElectricClient, HKT } from 'electric-sql/client/model';
import migrations from './migrations';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const QueryModeSchema = z.enum(['default','insensitive']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const TrpcCallsScalarFieldEnumSchema = z.enum(['id','createdat','elapsedms','path','input','type','state','clientid','response']);

export const YoutubeBasicSummaryScalarFieldEnumSchema = z.enum(['id','youtube_id','created_at','hour_summaries']);

export const YoutubeLlmOutputsScalarFieldEnumSchema = z.enum(['id','youtube_id','created_at','llm_prompt_type','output']);

export const YoutubeVideosScalarFieldEnumSchema = z.enum(['id','transcript','created_at','updated_at','title','author_name','author_url','type','height','width','version','provider_name','provider_url','thumbnail_height','thumbnail_width','thumbnail_url','html']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// TRPC CALLS SCHEMA
/////////////////////////////////////////

export const TrpcCallsSchema = z.object({
  id: z.string().uuid(),
  createdat: z.coerce.date(),
  elapsedms: z.number().int().gte(-2147483648).lte(2147483647).nullable(),
  path: z.string(),
  input: z.string().nullable(),
  type: z.string(),
  state: z.string(),
  clientid: z.string(),
  response: z.string().nullable(),
})

export type TrpcCalls = z.infer<typeof TrpcCallsSchema>

/////////////////////////////////////////
// YOUTUBE BASIC SUMMARY SCHEMA
/////////////////////////////////////////

export const YoutubeBasicSummarySchema = z.object({
  id: z.string().uuid(),
  youtube_id: z.string().nullable(),
  created_at: z.coerce.date().nullable(),
  hour_summaries: z.string().nullable(),
})

export type YoutubeBasicSummary = z.infer<typeof YoutubeBasicSummarySchema>

/////////////////////////////////////////
// YOUTUBE LLM OUTPUTS SCHEMA
/////////////////////////////////////////

export const YoutubeLlmOutputsSchema = z.object({
  id: z.string().uuid(),
  youtube_id: z.string().nullable(),
  created_at: z.coerce.date().nullable(),
  llm_prompt_type: z.string().nullable(),
  output: z.string().nullable(),
})

export type YoutubeLlmOutputs = z.infer<typeof YoutubeLlmOutputsSchema>

/////////////////////////////////////////
// YOUTUBE VIDEOS SCHEMA
/////////////////////////////////////////

export const YoutubeVideosSchema = z.object({
  id: z.string(),
  transcript: z.string().nullable(),
  created_at: z.coerce.date().nullable(),
  updated_at: z.coerce.date().nullable(),
  title: z.string().nullable(),
  author_name: z.string().nullable(),
  author_url: z.string().nullable(),
  type: z.string().nullable(),
  height: z.number().int().gte(-2147483648).lte(2147483647).nullable(),
  width: z.number().int().gte(-2147483648).lte(2147483647).nullable(),
  version: z.string().nullable(),
  provider_name: z.string().nullable(),
  provider_url: z.string().nullable(),
  thumbnail_height: z.number().int().gte(-2147483648).lte(2147483647).nullable(),
  thumbnail_width: z.number().int().gte(-2147483648).lte(2147483647).nullable(),
  thumbnail_url: z.string().nullable(),
  html: z.string().nullable(),
})

export type YoutubeVideos = z.infer<typeof YoutubeVideosSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// TRPC CALLS
//------------------------------------------------------

export const TrpcCallsSelectSchema: z.ZodType<Prisma.TrpcCallsSelect> = z.object({
  id: z.boolean().optional(),
  createdat: z.boolean().optional(),
  elapsedms: z.boolean().optional(),
  path: z.boolean().optional(),
  input: z.boolean().optional(),
  type: z.boolean().optional(),
  state: z.boolean().optional(),
  clientid: z.boolean().optional(),
  response: z.boolean().optional(),
}).strict()

// YOUTUBE BASIC SUMMARY
//------------------------------------------------------

export const YoutubeBasicSummaryIncludeSchema: z.ZodType<Prisma.YoutubeBasicSummaryInclude> = z.object({
  youtube_videos: z.union([z.boolean(),z.lazy(() => YoutubeVideosArgsSchema)]).optional(),
}).strict()

export const YoutubeBasicSummaryArgsSchema: z.ZodType<Prisma.YoutubeBasicSummaryArgs> = z.object({
  select: z.lazy(() => YoutubeBasicSummarySelectSchema).optional(),
  include: z.lazy(() => YoutubeBasicSummaryIncludeSchema).optional(),
}).strict();

export const YoutubeBasicSummarySelectSchema: z.ZodType<Prisma.YoutubeBasicSummarySelect> = z.object({
  id: z.boolean().optional(),
  youtube_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  hour_summaries: z.boolean().optional(),
  youtube_videos: z.union([z.boolean(),z.lazy(() => YoutubeVideosArgsSchema)]).optional(),
}).strict()

// YOUTUBE LLM OUTPUTS
//------------------------------------------------------

export const YoutubeLlmOutputsIncludeSchema: z.ZodType<Prisma.YoutubeLlmOutputsInclude> = z.object({
  youtube_videos: z.union([z.boolean(),z.lazy(() => YoutubeVideosArgsSchema)]).optional(),
}).strict()

export const YoutubeLlmOutputsArgsSchema: z.ZodType<Prisma.YoutubeLlmOutputsArgs> = z.object({
  select: z.lazy(() => YoutubeLlmOutputsSelectSchema).optional(),
  include: z.lazy(() => YoutubeLlmOutputsIncludeSchema).optional(),
}).strict();

export const YoutubeLlmOutputsSelectSchema: z.ZodType<Prisma.YoutubeLlmOutputsSelect> = z.object({
  id: z.boolean().optional(),
  youtube_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  llm_prompt_type: z.boolean().optional(),
  output: z.boolean().optional(),
  youtube_videos: z.union([z.boolean(),z.lazy(() => YoutubeVideosArgsSchema)]).optional(),
}).strict()

// YOUTUBE VIDEOS
//------------------------------------------------------

export const YoutubeVideosIncludeSchema: z.ZodType<Prisma.YoutubeVideosInclude> = z.object({
  youtube_basic_summary: z.union([z.boolean(),z.lazy(() => YoutubeBasicSummaryFindManyArgsSchema)]).optional(),
  youtube_llm_outputs: z.union([z.boolean(),z.lazy(() => YoutubeLlmOutputsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => YoutubeVideosCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const YoutubeVideosArgsSchema: z.ZodType<Prisma.YoutubeVideosArgs> = z.object({
  select: z.lazy(() => YoutubeVideosSelectSchema).optional(),
  include: z.lazy(() => YoutubeVideosIncludeSchema).optional(),
}).strict();

export const YoutubeVideosCountOutputTypeArgsSchema: z.ZodType<Prisma.YoutubeVideosCountOutputTypeArgs> = z.object({
  select: z.lazy(() => YoutubeVideosCountOutputTypeSelectSchema).nullish(),
}).strict();

export const YoutubeVideosCountOutputTypeSelectSchema: z.ZodType<Prisma.YoutubeVideosCountOutputTypeSelect> = z.object({
  youtube_basic_summary: z.boolean().optional(),
  youtube_llm_outputs: z.boolean().optional(),
}).strict();

export const YoutubeVideosSelectSchema: z.ZodType<Prisma.YoutubeVideosSelect> = z.object({
  id: z.boolean().optional(),
  transcript: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  title: z.boolean().optional(),
  author_name: z.boolean().optional(),
  author_url: z.boolean().optional(),
  type: z.boolean().optional(),
  height: z.boolean().optional(),
  width: z.boolean().optional(),
  version: z.boolean().optional(),
  provider_name: z.boolean().optional(),
  provider_url: z.boolean().optional(),
  thumbnail_height: z.boolean().optional(),
  thumbnail_width: z.boolean().optional(),
  thumbnail_url: z.boolean().optional(),
  html: z.boolean().optional(),
  youtube_basic_summary: z.union([z.boolean(),z.lazy(() => YoutubeBasicSummaryFindManyArgsSchema)]).optional(),
  youtube_llm_outputs: z.union([z.boolean(),z.lazy(() => YoutubeLlmOutputsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => YoutubeVideosCountOutputTypeArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const TrpcCallsWhereInputSchema: z.ZodType<Prisma.TrpcCallsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TrpcCallsWhereInputSchema),z.lazy(() => TrpcCallsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TrpcCallsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TrpcCallsWhereInputSchema),z.lazy(() => TrpcCallsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  createdat: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  elapsedms: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  path: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  input: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  clientid: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  response: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const TrpcCallsOrderByWithRelationInputSchema: z.ZodType<Prisma.TrpcCallsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdat: z.lazy(() => SortOrderSchema).optional(),
  elapsedms: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  input: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  clientid: z.lazy(() => SortOrderSchema).optional(),
  response: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TrpcCallsWhereUniqueInputSchema: z.ZodType<Prisma.TrpcCallsWhereUniqueInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const TrpcCallsOrderByWithAggregationInputSchema: z.ZodType<Prisma.TrpcCallsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdat: z.lazy(() => SortOrderSchema).optional(),
  elapsedms: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  input: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  clientid: z.lazy(() => SortOrderSchema).optional(),
  response: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TrpcCallsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TrpcCallsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TrpcCallsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TrpcCallsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TrpcCallsSumOrderByAggregateInputSchema).optional()
}).strict();

export const TrpcCallsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TrpcCallsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TrpcCallsScalarWhereWithAggregatesInputSchema),z.lazy(() => TrpcCallsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TrpcCallsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TrpcCallsScalarWhereWithAggregatesInputSchema),z.lazy(() => TrpcCallsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  createdat: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  elapsedms: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  path: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  input: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  clientid: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  response: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const YoutubeBasicSummaryWhereInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => YoutubeBasicSummaryWhereInputSchema),z.lazy(() => YoutubeBasicSummaryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => YoutubeBasicSummaryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => YoutubeBasicSummaryWhereInputSchema),z.lazy(() => YoutubeBasicSummaryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  youtube_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  hour_summaries: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  youtube_videos: z.union([ z.lazy(() => YoutubeVideosRelationFilterSchema),z.lazy(() => YoutubeVideosWhereInputSchema) ]).optional().nullable(),
}).strict();

export const YoutubeBasicSummaryOrderByWithRelationInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  youtube_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  hour_summaries: z.lazy(() => SortOrderSchema).optional(),
  youtube_videos: z.lazy(() => YoutubeVideosOrderByWithRelationInputSchema).optional()
}).strict();

export const YoutubeBasicSummaryWhereUniqueInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryWhereUniqueInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const YoutubeBasicSummaryOrderByWithAggregationInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  youtube_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  hour_summaries: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => YoutubeBasicSummaryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => YoutubeBasicSummaryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => YoutubeBasicSummaryMinOrderByAggregateInputSchema).optional()
}).strict();

export const YoutubeBasicSummaryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => YoutubeBasicSummaryScalarWhereWithAggregatesInputSchema),z.lazy(() => YoutubeBasicSummaryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => YoutubeBasicSummaryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => YoutubeBasicSummaryScalarWhereWithAggregatesInputSchema),z.lazy(() => YoutubeBasicSummaryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  youtube_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  hour_summaries: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const YoutubeLlmOutputsWhereInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => YoutubeLlmOutputsWhereInputSchema),z.lazy(() => YoutubeLlmOutputsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => YoutubeLlmOutputsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => YoutubeLlmOutputsWhereInputSchema),z.lazy(() => YoutubeLlmOutputsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  youtube_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  llm_prompt_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  output: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  youtube_videos: z.union([ z.lazy(() => YoutubeVideosRelationFilterSchema),z.lazy(() => YoutubeVideosWhereInputSchema) ]).optional().nullable(),
}).strict();

export const YoutubeLlmOutputsOrderByWithRelationInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  youtube_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  llm_prompt_type: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional(),
  youtube_videos: z.lazy(() => YoutubeVideosOrderByWithRelationInputSchema).optional()
}).strict();

export const YoutubeLlmOutputsWhereUniqueInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsWhereUniqueInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const YoutubeLlmOutputsOrderByWithAggregationInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  youtube_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  llm_prompt_type: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => YoutubeLlmOutputsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => YoutubeLlmOutputsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => YoutubeLlmOutputsMinOrderByAggregateInputSchema).optional()
}).strict();

export const YoutubeLlmOutputsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => YoutubeLlmOutputsScalarWhereWithAggregatesInputSchema),z.lazy(() => YoutubeLlmOutputsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => YoutubeLlmOutputsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => YoutubeLlmOutputsScalarWhereWithAggregatesInputSchema),z.lazy(() => YoutubeLlmOutputsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  youtube_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  llm_prompt_type: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  output: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const YoutubeVideosWhereInputSchema: z.ZodType<Prisma.YoutubeVideosWhereInput> = z.object({
  AND: z.union([ z.lazy(() => YoutubeVideosWhereInputSchema),z.lazy(() => YoutubeVideosWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => YoutubeVideosWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => YoutubeVideosWhereInputSchema),z.lazy(() => YoutubeVideosWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  transcript: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  updated_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  title: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  author_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  author_url: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  height: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  width: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  version: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  provider_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  provider_url: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  thumbnail_height: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  thumbnail_width: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  thumbnail_url: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  html: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  youtube_basic_summary: z.lazy(() => YoutubeBasicSummaryListRelationFilterSchema).optional(),
  youtube_llm_outputs: z.lazy(() => YoutubeLlmOutputsListRelationFilterSchema).optional()
}).strict();

export const YoutubeVideosOrderByWithRelationInputSchema: z.ZodType<Prisma.YoutubeVideosOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  transcript: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  author_name: z.lazy(() => SortOrderSchema).optional(),
  author_url: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  provider_name: z.lazy(() => SortOrderSchema).optional(),
  provider_url: z.lazy(() => SortOrderSchema).optional(),
  thumbnail_height: z.lazy(() => SortOrderSchema).optional(),
  thumbnail_width: z.lazy(() => SortOrderSchema).optional(),
  thumbnail_url: z.lazy(() => SortOrderSchema).optional(),
  html: z.lazy(() => SortOrderSchema).optional(),
  youtube_basic_summary: z.lazy(() => YoutubeBasicSummaryOrderByRelationAggregateInputSchema).optional(),
  youtube_llm_outputs: z.lazy(() => YoutubeLlmOutputsOrderByRelationAggregateInputSchema).optional()
}).strict();

export const YoutubeVideosWhereUniqueInputSchema: z.ZodType<Prisma.YoutubeVideosWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export const YoutubeVideosOrderByWithAggregationInputSchema: z.ZodType<Prisma.YoutubeVideosOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  transcript: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  author_name: z.lazy(() => SortOrderSchema).optional(),
  author_url: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  provider_name: z.lazy(() => SortOrderSchema).optional(),
  provider_url: z.lazy(() => SortOrderSchema).optional(),
  thumbnail_height: z.lazy(() => SortOrderSchema).optional(),
  thumbnail_width: z.lazy(() => SortOrderSchema).optional(),
  thumbnail_url: z.lazy(() => SortOrderSchema).optional(),
  html: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => YoutubeVideosCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => YoutubeVideosAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => YoutubeVideosMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => YoutubeVideosMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => YoutubeVideosSumOrderByAggregateInputSchema).optional()
}).strict();

export const YoutubeVideosScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.YoutubeVideosScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => YoutubeVideosScalarWhereWithAggregatesInputSchema),z.lazy(() => YoutubeVideosScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => YoutubeVideosScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => YoutubeVideosScalarWhereWithAggregatesInputSchema),z.lazy(() => YoutubeVideosScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  transcript: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  updated_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  title: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  author_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  author_url: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  height: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  width: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  version: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  provider_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  provider_url: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  thumbnail_height: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  thumbnail_width: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  thumbnail_url: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  html: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const TrpcCallsCreateInputSchema: z.ZodType<Prisma.TrpcCallsCreateInput> = z.object({
  id: z.string().uuid(),
  createdat: z.coerce.date(),
  elapsedms: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  path: z.string(),
  input: z.string().optional().nullable(),
  type: z.string(),
  state: z.string(),
  clientid: z.string(),
  response: z.string().optional().nullable()
}).strict();

export const TrpcCallsUncheckedCreateInputSchema: z.ZodType<Prisma.TrpcCallsUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  createdat: z.coerce.date(),
  elapsedms: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  path: z.string(),
  input: z.string().optional().nullable(),
  type: z.string(),
  state: z.string(),
  clientid: z.string(),
  response: z.string().optional().nullable()
}).strict();

export const TrpcCallsUpdateInputSchema: z.ZodType<Prisma.TrpcCallsUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdat: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  elapsedms: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  input: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  clientid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  response: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TrpcCallsUncheckedUpdateInputSchema: z.ZodType<Prisma.TrpcCallsUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdat: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  elapsedms: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  input: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  clientid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  response: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TrpcCallsCreateManyInputSchema: z.ZodType<Prisma.TrpcCallsCreateManyInput> = z.object({
  id: z.string().uuid(),
  createdat: z.coerce.date(),
  elapsedms: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  path: z.string(),
  input: z.string().optional().nullable(),
  type: z.string(),
  state: z.string(),
  clientid: z.string(),
  response: z.string().optional().nullable()
}).strict();

export const TrpcCallsUpdateManyMutationInputSchema: z.ZodType<Prisma.TrpcCallsUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdat: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  elapsedms: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  input: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  clientid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  response: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TrpcCallsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TrpcCallsUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdat: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  elapsedms: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  input: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  clientid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  response: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const YoutubeBasicSummaryCreateInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryCreateInput> = z.object({
  id: z.string().uuid(),
  created_at: z.coerce.date().optional().nullable(),
  hour_summaries: z.string().optional().nullable(),
  youtube_videos: z.lazy(() => YoutubeVideosCreateNestedOneWithoutYoutube_basic_summaryInputSchema).optional()
}).strict();

export const YoutubeBasicSummaryUncheckedCreateInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  youtube_id: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  hour_summaries: z.string().optional().nullable()
}).strict();

export const YoutubeBasicSummaryUpdateInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hour_summaries: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  youtube_videos: z.lazy(() => YoutubeVideosUpdateOneWithoutYoutube_basic_summaryNestedInputSchema).optional()
}).strict();

export const YoutubeBasicSummaryUncheckedUpdateInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  youtube_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hour_summaries: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const YoutubeBasicSummaryCreateManyInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryCreateManyInput> = z.object({
  id: z.string().uuid(),
  youtube_id: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  hour_summaries: z.string().optional().nullable()
}).strict();

export const YoutubeBasicSummaryUpdateManyMutationInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hour_summaries: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const YoutubeBasicSummaryUncheckedUpdateManyInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  youtube_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hour_summaries: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const YoutubeLlmOutputsCreateInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsCreateInput> = z.object({
  id: z.string().uuid(),
  created_at: z.coerce.date().optional().nullable(),
  llm_prompt_type: z.string().optional().nullable(),
  output: z.string().optional().nullable(),
  youtube_videos: z.lazy(() => YoutubeVideosCreateNestedOneWithoutYoutube_llm_outputsInputSchema).optional()
}).strict();

export const YoutubeLlmOutputsUncheckedCreateInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  youtube_id: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  llm_prompt_type: z.string().optional().nullable(),
  output: z.string().optional().nullable()
}).strict();

export const YoutubeLlmOutputsUpdateInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  llm_prompt_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  output: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  youtube_videos: z.lazy(() => YoutubeVideosUpdateOneWithoutYoutube_llm_outputsNestedInputSchema).optional()
}).strict();

export const YoutubeLlmOutputsUncheckedUpdateInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  youtube_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  llm_prompt_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  output: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const YoutubeLlmOutputsCreateManyInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsCreateManyInput> = z.object({
  id: z.string().uuid(),
  youtube_id: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  llm_prompt_type: z.string().optional().nullable(),
  output: z.string().optional().nullable()
}).strict();

export const YoutubeLlmOutputsUpdateManyMutationInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  llm_prompt_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  output: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const YoutubeLlmOutputsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  youtube_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  llm_prompt_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  output: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const YoutubeVideosCreateInputSchema: z.ZodType<Prisma.YoutubeVideosCreateInput> = z.object({
  id: z.string(),
  transcript: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  title: z.string().optional().nullable(),
  author_name: z.string().optional().nullable(),
  author_url: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  height: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  width: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  version: z.string().optional().nullable(),
  provider_name: z.string().optional().nullable(),
  provider_url: z.string().optional().nullable(),
  thumbnail_height: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  thumbnail_width: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  thumbnail_url: z.string().optional().nullable(),
  html: z.string().optional().nullable(),
  youtube_basic_summary: z.lazy(() => YoutubeBasicSummaryCreateNestedManyWithoutYoutube_videosInputSchema).optional(),
  youtube_llm_outputs: z.lazy(() => YoutubeLlmOutputsCreateNestedManyWithoutYoutube_videosInputSchema).optional()
}).strict();

export const YoutubeVideosUncheckedCreateInputSchema: z.ZodType<Prisma.YoutubeVideosUncheckedCreateInput> = z.object({
  id: z.string(),
  transcript: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  title: z.string().optional().nullable(),
  author_name: z.string().optional().nullable(),
  author_url: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  height: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  width: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  version: z.string().optional().nullable(),
  provider_name: z.string().optional().nullable(),
  provider_url: z.string().optional().nullable(),
  thumbnail_height: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  thumbnail_width: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  thumbnail_url: z.string().optional().nullable(),
  html: z.string().optional().nullable(),
  youtube_basic_summary: z.lazy(() => YoutubeBasicSummaryUncheckedCreateNestedManyWithoutYoutube_videosInputSchema).optional(),
  youtube_llm_outputs: z.lazy(() => YoutubeLlmOutputsUncheckedCreateNestedManyWithoutYoutube_videosInputSchema).optional()
}).strict();

export const YoutubeVideosUpdateInputSchema: z.ZodType<Prisma.YoutubeVideosUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  transcript: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  author_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  author_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  height: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  width: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  version: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  provider_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  provider_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thumbnail_height: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thumbnail_width: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thumbnail_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  html: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  youtube_basic_summary: z.lazy(() => YoutubeBasicSummaryUpdateManyWithoutYoutube_videosNestedInputSchema).optional(),
  youtube_llm_outputs: z.lazy(() => YoutubeLlmOutputsUpdateManyWithoutYoutube_videosNestedInputSchema).optional()
}).strict();

export const YoutubeVideosUncheckedUpdateInputSchema: z.ZodType<Prisma.YoutubeVideosUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  transcript: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  author_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  author_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  height: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  width: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  version: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  provider_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  provider_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thumbnail_height: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thumbnail_width: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thumbnail_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  html: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  youtube_basic_summary: z.lazy(() => YoutubeBasicSummaryUncheckedUpdateManyWithoutYoutube_videosNestedInputSchema).optional(),
  youtube_llm_outputs: z.lazy(() => YoutubeLlmOutputsUncheckedUpdateManyWithoutYoutube_videosNestedInputSchema).optional()
}).strict();

export const YoutubeVideosCreateManyInputSchema: z.ZodType<Prisma.YoutubeVideosCreateManyInput> = z.object({
  id: z.string(),
  transcript: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  title: z.string().optional().nullable(),
  author_name: z.string().optional().nullable(),
  author_url: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  height: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  width: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  version: z.string().optional().nullable(),
  provider_name: z.string().optional().nullable(),
  provider_url: z.string().optional().nullable(),
  thumbnail_height: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  thumbnail_width: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  thumbnail_url: z.string().optional().nullable(),
  html: z.string().optional().nullable()
}).strict();

export const YoutubeVideosUpdateManyMutationInputSchema: z.ZodType<Prisma.YoutubeVideosUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  transcript: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  author_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  author_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  height: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  width: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  version: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  provider_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  provider_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thumbnail_height: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thumbnail_width: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thumbnail_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  html: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const YoutubeVideosUncheckedUpdateManyInputSchema: z.ZodType<Prisma.YoutubeVideosUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  transcript: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  author_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  author_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  height: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  width: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  version: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  provider_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  provider_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thumbnail_height: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thumbnail_width: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thumbnail_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  html: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UuidFilterSchema: z.ZodType<Prisma.UuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const TrpcCallsCountOrderByAggregateInputSchema: z.ZodType<Prisma.TrpcCallsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdat: z.lazy(() => SortOrderSchema).optional(),
  elapsedms: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  input: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  clientid: z.lazy(() => SortOrderSchema).optional(),
  response: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TrpcCallsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TrpcCallsAvgOrderByAggregateInput> = z.object({
  elapsedms: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TrpcCallsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TrpcCallsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdat: z.lazy(() => SortOrderSchema).optional(),
  elapsedms: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  input: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  clientid: z.lazy(() => SortOrderSchema).optional(),
  response: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TrpcCallsMinOrderByAggregateInputSchema: z.ZodType<Prisma.TrpcCallsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdat: z.lazy(() => SortOrderSchema).optional(),
  elapsedms: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  input: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  clientid: z.lazy(() => SortOrderSchema).optional(),
  response: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TrpcCallsSumOrderByAggregateInputSchema: z.ZodType<Prisma.TrpcCallsSumOrderByAggregateInput> = z.object({
  elapsedms: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UuidWithAggregatesFilterSchema: z.ZodType<Prisma.UuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const YoutubeVideosRelationFilterSchema: z.ZodType<Prisma.YoutubeVideosRelationFilter> = z.object({
  is: z.lazy(() => YoutubeVideosWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => YoutubeVideosWhereInputSchema).optional().nullable()
}).strict();

export const YoutubeBasicSummaryCountOrderByAggregateInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  youtube_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  hour_summaries: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const YoutubeBasicSummaryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  youtube_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  hour_summaries: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const YoutubeBasicSummaryMinOrderByAggregateInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  youtube_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  hour_summaries: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const YoutubeLlmOutputsCountOrderByAggregateInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  youtube_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  llm_prompt_type: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const YoutubeLlmOutputsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  youtube_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  llm_prompt_type: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const YoutubeLlmOutputsMinOrderByAggregateInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  youtube_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  llm_prompt_type: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const YoutubeBasicSummaryListRelationFilterSchema: z.ZodType<Prisma.YoutubeBasicSummaryListRelationFilter> = z.object({
  every: z.lazy(() => YoutubeBasicSummaryWhereInputSchema).optional(),
  some: z.lazy(() => YoutubeBasicSummaryWhereInputSchema).optional(),
  none: z.lazy(() => YoutubeBasicSummaryWhereInputSchema).optional()
}).strict();

export const YoutubeLlmOutputsListRelationFilterSchema: z.ZodType<Prisma.YoutubeLlmOutputsListRelationFilter> = z.object({
  every: z.lazy(() => YoutubeLlmOutputsWhereInputSchema).optional(),
  some: z.lazy(() => YoutubeLlmOutputsWhereInputSchema).optional(),
  none: z.lazy(() => YoutubeLlmOutputsWhereInputSchema).optional()
}).strict();

export const YoutubeBasicSummaryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const YoutubeLlmOutputsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const YoutubeVideosCountOrderByAggregateInputSchema: z.ZodType<Prisma.YoutubeVideosCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  transcript: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  author_name: z.lazy(() => SortOrderSchema).optional(),
  author_url: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  provider_name: z.lazy(() => SortOrderSchema).optional(),
  provider_url: z.lazy(() => SortOrderSchema).optional(),
  thumbnail_height: z.lazy(() => SortOrderSchema).optional(),
  thumbnail_width: z.lazy(() => SortOrderSchema).optional(),
  thumbnail_url: z.lazy(() => SortOrderSchema).optional(),
  html: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const YoutubeVideosAvgOrderByAggregateInputSchema: z.ZodType<Prisma.YoutubeVideosAvgOrderByAggregateInput> = z.object({
  height: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  thumbnail_height: z.lazy(() => SortOrderSchema).optional(),
  thumbnail_width: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const YoutubeVideosMaxOrderByAggregateInputSchema: z.ZodType<Prisma.YoutubeVideosMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  transcript: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  author_name: z.lazy(() => SortOrderSchema).optional(),
  author_url: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  provider_name: z.lazy(() => SortOrderSchema).optional(),
  provider_url: z.lazy(() => SortOrderSchema).optional(),
  thumbnail_height: z.lazy(() => SortOrderSchema).optional(),
  thumbnail_width: z.lazy(() => SortOrderSchema).optional(),
  thumbnail_url: z.lazy(() => SortOrderSchema).optional(),
  html: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const YoutubeVideosMinOrderByAggregateInputSchema: z.ZodType<Prisma.YoutubeVideosMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  transcript: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  author_name: z.lazy(() => SortOrderSchema).optional(),
  author_url: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  provider_name: z.lazy(() => SortOrderSchema).optional(),
  provider_url: z.lazy(() => SortOrderSchema).optional(),
  thumbnail_height: z.lazy(() => SortOrderSchema).optional(),
  thumbnail_width: z.lazy(() => SortOrderSchema).optional(),
  thumbnail_url: z.lazy(() => SortOrderSchema).optional(),
  html: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const YoutubeVideosSumOrderByAggregateInputSchema: z.ZodType<Prisma.YoutubeVideosSumOrderByAggregateInput> = z.object({
  height: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  thumbnail_height: z.lazy(() => SortOrderSchema).optional(),
  thumbnail_width: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const YoutubeVideosCreateNestedOneWithoutYoutube_basic_summaryInputSchema: z.ZodType<Prisma.YoutubeVideosCreateNestedOneWithoutYoutube_basic_summaryInput> = z.object({
  create: z.union([ z.lazy(() => YoutubeVideosCreateWithoutYoutube_basic_summaryInputSchema),z.lazy(() => YoutubeVideosUncheckedCreateWithoutYoutube_basic_summaryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => YoutubeVideosCreateOrConnectWithoutYoutube_basic_summaryInputSchema).optional(),
  connect: z.lazy(() => YoutubeVideosWhereUniqueInputSchema).optional()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const YoutubeVideosUpdateOneWithoutYoutube_basic_summaryNestedInputSchema: z.ZodType<Prisma.YoutubeVideosUpdateOneWithoutYoutube_basic_summaryNestedInput> = z.object({
  create: z.union([ z.lazy(() => YoutubeVideosCreateWithoutYoutube_basic_summaryInputSchema),z.lazy(() => YoutubeVideosUncheckedCreateWithoutYoutube_basic_summaryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => YoutubeVideosCreateOrConnectWithoutYoutube_basic_summaryInputSchema).optional(),
  upsert: z.lazy(() => YoutubeVideosUpsertWithoutYoutube_basic_summaryInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => YoutubeVideosWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => YoutubeVideosUpdateWithoutYoutube_basic_summaryInputSchema),z.lazy(() => YoutubeVideosUncheckedUpdateWithoutYoutube_basic_summaryInputSchema) ]).optional(),
}).strict();

export const YoutubeVideosCreateNestedOneWithoutYoutube_llm_outputsInputSchema: z.ZodType<Prisma.YoutubeVideosCreateNestedOneWithoutYoutube_llm_outputsInput> = z.object({
  create: z.union([ z.lazy(() => YoutubeVideosCreateWithoutYoutube_llm_outputsInputSchema),z.lazy(() => YoutubeVideosUncheckedCreateWithoutYoutube_llm_outputsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => YoutubeVideosCreateOrConnectWithoutYoutube_llm_outputsInputSchema).optional(),
  connect: z.lazy(() => YoutubeVideosWhereUniqueInputSchema).optional()
}).strict();

export const YoutubeVideosUpdateOneWithoutYoutube_llm_outputsNestedInputSchema: z.ZodType<Prisma.YoutubeVideosUpdateOneWithoutYoutube_llm_outputsNestedInput> = z.object({
  create: z.union([ z.lazy(() => YoutubeVideosCreateWithoutYoutube_llm_outputsInputSchema),z.lazy(() => YoutubeVideosUncheckedCreateWithoutYoutube_llm_outputsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => YoutubeVideosCreateOrConnectWithoutYoutube_llm_outputsInputSchema).optional(),
  upsert: z.lazy(() => YoutubeVideosUpsertWithoutYoutube_llm_outputsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => YoutubeVideosWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => YoutubeVideosUpdateWithoutYoutube_llm_outputsInputSchema),z.lazy(() => YoutubeVideosUncheckedUpdateWithoutYoutube_llm_outputsInputSchema) ]).optional(),
}).strict();

export const YoutubeBasicSummaryCreateNestedManyWithoutYoutube_videosInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryCreateNestedManyWithoutYoutube_videosInput> = z.object({
  create: z.union([ z.lazy(() => YoutubeBasicSummaryCreateWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeBasicSummaryCreateWithoutYoutube_videosInputSchema).array(),z.lazy(() => YoutubeBasicSummaryUncheckedCreateWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeBasicSummaryUncheckedCreateWithoutYoutube_videosInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => YoutubeBasicSummaryCreateOrConnectWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeBasicSummaryCreateOrConnectWithoutYoutube_videosInputSchema).array() ]).optional(),
  createMany: z.lazy(() => YoutubeBasicSummaryCreateManyYoutube_videosInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => YoutubeBasicSummaryWhereUniqueInputSchema),z.lazy(() => YoutubeBasicSummaryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const YoutubeLlmOutputsCreateNestedManyWithoutYoutube_videosInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsCreateNestedManyWithoutYoutube_videosInput> = z.object({
  create: z.union([ z.lazy(() => YoutubeLlmOutputsCreateWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeLlmOutputsCreateWithoutYoutube_videosInputSchema).array(),z.lazy(() => YoutubeLlmOutputsUncheckedCreateWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeLlmOutputsUncheckedCreateWithoutYoutube_videosInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => YoutubeLlmOutputsCreateOrConnectWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeLlmOutputsCreateOrConnectWithoutYoutube_videosInputSchema).array() ]).optional(),
  createMany: z.lazy(() => YoutubeLlmOutputsCreateManyYoutube_videosInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => YoutubeLlmOutputsWhereUniqueInputSchema),z.lazy(() => YoutubeLlmOutputsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const YoutubeBasicSummaryUncheckedCreateNestedManyWithoutYoutube_videosInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryUncheckedCreateNestedManyWithoutYoutube_videosInput> = z.object({
  create: z.union([ z.lazy(() => YoutubeBasicSummaryCreateWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeBasicSummaryCreateWithoutYoutube_videosInputSchema).array(),z.lazy(() => YoutubeBasicSummaryUncheckedCreateWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeBasicSummaryUncheckedCreateWithoutYoutube_videosInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => YoutubeBasicSummaryCreateOrConnectWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeBasicSummaryCreateOrConnectWithoutYoutube_videosInputSchema).array() ]).optional(),
  createMany: z.lazy(() => YoutubeBasicSummaryCreateManyYoutube_videosInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => YoutubeBasicSummaryWhereUniqueInputSchema),z.lazy(() => YoutubeBasicSummaryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const YoutubeLlmOutputsUncheckedCreateNestedManyWithoutYoutube_videosInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsUncheckedCreateNestedManyWithoutYoutube_videosInput> = z.object({
  create: z.union([ z.lazy(() => YoutubeLlmOutputsCreateWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeLlmOutputsCreateWithoutYoutube_videosInputSchema).array(),z.lazy(() => YoutubeLlmOutputsUncheckedCreateWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeLlmOutputsUncheckedCreateWithoutYoutube_videosInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => YoutubeLlmOutputsCreateOrConnectWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeLlmOutputsCreateOrConnectWithoutYoutube_videosInputSchema).array() ]).optional(),
  createMany: z.lazy(() => YoutubeLlmOutputsCreateManyYoutube_videosInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => YoutubeLlmOutputsWhereUniqueInputSchema),z.lazy(() => YoutubeLlmOutputsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const YoutubeBasicSummaryUpdateManyWithoutYoutube_videosNestedInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryUpdateManyWithoutYoutube_videosNestedInput> = z.object({
  create: z.union([ z.lazy(() => YoutubeBasicSummaryCreateWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeBasicSummaryCreateWithoutYoutube_videosInputSchema).array(),z.lazy(() => YoutubeBasicSummaryUncheckedCreateWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeBasicSummaryUncheckedCreateWithoutYoutube_videosInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => YoutubeBasicSummaryCreateOrConnectWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeBasicSummaryCreateOrConnectWithoutYoutube_videosInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => YoutubeBasicSummaryUpsertWithWhereUniqueWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeBasicSummaryUpsertWithWhereUniqueWithoutYoutube_videosInputSchema).array() ]).optional(),
  createMany: z.lazy(() => YoutubeBasicSummaryCreateManyYoutube_videosInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => YoutubeBasicSummaryWhereUniqueInputSchema),z.lazy(() => YoutubeBasicSummaryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => YoutubeBasicSummaryWhereUniqueInputSchema),z.lazy(() => YoutubeBasicSummaryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => YoutubeBasicSummaryWhereUniqueInputSchema),z.lazy(() => YoutubeBasicSummaryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => YoutubeBasicSummaryWhereUniqueInputSchema),z.lazy(() => YoutubeBasicSummaryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => YoutubeBasicSummaryUpdateWithWhereUniqueWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeBasicSummaryUpdateWithWhereUniqueWithoutYoutube_videosInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => YoutubeBasicSummaryUpdateManyWithWhereWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeBasicSummaryUpdateManyWithWhereWithoutYoutube_videosInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => YoutubeBasicSummaryScalarWhereInputSchema),z.lazy(() => YoutubeBasicSummaryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const YoutubeLlmOutputsUpdateManyWithoutYoutube_videosNestedInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsUpdateManyWithoutYoutube_videosNestedInput> = z.object({
  create: z.union([ z.lazy(() => YoutubeLlmOutputsCreateWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeLlmOutputsCreateWithoutYoutube_videosInputSchema).array(),z.lazy(() => YoutubeLlmOutputsUncheckedCreateWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeLlmOutputsUncheckedCreateWithoutYoutube_videosInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => YoutubeLlmOutputsCreateOrConnectWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeLlmOutputsCreateOrConnectWithoutYoutube_videosInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => YoutubeLlmOutputsUpsertWithWhereUniqueWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeLlmOutputsUpsertWithWhereUniqueWithoutYoutube_videosInputSchema).array() ]).optional(),
  createMany: z.lazy(() => YoutubeLlmOutputsCreateManyYoutube_videosInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => YoutubeLlmOutputsWhereUniqueInputSchema),z.lazy(() => YoutubeLlmOutputsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => YoutubeLlmOutputsWhereUniqueInputSchema),z.lazy(() => YoutubeLlmOutputsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => YoutubeLlmOutputsWhereUniqueInputSchema),z.lazy(() => YoutubeLlmOutputsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => YoutubeLlmOutputsWhereUniqueInputSchema),z.lazy(() => YoutubeLlmOutputsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => YoutubeLlmOutputsUpdateWithWhereUniqueWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeLlmOutputsUpdateWithWhereUniqueWithoutYoutube_videosInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => YoutubeLlmOutputsUpdateManyWithWhereWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeLlmOutputsUpdateManyWithWhereWithoutYoutube_videosInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => YoutubeLlmOutputsScalarWhereInputSchema),z.lazy(() => YoutubeLlmOutputsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const YoutubeBasicSummaryUncheckedUpdateManyWithoutYoutube_videosNestedInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryUncheckedUpdateManyWithoutYoutube_videosNestedInput> = z.object({
  create: z.union([ z.lazy(() => YoutubeBasicSummaryCreateWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeBasicSummaryCreateWithoutYoutube_videosInputSchema).array(),z.lazy(() => YoutubeBasicSummaryUncheckedCreateWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeBasicSummaryUncheckedCreateWithoutYoutube_videosInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => YoutubeBasicSummaryCreateOrConnectWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeBasicSummaryCreateOrConnectWithoutYoutube_videosInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => YoutubeBasicSummaryUpsertWithWhereUniqueWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeBasicSummaryUpsertWithWhereUniqueWithoutYoutube_videosInputSchema).array() ]).optional(),
  createMany: z.lazy(() => YoutubeBasicSummaryCreateManyYoutube_videosInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => YoutubeBasicSummaryWhereUniqueInputSchema),z.lazy(() => YoutubeBasicSummaryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => YoutubeBasicSummaryWhereUniqueInputSchema),z.lazy(() => YoutubeBasicSummaryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => YoutubeBasicSummaryWhereUniqueInputSchema),z.lazy(() => YoutubeBasicSummaryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => YoutubeBasicSummaryWhereUniqueInputSchema),z.lazy(() => YoutubeBasicSummaryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => YoutubeBasicSummaryUpdateWithWhereUniqueWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeBasicSummaryUpdateWithWhereUniqueWithoutYoutube_videosInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => YoutubeBasicSummaryUpdateManyWithWhereWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeBasicSummaryUpdateManyWithWhereWithoutYoutube_videosInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => YoutubeBasicSummaryScalarWhereInputSchema),z.lazy(() => YoutubeBasicSummaryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const YoutubeLlmOutputsUncheckedUpdateManyWithoutYoutube_videosNestedInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsUncheckedUpdateManyWithoutYoutube_videosNestedInput> = z.object({
  create: z.union([ z.lazy(() => YoutubeLlmOutputsCreateWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeLlmOutputsCreateWithoutYoutube_videosInputSchema).array(),z.lazy(() => YoutubeLlmOutputsUncheckedCreateWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeLlmOutputsUncheckedCreateWithoutYoutube_videosInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => YoutubeLlmOutputsCreateOrConnectWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeLlmOutputsCreateOrConnectWithoutYoutube_videosInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => YoutubeLlmOutputsUpsertWithWhereUniqueWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeLlmOutputsUpsertWithWhereUniqueWithoutYoutube_videosInputSchema).array() ]).optional(),
  createMany: z.lazy(() => YoutubeLlmOutputsCreateManyYoutube_videosInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => YoutubeLlmOutputsWhereUniqueInputSchema),z.lazy(() => YoutubeLlmOutputsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => YoutubeLlmOutputsWhereUniqueInputSchema),z.lazy(() => YoutubeLlmOutputsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => YoutubeLlmOutputsWhereUniqueInputSchema),z.lazy(() => YoutubeLlmOutputsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => YoutubeLlmOutputsWhereUniqueInputSchema),z.lazy(() => YoutubeLlmOutputsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => YoutubeLlmOutputsUpdateWithWhereUniqueWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeLlmOutputsUpdateWithWhereUniqueWithoutYoutube_videosInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => YoutubeLlmOutputsUpdateManyWithWhereWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeLlmOutputsUpdateManyWithWhereWithoutYoutube_videosInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => YoutubeLlmOutputsScalarWhereInputSchema),z.lazy(() => YoutubeLlmOutputsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NestedUuidFilterSchema: z.ZodType<Prisma.NestedUuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedUuidWithAggregatesFilterSchema: z.ZodType<Prisma.NestedUuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const YoutubeVideosCreateWithoutYoutube_basic_summaryInputSchema: z.ZodType<Prisma.YoutubeVideosCreateWithoutYoutube_basic_summaryInput> = z.object({
  id: z.string(),
  transcript: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  title: z.string().optional().nullable(),
  author_name: z.string().optional().nullable(),
  author_url: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  height: z.number().optional().nullable(),
  width: z.number().optional().nullable(),
  version: z.string().optional().nullable(),
  provider_name: z.string().optional().nullable(),
  provider_url: z.string().optional().nullable(),
  thumbnail_height: z.number().optional().nullable(),
  thumbnail_width: z.number().optional().nullable(),
  thumbnail_url: z.string().optional().nullable(),
  html: z.string().optional().nullable(),
  youtube_llm_outputs: z.lazy(() => YoutubeLlmOutputsCreateNestedManyWithoutYoutube_videosInputSchema).optional()
}).strict();

export const YoutubeVideosUncheckedCreateWithoutYoutube_basic_summaryInputSchema: z.ZodType<Prisma.YoutubeVideosUncheckedCreateWithoutYoutube_basic_summaryInput> = z.object({
  id: z.string(),
  transcript: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  title: z.string().optional().nullable(),
  author_name: z.string().optional().nullable(),
  author_url: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  height: z.number().optional().nullable(),
  width: z.number().optional().nullable(),
  version: z.string().optional().nullable(),
  provider_name: z.string().optional().nullable(),
  provider_url: z.string().optional().nullable(),
  thumbnail_height: z.number().optional().nullable(),
  thumbnail_width: z.number().optional().nullable(),
  thumbnail_url: z.string().optional().nullable(),
  html: z.string().optional().nullable(),
  youtube_llm_outputs: z.lazy(() => YoutubeLlmOutputsUncheckedCreateNestedManyWithoutYoutube_videosInputSchema).optional()
}).strict();

export const YoutubeVideosCreateOrConnectWithoutYoutube_basic_summaryInputSchema: z.ZodType<Prisma.YoutubeVideosCreateOrConnectWithoutYoutube_basic_summaryInput> = z.object({
  where: z.lazy(() => YoutubeVideosWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => YoutubeVideosCreateWithoutYoutube_basic_summaryInputSchema),z.lazy(() => YoutubeVideosUncheckedCreateWithoutYoutube_basic_summaryInputSchema) ]),
}).strict();

export const YoutubeVideosUpsertWithoutYoutube_basic_summaryInputSchema: z.ZodType<Prisma.YoutubeVideosUpsertWithoutYoutube_basic_summaryInput> = z.object({
  update: z.union([ z.lazy(() => YoutubeVideosUpdateWithoutYoutube_basic_summaryInputSchema),z.lazy(() => YoutubeVideosUncheckedUpdateWithoutYoutube_basic_summaryInputSchema) ]),
  create: z.union([ z.lazy(() => YoutubeVideosCreateWithoutYoutube_basic_summaryInputSchema),z.lazy(() => YoutubeVideosUncheckedCreateWithoutYoutube_basic_summaryInputSchema) ]),
}).strict();

export const YoutubeVideosUpdateWithoutYoutube_basic_summaryInputSchema: z.ZodType<Prisma.YoutubeVideosUpdateWithoutYoutube_basic_summaryInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  transcript: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  author_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  author_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  height: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  width: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  version: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  provider_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  provider_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thumbnail_height: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thumbnail_width: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thumbnail_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  html: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  youtube_llm_outputs: z.lazy(() => YoutubeLlmOutputsUpdateManyWithoutYoutube_videosNestedInputSchema).optional()
}).strict();

export const YoutubeVideosUncheckedUpdateWithoutYoutube_basic_summaryInputSchema: z.ZodType<Prisma.YoutubeVideosUncheckedUpdateWithoutYoutube_basic_summaryInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  transcript: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  author_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  author_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  height: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  width: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  version: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  provider_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  provider_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thumbnail_height: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thumbnail_width: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thumbnail_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  html: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  youtube_llm_outputs: z.lazy(() => YoutubeLlmOutputsUncheckedUpdateManyWithoutYoutube_videosNestedInputSchema).optional()
}).strict();

export const YoutubeVideosCreateWithoutYoutube_llm_outputsInputSchema: z.ZodType<Prisma.YoutubeVideosCreateWithoutYoutube_llm_outputsInput> = z.object({
  id: z.string(),
  transcript: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  title: z.string().optional().nullable(),
  author_name: z.string().optional().nullable(),
  author_url: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  height: z.number().optional().nullable(),
  width: z.number().optional().nullable(),
  version: z.string().optional().nullable(),
  provider_name: z.string().optional().nullable(),
  provider_url: z.string().optional().nullable(),
  thumbnail_height: z.number().optional().nullable(),
  thumbnail_width: z.number().optional().nullable(),
  thumbnail_url: z.string().optional().nullable(),
  html: z.string().optional().nullable(),
  youtube_basic_summary: z.lazy(() => YoutubeBasicSummaryCreateNestedManyWithoutYoutube_videosInputSchema).optional()
}).strict();

export const YoutubeVideosUncheckedCreateWithoutYoutube_llm_outputsInputSchema: z.ZodType<Prisma.YoutubeVideosUncheckedCreateWithoutYoutube_llm_outputsInput> = z.object({
  id: z.string(),
  transcript: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  title: z.string().optional().nullable(),
  author_name: z.string().optional().nullable(),
  author_url: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  height: z.number().optional().nullable(),
  width: z.number().optional().nullable(),
  version: z.string().optional().nullable(),
  provider_name: z.string().optional().nullable(),
  provider_url: z.string().optional().nullable(),
  thumbnail_height: z.number().optional().nullable(),
  thumbnail_width: z.number().optional().nullable(),
  thumbnail_url: z.string().optional().nullable(),
  html: z.string().optional().nullable(),
  youtube_basic_summary: z.lazy(() => YoutubeBasicSummaryUncheckedCreateNestedManyWithoutYoutube_videosInputSchema).optional()
}).strict();

export const YoutubeVideosCreateOrConnectWithoutYoutube_llm_outputsInputSchema: z.ZodType<Prisma.YoutubeVideosCreateOrConnectWithoutYoutube_llm_outputsInput> = z.object({
  where: z.lazy(() => YoutubeVideosWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => YoutubeVideosCreateWithoutYoutube_llm_outputsInputSchema),z.lazy(() => YoutubeVideosUncheckedCreateWithoutYoutube_llm_outputsInputSchema) ]),
}).strict();

export const YoutubeVideosUpsertWithoutYoutube_llm_outputsInputSchema: z.ZodType<Prisma.YoutubeVideosUpsertWithoutYoutube_llm_outputsInput> = z.object({
  update: z.union([ z.lazy(() => YoutubeVideosUpdateWithoutYoutube_llm_outputsInputSchema),z.lazy(() => YoutubeVideosUncheckedUpdateWithoutYoutube_llm_outputsInputSchema) ]),
  create: z.union([ z.lazy(() => YoutubeVideosCreateWithoutYoutube_llm_outputsInputSchema),z.lazy(() => YoutubeVideosUncheckedCreateWithoutYoutube_llm_outputsInputSchema) ]),
}).strict();

export const YoutubeVideosUpdateWithoutYoutube_llm_outputsInputSchema: z.ZodType<Prisma.YoutubeVideosUpdateWithoutYoutube_llm_outputsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  transcript: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  author_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  author_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  height: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  width: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  version: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  provider_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  provider_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thumbnail_height: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thumbnail_width: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thumbnail_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  html: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  youtube_basic_summary: z.lazy(() => YoutubeBasicSummaryUpdateManyWithoutYoutube_videosNestedInputSchema).optional()
}).strict();

export const YoutubeVideosUncheckedUpdateWithoutYoutube_llm_outputsInputSchema: z.ZodType<Prisma.YoutubeVideosUncheckedUpdateWithoutYoutube_llm_outputsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  transcript: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  author_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  author_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  height: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  width: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  version: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  provider_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  provider_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thumbnail_height: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thumbnail_width: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  thumbnail_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  html: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  youtube_basic_summary: z.lazy(() => YoutubeBasicSummaryUncheckedUpdateManyWithoutYoutube_videosNestedInputSchema).optional()
}).strict();

export const YoutubeBasicSummaryCreateWithoutYoutube_videosInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryCreateWithoutYoutube_videosInput> = z.object({
  id: z.string(),
  created_at: z.coerce.date().optional().nullable(),
  hour_summaries: z.string().optional().nullable()
}).strict();

export const YoutubeBasicSummaryUncheckedCreateWithoutYoutube_videosInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryUncheckedCreateWithoutYoutube_videosInput> = z.object({
  id: z.string(),
  created_at: z.coerce.date().optional().nullable(),
  hour_summaries: z.string().optional().nullable()
}).strict();

export const YoutubeBasicSummaryCreateOrConnectWithoutYoutube_videosInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryCreateOrConnectWithoutYoutube_videosInput> = z.object({
  where: z.lazy(() => YoutubeBasicSummaryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => YoutubeBasicSummaryCreateWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeBasicSummaryUncheckedCreateWithoutYoutube_videosInputSchema) ]),
}).strict();

export const YoutubeBasicSummaryCreateManyYoutube_videosInputEnvelopeSchema: z.ZodType<Prisma.YoutubeBasicSummaryCreateManyYoutube_videosInputEnvelope> = z.object({
  data: z.lazy(() => YoutubeBasicSummaryCreateManyYoutube_videosInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const YoutubeLlmOutputsCreateWithoutYoutube_videosInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsCreateWithoutYoutube_videosInput> = z.object({
  id: z.string(),
  created_at: z.coerce.date().optional().nullable(),
  llm_prompt_type: z.string().optional().nullable(),
  output: z.string().optional().nullable()
}).strict();

export const YoutubeLlmOutputsUncheckedCreateWithoutYoutube_videosInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsUncheckedCreateWithoutYoutube_videosInput> = z.object({
  id: z.string(),
  created_at: z.coerce.date().optional().nullable(),
  llm_prompt_type: z.string().optional().nullable(),
  output: z.string().optional().nullable()
}).strict();

export const YoutubeLlmOutputsCreateOrConnectWithoutYoutube_videosInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsCreateOrConnectWithoutYoutube_videosInput> = z.object({
  where: z.lazy(() => YoutubeLlmOutputsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => YoutubeLlmOutputsCreateWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeLlmOutputsUncheckedCreateWithoutYoutube_videosInputSchema) ]),
}).strict();

export const YoutubeLlmOutputsCreateManyYoutube_videosInputEnvelopeSchema: z.ZodType<Prisma.YoutubeLlmOutputsCreateManyYoutube_videosInputEnvelope> = z.object({
  data: z.lazy(() => YoutubeLlmOutputsCreateManyYoutube_videosInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const YoutubeBasicSummaryUpsertWithWhereUniqueWithoutYoutube_videosInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryUpsertWithWhereUniqueWithoutYoutube_videosInput> = z.object({
  where: z.lazy(() => YoutubeBasicSummaryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => YoutubeBasicSummaryUpdateWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeBasicSummaryUncheckedUpdateWithoutYoutube_videosInputSchema) ]),
  create: z.union([ z.lazy(() => YoutubeBasicSummaryCreateWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeBasicSummaryUncheckedCreateWithoutYoutube_videosInputSchema) ]),
}).strict();

export const YoutubeBasicSummaryUpdateWithWhereUniqueWithoutYoutube_videosInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryUpdateWithWhereUniqueWithoutYoutube_videosInput> = z.object({
  where: z.lazy(() => YoutubeBasicSummaryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => YoutubeBasicSummaryUpdateWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeBasicSummaryUncheckedUpdateWithoutYoutube_videosInputSchema) ]),
}).strict();

export const YoutubeBasicSummaryUpdateManyWithWhereWithoutYoutube_videosInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryUpdateManyWithWhereWithoutYoutube_videosInput> = z.object({
  where: z.lazy(() => YoutubeBasicSummaryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => YoutubeBasicSummaryUpdateManyMutationInputSchema),z.lazy(() => YoutubeBasicSummaryUncheckedUpdateManyWithoutYoutube_basic_summaryInputSchema) ]),
}).strict();

export const YoutubeBasicSummaryScalarWhereInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => YoutubeBasicSummaryScalarWhereInputSchema),z.lazy(() => YoutubeBasicSummaryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => YoutubeBasicSummaryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => YoutubeBasicSummaryScalarWhereInputSchema),z.lazy(() => YoutubeBasicSummaryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  youtube_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  hour_summaries: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const YoutubeLlmOutputsUpsertWithWhereUniqueWithoutYoutube_videosInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsUpsertWithWhereUniqueWithoutYoutube_videosInput> = z.object({
  where: z.lazy(() => YoutubeLlmOutputsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => YoutubeLlmOutputsUpdateWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeLlmOutputsUncheckedUpdateWithoutYoutube_videosInputSchema) ]),
  create: z.union([ z.lazy(() => YoutubeLlmOutputsCreateWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeLlmOutputsUncheckedCreateWithoutYoutube_videosInputSchema) ]),
}).strict();

export const YoutubeLlmOutputsUpdateWithWhereUniqueWithoutYoutube_videosInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsUpdateWithWhereUniqueWithoutYoutube_videosInput> = z.object({
  where: z.lazy(() => YoutubeLlmOutputsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => YoutubeLlmOutputsUpdateWithoutYoutube_videosInputSchema),z.lazy(() => YoutubeLlmOutputsUncheckedUpdateWithoutYoutube_videosInputSchema) ]),
}).strict();

export const YoutubeLlmOutputsUpdateManyWithWhereWithoutYoutube_videosInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsUpdateManyWithWhereWithoutYoutube_videosInput> = z.object({
  where: z.lazy(() => YoutubeLlmOutputsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => YoutubeLlmOutputsUpdateManyMutationInputSchema),z.lazy(() => YoutubeLlmOutputsUncheckedUpdateManyWithoutYoutube_llm_outputsInputSchema) ]),
}).strict();

export const YoutubeLlmOutputsScalarWhereInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => YoutubeLlmOutputsScalarWhereInputSchema),z.lazy(() => YoutubeLlmOutputsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => YoutubeLlmOutputsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => YoutubeLlmOutputsScalarWhereInputSchema),z.lazy(() => YoutubeLlmOutputsScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  youtube_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  llm_prompt_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  output: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const YoutubeBasicSummaryCreateManyYoutube_videosInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryCreateManyYoutube_videosInput> = z.object({
  id: z.string().uuid(),
  created_at: z.coerce.date().optional().nullable(),
  hour_summaries: z.string().optional().nullable()
}).strict();

export const YoutubeLlmOutputsCreateManyYoutube_videosInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsCreateManyYoutube_videosInput> = z.object({
  id: z.string().uuid(),
  created_at: z.coerce.date().optional().nullable(),
  llm_prompt_type: z.string().optional().nullable(),
  output: z.string().optional().nullable()
}).strict();

export const YoutubeBasicSummaryUpdateWithoutYoutube_videosInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryUpdateWithoutYoutube_videosInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hour_summaries: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const YoutubeBasicSummaryUncheckedUpdateWithoutYoutube_videosInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryUncheckedUpdateWithoutYoutube_videosInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hour_summaries: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const YoutubeBasicSummaryUncheckedUpdateManyWithoutYoutube_basic_summaryInputSchema: z.ZodType<Prisma.YoutubeBasicSummaryUncheckedUpdateManyWithoutYoutube_basic_summaryInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hour_summaries: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const YoutubeLlmOutputsUpdateWithoutYoutube_videosInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsUpdateWithoutYoutube_videosInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  llm_prompt_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  output: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const YoutubeLlmOutputsUncheckedUpdateWithoutYoutube_videosInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsUncheckedUpdateWithoutYoutube_videosInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  llm_prompt_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  output: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const YoutubeLlmOutputsUncheckedUpdateManyWithoutYoutube_llm_outputsInputSchema: z.ZodType<Prisma.YoutubeLlmOutputsUncheckedUpdateManyWithoutYoutube_llm_outputsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  llm_prompt_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  output: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const TrpcCallsFindFirstArgsSchema: z.ZodType<Prisma.TrpcCallsFindFirstArgs> = z.object({
  select: TrpcCallsSelectSchema.optional(),
  where: TrpcCallsWhereInputSchema.optional(),
  orderBy: z.union([ TrpcCallsOrderByWithRelationInputSchema.array(),TrpcCallsOrderByWithRelationInputSchema ]).optional(),
  cursor: TrpcCallsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TrpcCallsScalarFieldEnumSchema.array().optional(),
}).strict()

export const TrpcCallsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TrpcCallsFindFirstOrThrowArgs> = z.object({
  select: TrpcCallsSelectSchema.optional(),
  where: TrpcCallsWhereInputSchema.optional(),
  orderBy: z.union([ TrpcCallsOrderByWithRelationInputSchema.array(),TrpcCallsOrderByWithRelationInputSchema ]).optional(),
  cursor: TrpcCallsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TrpcCallsScalarFieldEnumSchema.array().optional(),
}).strict()

export const TrpcCallsFindManyArgsSchema: z.ZodType<Prisma.TrpcCallsFindManyArgs> = z.object({
  select: TrpcCallsSelectSchema.optional(),
  where: TrpcCallsWhereInputSchema.optional(),
  orderBy: z.union([ TrpcCallsOrderByWithRelationInputSchema.array(),TrpcCallsOrderByWithRelationInputSchema ]).optional(),
  cursor: TrpcCallsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TrpcCallsScalarFieldEnumSchema.array().optional(),
}).strict()

export const TrpcCallsAggregateArgsSchema: z.ZodType<Prisma.TrpcCallsAggregateArgs> = z.object({
  where: TrpcCallsWhereInputSchema.optional(),
  orderBy: z.union([ TrpcCallsOrderByWithRelationInputSchema.array(),TrpcCallsOrderByWithRelationInputSchema ]).optional(),
  cursor: TrpcCallsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const TrpcCallsGroupByArgsSchema: z.ZodType<Prisma.TrpcCallsGroupByArgs> = z.object({
  where: TrpcCallsWhereInputSchema.optional(),
  orderBy: z.union([ TrpcCallsOrderByWithAggregationInputSchema.array(),TrpcCallsOrderByWithAggregationInputSchema ]).optional(),
  by: TrpcCallsScalarFieldEnumSchema.array(),
  having: TrpcCallsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const TrpcCallsFindUniqueArgsSchema: z.ZodType<Prisma.TrpcCallsFindUniqueArgs> = z.object({
  select: TrpcCallsSelectSchema.optional(),
  where: TrpcCallsWhereUniqueInputSchema,
}).strict()

export const TrpcCallsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TrpcCallsFindUniqueOrThrowArgs> = z.object({
  select: TrpcCallsSelectSchema.optional(),
  where: TrpcCallsWhereUniqueInputSchema,
}).strict()

export const YoutubeBasicSummaryFindFirstArgsSchema: z.ZodType<Prisma.YoutubeBasicSummaryFindFirstArgs> = z.object({
  select: YoutubeBasicSummarySelectSchema.optional(),
  include: YoutubeBasicSummaryIncludeSchema.optional(),
  where: YoutubeBasicSummaryWhereInputSchema.optional(),
  orderBy: z.union([ YoutubeBasicSummaryOrderByWithRelationInputSchema.array(),YoutubeBasicSummaryOrderByWithRelationInputSchema ]).optional(),
  cursor: YoutubeBasicSummaryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: YoutubeBasicSummaryScalarFieldEnumSchema.array().optional(),
}).strict()

export const YoutubeBasicSummaryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.YoutubeBasicSummaryFindFirstOrThrowArgs> = z.object({
  select: YoutubeBasicSummarySelectSchema.optional(),
  include: YoutubeBasicSummaryIncludeSchema.optional(),
  where: YoutubeBasicSummaryWhereInputSchema.optional(),
  orderBy: z.union([ YoutubeBasicSummaryOrderByWithRelationInputSchema.array(),YoutubeBasicSummaryOrderByWithRelationInputSchema ]).optional(),
  cursor: YoutubeBasicSummaryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: YoutubeBasicSummaryScalarFieldEnumSchema.array().optional(),
}).strict()

export const YoutubeBasicSummaryFindManyArgsSchema: z.ZodType<Prisma.YoutubeBasicSummaryFindManyArgs> = z.object({
  select: YoutubeBasicSummarySelectSchema.optional(),
  include: YoutubeBasicSummaryIncludeSchema.optional(),
  where: YoutubeBasicSummaryWhereInputSchema.optional(),
  orderBy: z.union([ YoutubeBasicSummaryOrderByWithRelationInputSchema.array(),YoutubeBasicSummaryOrderByWithRelationInputSchema ]).optional(),
  cursor: YoutubeBasicSummaryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: YoutubeBasicSummaryScalarFieldEnumSchema.array().optional(),
}).strict()

export const YoutubeBasicSummaryAggregateArgsSchema: z.ZodType<Prisma.YoutubeBasicSummaryAggregateArgs> = z.object({
  where: YoutubeBasicSummaryWhereInputSchema.optional(),
  orderBy: z.union([ YoutubeBasicSummaryOrderByWithRelationInputSchema.array(),YoutubeBasicSummaryOrderByWithRelationInputSchema ]).optional(),
  cursor: YoutubeBasicSummaryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const YoutubeBasicSummaryGroupByArgsSchema: z.ZodType<Prisma.YoutubeBasicSummaryGroupByArgs> = z.object({
  where: YoutubeBasicSummaryWhereInputSchema.optional(),
  orderBy: z.union([ YoutubeBasicSummaryOrderByWithAggregationInputSchema.array(),YoutubeBasicSummaryOrderByWithAggregationInputSchema ]).optional(),
  by: YoutubeBasicSummaryScalarFieldEnumSchema.array(),
  having: YoutubeBasicSummaryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const YoutubeBasicSummaryFindUniqueArgsSchema: z.ZodType<Prisma.YoutubeBasicSummaryFindUniqueArgs> = z.object({
  select: YoutubeBasicSummarySelectSchema.optional(),
  include: YoutubeBasicSummaryIncludeSchema.optional(),
  where: YoutubeBasicSummaryWhereUniqueInputSchema,
}).strict()

export const YoutubeBasicSummaryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.YoutubeBasicSummaryFindUniqueOrThrowArgs> = z.object({
  select: YoutubeBasicSummarySelectSchema.optional(),
  include: YoutubeBasicSummaryIncludeSchema.optional(),
  where: YoutubeBasicSummaryWhereUniqueInputSchema,
}).strict()

export const YoutubeLlmOutputsFindFirstArgsSchema: z.ZodType<Prisma.YoutubeLlmOutputsFindFirstArgs> = z.object({
  select: YoutubeLlmOutputsSelectSchema.optional(),
  include: YoutubeLlmOutputsIncludeSchema.optional(),
  where: YoutubeLlmOutputsWhereInputSchema.optional(),
  orderBy: z.union([ YoutubeLlmOutputsOrderByWithRelationInputSchema.array(),YoutubeLlmOutputsOrderByWithRelationInputSchema ]).optional(),
  cursor: YoutubeLlmOutputsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: YoutubeLlmOutputsScalarFieldEnumSchema.array().optional(),
}).strict()

export const YoutubeLlmOutputsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.YoutubeLlmOutputsFindFirstOrThrowArgs> = z.object({
  select: YoutubeLlmOutputsSelectSchema.optional(),
  include: YoutubeLlmOutputsIncludeSchema.optional(),
  where: YoutubeLlmOutputsWhereInputSchema.optional(),
  orderBy: z.union([ YoutubeLlmOutputsOrderByWithRelationInputSchema.array(),YoutubeLlmOutputsOrderByWithRelationInputSchema ]).optional(),
  cursor: YoutubeLlmOutputsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: YoutubeLlmOutputsScalarFieldEnumSchema.array().optional(),
}).strict()

export const YoutubeLlmOutputsFindManyArgsSchema: z.ZodType<Prisma.YoutubeLlmOutputsFindManyArgs> = z.object({
  select: YoutubeLlmOutputsSelectSchema.optional(),
  include: YoutubeLlmOutputsIncludeSchema.optional(),
  where: YoutubeLlmOutputsWhereInputSchema.optional(),
  orderBy: z.union([ YoutubeLlmOutputsOrderByWithRelationInputSchema.array(),YoutubeLlmOutputsOrderByWithRelationInputSchema ]).optional(),
  cursor: YoutubeLlmOutputsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: YoutubeLlmOutputsScalarFieldEnumSchema.array().optional(),
}).strict()

export const YoutubeLlmOutputsAggregateArgsSchema: z.ZodType<Prisma.YoutubeLlmOutputsAggregateArgs> = z.object({
  where: YoutubeLlmOutputsWhereInputSchema.optional(),
  orderBy: z.union([ YoutubeLlmOutputsOrderByWithRelationInputSchema.array(),YoutubeLlmOutputsOrderByWithRelationInputSchema ]).optional(),
  cursor: YoutubeLlmOutputsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const YoutubeLlmOutputsGroupByArgsSchema: z.ZodType<Prisma.YoutubeLlmOutputsGroupByArgs> = z.object({
  where: YoutubeLlmOutputsWhereInputSchema.optional(),
  orderBy: z.union([ YoutubeLlmOutputsOrderByWithAggregationInputSchema.array(),YoutubeLlmOutputsOrderByWithAggregationInputSchema ]).optional(),
  by: YoutubeLlmOutputsScalarFieldEnumSchema.array(),
  having: YoutubeLlmOutputsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const YoutubeLlmOutputsFindUniqueArgsSchema: z.ZodType<Prisma.YoutubeLlmOutputsFindUniqueArgs> = z.object({
  select: YoutubeLlmOutputsSelectSchema.optional(),
  include: YoutubeLlmOutputsIncludeSchema.optional(),
  where: YoutubeLlmOutputsWhereUniqueInputSchema,
}).strict()

export const YoutubeLlmOutputsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.YoutubeLlmOutputsFindUniqueOrThrowArgs> = z.object({
  select: YoutubeLlmOutputsSelectSchema.optional(),
  include: YoutubeLlmOutputsIncludeSchema.optional(),
  where: YoutubeLlmOutputsWhereUniqueInputSchema,
}).strict()

export const YoutubeVideosFindFirstArgsSchema: z.ZodType<Prisma.YoutubeVideosFindFirstArgs> = z.object({
  select: YoutubeVideosSelectSchema.optional(),
  include: YoutubeVideosIncludeSchema.optional(),
  where: YoutubeVideosWhereInputSchema.optional(),
  orderBy: z.union([ YoutubeVideosOrderByWithRelationInputSchema.array(),YoutubeVideosOrderByWithRelationInputSchema ]).optional(),
  cursor: YoutubeVideosWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: YoutubeVideosScalarFieldEnumSchema.array().optional(),
}).strict()

export const YoutubeVideosFindFirstOrThrowArgsSchema: z.ZodType<Prisma.YoutubeVideosFindFirstOrThrowArgs> = z.object({
  select: YoutubeVideosSelectSchema.optional(),
  include: YoutubeVideosIncludeSchema.optional(),
  where: YoutubeVideosWhereInputSchema.optional(),
  orderBy: z.union([ YoutubeVideosOrderByWithRelationInputSchema.array(),YoutubeVideosOrderByWithRelationInputSchema ]).optional(),
  cursor: YoutubeVideosWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: YoutubeVideosScalarFieldEnumSchema.array().optional(),
}).strict()

export const YoutubeVideosFindManyArgsSchema: z.ZodType<Prisma.YoutubeVideosFindManyArgs> = z.object({
  select: YoutubeVideosSelectSchema.optional(),
  include: YoutubeVideosIncludeSchema.optional(),
  where: YoutubeVideosWhereInputSchema.optional(),
  orderBy: z.union([ YoutubeVideosOrderByWithRelationInputSchema.array(),YoutubeVideosOrderByWithRelationInputSchema ]).optional(),
  cursor: YoutubeVideosWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: YoutubeVideosScalarFieldEnumSchema.array().optional(),
}).strict()

export const YoutubeVideosAggregateArgsSchema: z.ZodType<Prisma.YoutubeVideosAggregateArgs> = z.object({
  where: YoutubeVideosWhereInputSchema.optional(),
  orderBy: z.union([ YoutubeVideosOrderByWithRelationInputSchema.array(),YoutubeVideosOrderByWithRelationInputSchema ]).optional(),
  cursor: YoutubeVideosWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const YoutubeVideosGroupByArgsSchema: z.ZodType<Prisma.YoutubeVideosGroupByArgs> = z.object({
  where: YoutubeVideosWhereInputSchema.optional(),
  orderBy: z.union([ YoutubeVideosOrderByWithAggregationInputSchema.array(),YoutubeVideosOrderByWithAggregationInputSchema ]).optional(),
  by: YoutubeVideosScalarFieldEnumSchema.array(),
  having: YoutubeVideosScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const YoutubeVideosFindUniqueArgsSchema: z.ZodType<Prisma.YoutubeVideosFindUniqueArgs> = z.object({
  select: YoutubeVideosSelectSchema.optional(),
  include: YoutubeVideosIncludeSchema.optional(),
  where: YoutubeVideosWhereUniqueInputSchema,
}).strict()

export const YoutubeVideosFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.YoutubeVideosFindUniqueOrThrowArgs> = z.object({
  select: YoutubeVideosSelectSchema.optional(),
  include: YoutubeVideosIncludeSchema.optional(),
  where: YoutubeVideosWhereUniqueInputSchema,
}).strict()

export const TrpcCallsCreateArgsSchema: z.ZodType<Prisma.TrpcCallsCreateArgs> = z.object({
  select: TrpcCallsSelectSchema.optional(),
  data: z.union([ TrpcCallsCreateInputSchema,TrpcCallsUncheckedCreateInputSchema ]),
}).strict()

export const TrpcCallsUpsertArgsSchema: z.ZodType<Prisma.TrpcCallsUpsertArgs> = z.object({
  select: TrpcCallsSelectSchema.optional(),
  where: TrpcCallsWhereUniqueInputSchema,
  create: z.union([ TrpcCallsCreateInputSchema,TrpcCallsUncheckedCreateInputSchema ]),
  update: z.union([ TrpcCallsUpdateInputSchema,TrpcCallsUncheckedUpdateInputSchema ]),
}).strict()

export const TrpcCallsCreateManyArgsSchema: z.ZodType<Prisma.TrpcCallsCreateManyArgs> = z.object({
  data: TrpcCallsCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const TrpcCallsDeleteArgsSchema: z.ZodType<Prisma.TrpcCallsDeleteArgs> = z.object({
  select: TrpcCallsSelectSchema.optional(),
  where: TrpcCallsWhereUniqueInputSchema,
}).strict()

export const TrpcCallsUpdateArgsSchema: z.ZodType<Prisma.TrpcCallsUpdateArgs> = z.object({
  select: TrpcCallsSelectSchema.optional(),
  data: z.union([ TrpcCallsUpdateInputSchema,TrpcCallsUncheckedUpdateInputSchema ]),
  where: TrpcCallsWhereUniqueInputSchema,
}).strict()

export const TrpcCallsUpdateManyArgsSchema: z.ZodType<Prisma.TrpcCallsUpdateManyArgs> = z.object({
  data: z.union([ TrpcCallsUpdateManyMutationInputSchema,TrpcCallsUncheckedUpdateManyInputSchema ]),
  where: TrpcCallsWhereInputSchema.optional(),
}).strict()

export const TrpcCallsDeleteManyArgsSchema: z.ZodType<Prisma.TrpcCallsDeleteManyArgs> = z.object({
  where: TrpcCallsWhereInputSchema.optional(),
}).strict()

export const YoutubeBasicSummaryCreateArgsSchema: z.ZodType<Prisma.YoutubeBasicSummaryCreateArgs> = z.object({
  select: YoutubeBasicSummarySelectSchema.optional(),
  include: YoutubeBasicSummaryIncludeSchema.optional(),
  data: z.union([ YoutubeBasicSummaryCreateInputSchema,YoutubeBasicSummaryUncheckedCreateInputSchema ]),
}).strict()

export const YoutubeBasicSummaryUpsertArgsSchema: z.ZodType<Prisma.YoutubeBasicSummaryUpsertArgs> = z.object({
  select: YoutubeBasicSummarySelectSchema.optional(),
  include: YoutubeBasicSummaryIncludeSchema.optional(),
  where: YoutubeBasicSummaryWhereUniqueInputSchema,
  create: z.union([ YoutubeBasicSummaryCreateInputSchema,YoutubeBasicSummaryUncheckedCreateInputSchema ]),
  update: z.union([ YoutubeBasicSummaryUpdateInputSchema,YoutubeBasicSummaryUncheckedUpdateInputSchema ]),
}).strict()

export const YoutubeBasicSummaryCreateManyArgsSchema: z.ZodType<Prisma.YoutubeBasicSummaryCreateManyArgs> = z.object({
  data: YoutubeBasicSummaryCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const YoutubeBasicSummaryDeleteArgsSchema: z.ZodType<Prisma.YoutubeBasicSummaryDeleteArgs> = z.object({
  select: YoutubeBasicSummarySelectSchema.optional(),
  include: YoutubeBasicSummaryIncludeSchema.optional(),
  where: YoutubeBasicSummaryWhereUniqueInputSchema,
}).strict()

export const YoutubeBasicSummaryUpdateArgsSchema: z.ZodType<Prisma.YoutubeBasicSummaryUpdateArgs> = z.object({
  select: YoutubeBasicSummarySelectSchema.optional(),
  include: YoutubeBasicSummaryIncludeSchema.optional(),
  data: z.union([ YoutubeBasicSummaryUpdateInputSchema,YoutubeBasicSummaryUncheckedUpdateInputSchema ]),
  where: YoutubeBasicSummaryWhereUniqueInputSchema,
}).strict()

export const YoutubeBasicSummaryUpdateManyArgsSchema: z.ZodType<Prisma.YoutubeBasicSummaryUpdateManyArgs> = z.object({
  data: z.union([ YoutubeBasicSummaryUpdateManyMutationInputSchema,YoutubeBasicSummaryUncheckedUpdateManyInputSchema ]),
  where: YoutubeBasicSummaryWhereInputSchema.optional(),
}).strict()

export const YoutubeBasicSummaryDeleteManyArgsSchema: z.ZodType<Prisma.YoutubeBasicSummaryDeleteManyArgs> = z.object({
  where: YoutubeBasicSummaryWhereInputSchema.optional(),
}).strict()

export const YoutubeLlmOutputsCreateArgsSchema: z.ZodType<Prisma.YoutubeLlmOutputsCreateArgs> = z.object({
  select: YoutubeLlmOutputsSelectSchema.optional(),
  include: YoutubeLlmOutputsIncludeSchema.optional(),
  data: z.union([ YoutubeLlmOutputsCreateInputSchema,YoutubeLlmOutputsUncheckedCreateInputSchema ]),
}).strict()

export const YoutubeLlmOutputsUpsertArgsSchema: z.ZodType<Prisma.YoutubeLlmOutputsUpsertArgs> = z.object({
  select: YoutubeLlmOutputsSelectSchema.optional(),
  include: YoutubeLlmOutputsIncludeSchema.optional(),
  where: YoutubeLlmOutputsWhereUniqueInputSchema,
  create: z.union([ YoutubeLlmOutputsCreateInputSchema,YoutubeLlmOutputsUncheckedCreateInputSchema ]),
  update: z.union([ YoutubeLlmOutputsUpdateInputSchema,YoutubeLlmOutputsUncheckedUpdateInputSchema ]),
}).strict()

export const YoutubeLlmOutputsCreateManyArgsSchema: z.ZodType<Prisma.YoutubeLlmOutputsCreateManyArgs> = z.object({
  data: YoutubeLlmOutputsCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const YoutubeLlmOutputsDeleteArgsSchema: z.ZodType<Prisma.YoutubeLlmOutputsDeleteArgs> = z.object({
  select: YoutubeLlmOutputsSelectSchema.optional(),
  include: YoutubeLlmOutputsIncludeSchema.optional(),
  where: YoutubeLlmOutputsWhereUniqueInputSchema,
}).strict()

export const YoutubeLlmOutputsUpdateArgsSchema: z.ZodType<Prisma.YoutubeLlmOutputsUpdateArgs> = z.object({
  select: YoutubeLlmOutputsSelectSchema.optional(),
  include: YoutubeLlmOutputsIncludeSchema.optional(),
  data: z.union([ YoutubeLlmOutputsUpdateInputSchema,YoutubeLlmOutputsUncheckedUpdateInputSchema ]),
  where: YoutubeLlmOutputsWhereUniqueInputSchema,
}).strict()

export const YoutubeLlmOutputsUpdateManyArgsSchema: z.ZodType<Prisma.YoutubeLlmOutputsUpdateManyArgs> = z.object({
  data: z.union([ YoutubeLlmOutputsUpdateManyMutationInputSchema,YoutubeLlmOutputsUncheckedUpdateManyInputSchema ]),
  where: YoutubeLlmOutputsWhereInputSchema.optional(),
}).strict()

export const YoutubeLlmOutputsDeleteManyArgsSchema: z.ZodType<Prisma.YoutubeLlmOutputsDeleteManyArgs> = z.object({
  where: YoutubeLlmOutputsWhereInputSchema.optional(),
}).strict()

export const YoutubeVideosCreateArgsSchema: z.ZodType<Prisma.YoutubeVideosCreateArgs> = z.object({
  select: YoutubeVideosSelectSchema.optional(),
  include: YoutubeVideosIncludeSchema.optional(),
  data: z.union([ YoutubeVideosCreateInputSchema,YoutubeVideosUncheckedCreateInputSchema ]),
}).strict()

export const YoutubeVideosUpsertArgsSchema: z.ZodType<Prisma.YoutubeVideosUpsertArgs> = z.object({
  select: YoutubeVideosSelectSchema.optional(),
  include: YoutubeVideosIncludeSchema.optional(),
  where: YoutubeVideosWhereUniqueInputSchema,
  create: z.union([ YoutubeVideosCreateInputSchema,YoutubeVideosUncheckedCreateInputSchema ]),
  update: z.union([ YoutubeVideosUpdateInputSchema,YoutubeVideosUncheckedUpdateInputSchema ]),
}).strict()

export const YoutubeVideosCreateManyArgsSchema: z.ZodType<Prisma.YoutubeVideosCreateManyArgs> = z.object({
  data: YoutubeVideosCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const YoutubeVideosDeleteArgsSchema: z.ZodType<Prisma.YoutubeVideosDeleteArgs> = z.object({
  select: YoutubeVideosSelectSchema.optional(),
  include: YoutubeVideosIncludeSchema.optional(),
  where: YoutubeVideosWhereUniqueInputSchema,
}).strict()

export const YoutubeVideosUpdateArgsSchema: z.ZodType<Prisma.YoutubeVideosUpdateArgs> = z.object({
  select: YoutubeVideosSelectSchema.optional(),
  include: YoutubeVideosIncludeSchema.optional(),
  data: z.union([ YoutubeVideosUpdateInputSchema,YoutubeVideosUncheckedUpdateInputSchema ]),
  where: YoutubeVideosWhereUniqueInputSchema,
}).strict()

export const YoutubeVideosUpdateManyArgsSchema: z.ZodType<Prisma.YoutubeVideosUpdateManyArgs> = z.object({
  data: z.union([ YoutubeVideosUpdateManyMutationInputSchema,YoutubeVideosUncheckedUpdateManyInputSchema ]),
  where: YoutubeVideosWhereInputSchema.optional(),
}).strict()

export const YoutubeVideosDeleteManyArgsSchema: z.ZodType<Prisma.YoutubeVideosDeleteManyArgs> = z.object({
  where: YoutubeVideosWhereInputSchema.optional(),
}).strict()

interface TrpcCallsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.TrpcCallsArgs
  readonly type: Prisma.TrpcCallsGetPayload<this['_A']>
}

interface YoutubeBasicSummaryGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.YoutubeBasicSummaryArgs
  readonly type: Prisma.YoutubeBasicSummaryGetPayload<this['_A']>
}

interface YoutubeLlmOutputsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.YoutubeLlmOutputsArgs
  readonly type: Prisma.YoutubeLlmOutputsGetPayload<this['_A']>
}

interface YoutubeVideosGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.YoutubeVideosArgs
  readonly type: Prisma.YoutubeVideosGetPayload<this['_A']>
}

export const tableSchemas = {
  trpc_calls: {
    fields: new Map([
      [
        "id",
        "UUID"
      ],
      [
        "createdat",
        "TIMESTAMPTZ"
      ],
      [
        "elapsedms",
        "INT4"
      ],
      [
        "path",
        "TEXT"
      ],
      [
        "input",
        "TEXT"
      ],
      [
        "type",
        "TEXT"
      ],
      [
        "state",
        "TEXT"
      ],
      [
        "clientid",
        "TEXT"
      ],
      [
        "response",
        "TEXT"
      ]
    ]),
    relations: [
    ],
    modelSchema: (TrpcCallsCreateInputSchema as any)
      .partial()
      .or((TrpcCallsUncheckedCreateInputSchema as any).partial()),
    createSchema: TrpcCallsCreateArgsSchema,
    createManySchema: TrpcCallsCreateManyArgsSchema,
    findUniqueSchema: TrpcCallsFindUniqueArgsSchema,
    findSchema: TrpcCallsFindFirstArgsSchema,
    updateSchema: TrpcCallsUpdateArgsSchema,
    updateManySchema: TrpcCallsUpdateManyArgsSchema,
    upsertSchema: TrpcCallsUpsertArgsSchema,
    deleteSchema: TrpcCallsDeleteArgsSchema,
    deleteManySchema: TrpcCallsDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof TrpcCallsCreateInputSchema>,
    Prisma.TrpcCallsCreateArgs['data'],
    Prisma.TrpcCallsUpdateArgs['data'],
    Prisma.TrpcCallsFindFirstArgs['select'],
    Prisma.TrpcCallsFindFirstArgs['where'],
    Prisma.TrpcCallsFindUniqueArgs['where'],
    never,
    Prisma.TrpcCallsFindFirstArgs['orderBy'],
    Prisma.TrpcCallsScalarFieldEnum,
    TrpcCallsGetPayload
  >,
  youtube_basic_summary: {
    fields: new Map([
      [
        "id",
        "UUID"
      ],
      [
        "youtube_id",
        "TEXT"
      ],
      [
        "created_at",
        "TIMESTAMPTZ"
      ],
      [
        "hour_summaries",
        "TEXT"
      ]
    ]),
    relations: [
      new Relation("youtube_videos", "youtube_id", "id", "youtube_videos", "YoutubeBasicSummaryToYoutubeVideos", "one"),
    ],
    modelSchema: (YoutubeBasicSummaryCreateInputSchema as any)
      .partial()
      .or((YoutubeBasicSummaryUncheckedCreateInputSchema as any).partial()),
    createSchema: YoutubeBasicSummaryCreateArgsSchema,
    createManySchema: YoutubeBasicSummaryCreateManyArgsSchema,
    findUniqueSchema: YoutubeBasicSummaryFindUniqueArgsSchema,
    findSchema: YoutubeBasicSummaryFindFirstArgsSchema,
    updateSchema: YoutubeBasicSummaryUpdateArgsSchema,
    updateManySchema: YoutubeBasicSummaryUpdateManyArgsSchema,
    upsertSchema: YoutubeBasicSummaryUpsertArgsSchema,
    deleteSchema: YoutubeBasicSummaryDeleteArgsSchema,
    deleteManySchema: YoutubeBasicSummaryDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof YoutubeBasicSummaryCreateInputSchema>,
    Prisma.YoutubeBasicSummaryCreateArgs['data'],
    Prisma.YoutubeBasicSummaryUpdateArgs['data'],
    Prisma.YoutubeBasicSummaryFindFirstArgs['select'],
    Prisma.YoutubeBasicSummaryFindFirstArgs['where'],
    Prisma.YoutubeBasicSummaryFindUniqueArgs['where'],
    Omit<Prisma.YoutubeBasicSummaryInclude, '_count'>,
    Prisma.YoutubeBasicSummaryFindFirstArgs['orderBy'],
    Prisma.YoutubeBasicSummaryScalarFieldEnum,
    YoutubeBasicSummaryGetPayload
  >,
  youtube_llm_outputs: {
    fields: new Map([
      [
        "id",
        "UUID"
      ],
      [
        "youtube_id",
        "TEXT"
      ],
      [
        "created_at",
        "TIMESTAMPTZ"
      ],
      [
        "llm_prompt_type",
        "TEXT"
      ],
      [
        "output",
        "TEXT"
      ]
    ]),
    relations: [
      new Relation("youtube_videos", "youtube_id", "id", "youtube_videos", "YoutubeLlmOutputsToYoutubeVideos", "one"),
    ],
    modelSchema: (YoutubeLlmOutputsCreateInputSchema as any)
      .partial()
      .or((YoutubeLlmOutputsUncheckedCreateInputSchema as any).partial()),
    createSchema: YoutubeLlmOutputsCreateArgsSchema,
    createManySchema: YoutubeLlmOutputsCreateManyArgsSchema,
    findUniqueSchema: YoutubeLlmOutputsFindUniqueArgsSchema,
    findSchema: YoutubeLlmOutputsFindFirstArgsSchema,
    updateSchema: YoutubeLlmOutputsUpdateArgsSchema,
    updateManySchema: YoutubeLlmOutputsUpdateManyArgsSchema,
    upsertSchema: YoutubeLlmOutputsUpsertArgsSchema,
    deleteSchema: YoutubeLlmOutputsDeleteArgsSchema,
    deleteManySchema: YoutubeLlmOutputsDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof YoutubeLlmOutputsCreateInputSchema>,
    Prisma.YoutubeLlmOutputsCreateArgs['data'],
    Prisma.YoutubeLlmOutputsUpdateArgs['data'],
    Prisma.YoutubeLlmOutputsFindFirstArgs['select'],
    Prisma.YoutubeLlmOutputsFindFirstArgs['where'],
    Prisma.YoutubeLlmOutputsFindUniqueArgs['where'],
    Omit<Prisma.YoutubeLlmOutputsInclude, '_count'>,
    Prisma.YoutubeLlmOutputsFindFirstArgs['orderBy'],
    Prisma.YoutubeLlmOutputsScalarFieldEnum,
    YoutubeLlmOutputsGetPayload
  >,
  youtube_videos: {
    fields: new Map([
      [
        "id",
        "TEXT"
      ],
      [
        "transcript",
        "TEXT"
      ],
      [
        "created_at",
        "TIMESTAMPTZ"
      ],
      [
        "updated_at",
        "TIMESTAMPTZ"
      ],
      [
        "title",
        "TEXT"
      ],
      [
        "author_name",
        "TEXT"
      ],
      [
        "author_url",
        "TEXT"
      ],
      [
        "type",
        "TEXT"
      ],
      [
        "height",
        "INT4"
      ],
      [
        "width",
        "INT4"
      ],
      [
        "version",
        "TEXT"
      ],
      [
        "provider_name",
        "TEXT"
      ],
      [
        "provider_url",
        "TEXT"
      ],
      [
        "thumbnail_height",
        "INT4"
      ],
      [
        "thumbnail_width",
        "INT4"
      ],
      [
        "thumbnail_url",
        "TEXT"
      ],
      [
        "html",
        "TEXT"
      ]
    ]),
    relations: [
      new Relation("youtube_basic_summary", "", "", "youtube_basic_summary", "YoutubeBasicSummaryToYoutubeVideos", "many"),
      new Relation("youtube_llm_outputs", "", "", "youtube_llm_outputs", "YoutubeLlmOutputsToYoutubeVideos", "many"),
    ],
    modelSchema: (YoutubeVideosCreateInputSchema as any)
      .partial()
      .or((YoutubeVideosUncheckedCreateInputSchema as any).partial()),
    createSchema: YoutubeVideosCreateArgsSchema,
    createManySchema: YoutubeVideosCreateManyArgsSchema,
    findUniqueSchema: YoutubeVideosFindUniqueArgsSchema,
    findSchema: YoutubeVideosFindFirstArgsSchema,
    updateSchema: YoutubeVideosUpdateArgsSchema,
    updateManySchema: YoutubeVideosUpdateManyArgsSchema,
    upsertSchema: YoutubeVideosUpsertArgsSchema,
    deleteSchema: YoutubeVideosDeleteArgsSchema,
    deleteManySchema: YoutubeVideosDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof YoutubeVideosCreateInputSchema>,
    Prisma.YoutubeVideosCreateArgs['data'],
    Prisma.YoutubeVideosUpdateArgs['data'],
    Prisma.YoutubeVideosFindFirstArgs['select'],
    Prisma.YoutubeVideosFindFirstArgs['where'],
    Prisma.YoutubeVideosFindUniqueArgs['where'],
    Omit<Prisma.YoutubeVideosInclude, '_count'>,
    Prisma.YoutubeVideosFindFirstArgs['orderBy'],
    Prisma.YoutubeVideosScalarFieldEnum,
    YoutubeVideosGetPayload
  >,
}

export const schema = new DbSchema(tableSchemas, migrations)
export type Electric = ElectricClient<typeof schema>
