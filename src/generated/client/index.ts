import { z } from 'zod';
import type { Prisma } from './prismaClient';
import { type TableSchema, DbSchema, Relation, ElectricClient, type HKT } from 'electric-sql/client/model';
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

export const Trpc_callsScalarFieldEnumSchema = z.enum(['id','createdat','elapsedms','path','input','type','state','clientid','response']);

export const Youtube_basic_summaryScalarFieldEnumSchema = z.enum(['id','youtube_id','created_at','hour_summaries']);

export const Youtube_llm_outputsScalarFieldEnumSchema = z.enum(['id','youtube_id','created_at','llm_prompt_type','output']);

export const Youtube_videosScalarFieldEnumSchema = z.enum(['id','transcript','created_at','updated_at','title','author_name','author_url','type','height','width','version','provider_name','provider_url','thumbnail_height','thumbnail_width','thumbnail_url','html','score','error']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// TRPC CALLS SCHEMA
/////////////////////////////////////////

export const Trpc_callsSchema = z.object({
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

export type Trpc_calls = z.infer<typeof Trpc_callsSchema>

/////////////////////////////////////////
// YOUTUBE BASIC SUMMARY SCHEMA
/////////////////////////////////////////

export const Youtube_basic_summarySchema = z.object({
  id: z.string().uuid(),
  youtube_id: z.string().nullable(),
  created_at: z.coerce.date().nullable(),
  hour_summaries: z.string().nullable(),
})

export type Youtube_basic_summary = z.infer<typeof Youtube_basic_summarySchema>

/////////////////////////////////////////
// YOUTUBE LLM OUTPUTS SCHEMA
/////////////////////////////////////////

export const Youtube_llm_outputsSchema = z.object({
  id: z.string().uuid(),
  youtube_id: z.string().nullable(),
  created_at: z.coerce.date().nullable(),
  llm_prompt_type: z.string().nullable(),
  output: z.string().nullable(),
})

export type Youtube_llm_outputs = z.infer<typeof Youtube_llm_outputsSchema>

/////////////////////////////////////////
// YOUTUBE VIDEOS SCHEMA
/////////////////////////////////////////

export const Youtube_videosSchema = z.object({
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
  score: z.number().or(z.nan()).nullable(),
  error: z.string().nullable(),
})

export type Youtube_videos = z.infer<typeof Youtube_videosSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// TRPC CALLS
//------------------------------------------------------

export const Trpc_callsSelectSchema: z.ZodType<Prisma.Trpc_callsSelect> = z.object({
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

export const Youtube_basic_summaryIncludeSchema: z.ZodType<Prisma.Youtube_basic_summaryInclude> = z.object({
  youtube_videos: z.union([z.boolean(),z.lazy(() => Youtube_videosArgsSchema)]).optional(),
}).strict()

export const Youtube_basic_summaryArgsSchema: z.ZodType<Prisma.Youtube_basic_summaryArgs> = z.object({
  select: z.lazy(() => Youtube_basic_summarySelectSchema).optional(),
  include: z.lazy(() => Youtube_basic_summaryIncludeSchema).optional(),
}).strict();

export const Youtube_basic_summarySelectSchema: z.ZodType<Prisma.Youtube_basic_summarySelect> = z.object({
  id: z.boolean().optional(),
  youtube_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  hour_summaries: z.boolean().optional(),
  youtube_videos: z.union([z.boolean(),z.lazy(() => Youtube_videosArgsSchema)]).optional(),
}).strict()

// YOUTUBE LLM OUTPUTS
//------------------------------------------------------

export const Youtube_llm_outputsIncludeSchema: z.ZodType<Prisma.Youtube_llm_outputsInclude> = z.object({
  youtube_videos: z.union([z.boolean(),z.lazy(() => Youtube_videosArgsSchema)]).optional(),
}).strict()

export const Youtube_llm_outputsArgsSchema: z.ZodType<Prisma.Youtube_llm_outputsArgs> = z.object({
  select: z.lazy(() => Youtube_llm_outputsSelectSchema).optional(),
  include: z.lazy(() => Youtube_llm_outputsIncludeSchema).optional(),
}).strict();

export const Youtube_llm_outputsSelectSchema: z.ZodType<Prisma.Youtube_llm_outputsSelect> = z.object({
  id: z.boolean().optional(),
  youtube_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  llm_prompt_type: z.boolean().optional(),
  output: z.boolean().optional(),
  youtube_videos: z.union([z.boolean(),z.lazy(() => Youtube_videosArgsSchema)]).optional(),
}).strict()

// YOUTUBE VIDEOS
//------------------------------------------------------

export const Youtube_videosIncludeSchema: z.ZodType<Prisma.Youtube_videosInclude> = z.object({
  youtube_basic_summary: z.union([z.boolean(),z.lazy(() => Youtube_basic_summaryFindManyArgsSchema)]).optional(),
  youtube_llm_outputs: z.union([z.boolean(),z.lazy(() => Youtube_llm_outputsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Youtube_videosCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const Youtube_videosArgsSchema: z.ZodType<Prisma.Youtube_videosArgs> = z.object({
  select: z.lazy(() => Youtube_videosSelectSchema).optional(),
  include: z.lazy(() => Youtube_videosIncludeSchema).optional(),
}).strict();

export const Youtube_videosCountOutputTypeArgsSchema: z.ZodType<Prisma.Youtube_videosCountOutputTypeArgs> = z.object({
  select: z.lazy(() => Youtube_videosCountOutputTypeSelectSchema).nullish(),
}).strict();

export const Youtube_videosCountOutputTypeSelectSchema: z.ZodType<Prisma.Youtube_videosCountOutputTypeSelect> = z.object({
  youtube_basic_summary: z.boolean().optional(),
  youtube_llm_outputs: z.boolean().optional(),
}).strict();

export const Youtube_videosSelectSchema: z.ZodType<Prisma.Youtube_videosSelect> = z.object({
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
  score: z.boolean().optional(),
  error: z.boolean().optional(),
  youtube_basic_summary: z.union([z.boolean(),z.lazy(() => Youtube_basic_summaryFindManyArgsSchema)]).optional(),
  youtube_llm_outputs: z.union([z.boolean(),z.lazy(() => Youtube_llm_outputsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Youtube_videosCountOutputTypeArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const Trpc_callsWhereInputSchema: z.ZodType<Prisma.Trpc_callsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Trpc_callsWhereInputSchema),z.lazy(() => Trpc_callsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Trpc_callsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Trpc_callsWhereInputSchema),z.lazy(() => Trpc_callsWhereInputSchema).array() ]).optional(),
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

export const Trpc_callsOrderByWithRelationInputSchema: z.ZodType<Prisma.Trpc_callsOrderByWithRelationInput> = z.object({
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

export const Trpc_callsWhereUniqueInputSchema: z.ZodType<Prisma.Trpc_callsWhereUniqueInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const Trpc_callsOrderByWithAggregationInputSchema: z.ZodType<Prisma.Trpc_callsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdat: z.lazy(() => SortOrderSchema).optional(),
  elapsedms: z.lazy(() => SortOrderSchema).optional(),
  path: z.lazy(() => SortOrderSchema).optional(),
  input: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  clientid: z.lazy(() => SortOrderSchema).optional(),
  response: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => Trpc_callsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => Trpc_callsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => Trpc_callsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => Trpc_callsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => Trpc_callsSumOrderByAggregateInputSchema).optional()
}).strict();

export const Trpc_callsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.Trpc_callsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => Trpc_callsScalarWhereWithAggregatesInputSchema),z.lazy(() => Trpc_callsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => Trpc_callsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Trpc_callsScalarWhereWithAggregatesInputSchema),z.lazy(() => Trpc_callsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
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

export const Youtube_basic_summaryWhereInputSchema: z.ZodType<Prisma.Youtube_basic_summaryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Youtube_basic_summaryWhereInputSchema),z.lazy(() => Youtube_basic_summaryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Youtube_basic_summaryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Youtube_basic_summaryWhereInputSchema),z.lazy(() => Youtube_basic_summaryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  youtube_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  hour_summaries: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  youtube_videos: z.union([ z.lazy(() => Youtube_videosRelationFilterSchema),z.lazy(() => Youtube_videosWhereInputSchema) ]).optional().nullable(),
}).strict();

export const Youtube_basic_summaryOrderByWithRelationInputSchema: z.ZodType<Prisma.Youtube_basic_summaryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  youtube_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  hour_summaries: z.lazy(() => SortOrderSchema).optional(),
  youtube_videos: z.lazy(() => Youtube_videosOrderByWithRelationInputSchema).optional()
}).strict();

export const Youtube_basic_summaryWhereUniqueInputSchema: z.ZodType<Prisma.Youtube_basic_summaryWhereUniqueInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const Youtube_basic_summaryOrderByWithAggregationInputSchema: z.ZodType<Prisma.Youtube_basic_summaryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  youtube_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  hour_summaries: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => Youtube_basic_summaryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => Youtube_basic_summaryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => Youtube_basic_summaryMinOrderByAggregateInputSchema).optional()
}).strict();

export const Youtube_basic_summaryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.Youtube_basic_summaryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => Youtube_basic_summaryScalarWhereWithAggregatesInputSchema),z.lazy(() => Youtube_basic_summaryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => Youtube_basic_summaryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Youtube_basic_summaryScalarWhereWithAggregatesInputSchema),z.lazy(() => Youtube_basic_summaryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  youtube_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  hour_summaries: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const Youtube_llm_outputsWhereInputSchema: z.ZodType<Prisma.Youtube_llm_outputsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Youtube_llm_outputsWhereInputSchema),z.lazy(() => Youtube_llm_outputsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Youtube_llm_outputsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Youtube_llm_outputsWhereInputSchema),z.lazy(() => Youtube_llm_outputsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  youtube_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  llm_prompt_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  output: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  youtube_videos: z.union([ z.lazy(() => Youtube_videosRelationFilterSchema),z.lazy(() => Youtube_videosWhereInputSchema) ]).optional().nullable(),
}).strict();

export const Youtube_llm_outputsOrderByWithRelationInputSchema: z.ZodType<Prisma.Youtube_llm_outputsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  youtube_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  llm_prompt_type: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional(),
  youtube_videos: z.lazy(() => Youtube_videosOrderByWithRelationInputSchema).optional()
}).strict();

export const Youtube_llm_outputsWhereUniqueInputSchema: z.ZodType<Prisma.Youtube_llm_outputsWhereUniqueInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const Youtube_llm_outputsOrderByWithAggregationInputSchema: z.ZodType<Prisma.Youtube_llm_outputsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  youtube_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  llm_prompt_type: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => Youtube_llm_outputsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => Youtube_llm_outputsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => Youtube_llm_outputsMinOrderByAggregateInputSchema).optional()
}).strict();

export const Youtube_llm_outputsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.Youtube_llm_outputsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => Youtube_llm_outputsScalarWhereWithAggregatesInputSchema),z.lazy(() => Youtube_llm_outputsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => Youtube_llm_outputsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Youtube_llm_outputsScalarWhereWithAggregatesInputSchema),z.lazy(() => Youtube_llm_outputsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  youtube_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  llm_prompt_type: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  output: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const Youtube_videosWhereInputSchema: z.ZodType<Prisma.Youtube_videosWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Youtube_videosWhereInputSchema),z.lazy(() => Youtube_videosWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Youtube_videosWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Youtube_videosWhereInputSchema),z.lazy(() => Youtube_videosWhereInputSchema).array() ]).optional(),
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
  score: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  error: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  youtube_basic_summary: z.lazy(() => Youtube_basic_summaryListRelationFilterSchema).optional(),
  youtube_llm_outputs: z.lazy(() => Youtube_llm_outputsListRelationFilterSchema).optional()
}).strict();

export const Youtube_videosOrderByWithRelationInputSchema: z.ZodType<Prisma.Youtube_videosOrderByWithRelationInput> = z.object({
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
  score: z.lazy(() => SortOrderSchema).optional(),
  error: z.lazy(() => SortOrderSchema).optional(),
  youtube_basic_summary: z.lazy(() => Youtube_basic_summaryOrderByRelationAggregateInputSchema).optional(),
  youtube_llm_outputs: z.lazy(() => Youtube_llm_outputsOrderByRelationAggregateInputSchema).optional()
}).strict();

export const Youtube_videosWhereUniqueInputSchema: z.ZodType<Prisma.Youtube_videosWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export const Youtube_videosOrderByWithAggregationInputSchema: z.ZodType<Prisma.Youtube_videosOrderByWithAggregationInput> = z.object({
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
  score: z.lazy(() => SortOrderSchema).optional(),
  error: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => Youtube_videosCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => Youtube_videosAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => Youtube_videosMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => Youtube_videosMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => Youtube_videosSumOrderByAggregateInputSchema).optional()
}).strict();

export const Youtube_videosScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.Youtube_videosScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => Youtube_videosScalarWhereWithAggregatesInputSchema),z.lazy(() => Youtube_videosScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => Youtube_videosScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Youtube_videosScalarWhereWithAggregatesInputSchema),z.lazy(() => Youtube_videosScalarWhereWithAggregatesInputSchema).array() ]).optional(),
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
  score: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  error: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const Trpc_callsCreateInputSchema: z.ZodType<Prisma.Trpc_callsCreateInput> = z.object({
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

export const Trpc_callsUncheckedCreateInputSchema: z.ZodType<Prisma.Trpc_callsUncheckedCreateInput> = z.object({
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

export const Trpc_callsUpdateInputSchema: z.ZodType<Prisma.Trpc_callsUpdateInput> = z.object({
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

export const Trpc_callsUncheckedUpdateInputSchema: z.ZodType<Prisma.Trpc_callsUncheckedUpdateInput> = z.object({
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

export const Trpc_callsCreateManyInputSchema: z.ZodType<Prisma.Trpc_callsCreateManyInput> = z.object({
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

export const Trpc_callsUpdateManyMutationInputSchema: z.ZodType<Prisma.Trpc_callsUpdateManyMutationInput> = z.object({
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

export const Trpc_callsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.Trpc_callsUncheckedUpdateManyInput> = z.object({
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

export const Youtube_basic_summaryCreateInputSchema: z.ZodType<Prisma.Youtube_basic_summaryCreateInput> = z.object({
  id: z.string().uuid(),
  created_at: z.coerce.date().optional().nullable(),
  hour_summaries: z.string().optional().nullable(),
  youtube_videos: z.lazy(() => Youtube_videosCreateNestedOneWithoutYoutube_basic_summaryInputSchema).optional()
}).strict();

export const Youtube_basic_summaryUncheckedCreateInputSchema: z.ZodType<Prisma.Youtube_basic_summaryUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  youtube_id: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  hour_summaries: z.string().optional().nullable()
}).strict();

export const Youtube_basic_summaryUpdateInputSchema: z.ZodType<Prisma.Youtube_basic_summaryUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hour_summaries: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  youtube_videos: z.lazy(() => Youtube_videosUpdateOneWithoutYoutube_basic_summaryNestedInputSchema).optional()
}).strict();

export const Youtube_basic_summaryUncheckedUpdateInputSchema: z.ZodType<Prisma.Youtube_basic_summaryUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  youtube_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hour_summaries: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Youtube_basic_summaryCreateManyInputSchema: z.ZodType<Prisma.Youtube_basic_summaryCreateManyInput> = z.object({
  id: z.string().uuid(),
  youtube_id: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  hour_summaries: z.string().optional().nullable()
}).strict();

export const Youtube_basic_summaryUpdateManyMutationInputSchema: z.ZodType<Prisma.Youtube_basic_summaryUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hour_summaries: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Youtube_basic_summaryUncheckedUpdateManyInputSchema: z.ZodType<Prisma.Youtube_basic_summaryUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  youtube_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hour_summaries: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Youtube_llm_outputsCreateInputSchema: z.ZodType<Prisma.Youtube_llm_outputsCreateInput> = z.object({
  id: z.string().uuid(),
  created_at: z.coerce.date().optional().nullable(),
  llm_prompt_type: z.string().optional().nullable(),
  output: z.string().optional().nullable(),
  youtube_videos: z.lazy(() => Youtube_videosCreateNestedOneWithoutYoutube_llm_outputsInputSchema).optional()
}).strict();

export const Youtube_llm_outputsUncheckedCreateInputSchema: z.ZodType<Prisma.Youtube_llm_outputsUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  youtube_id: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  llm_prompt_type: z.string().optional().nullable(),
  output: z.string().optional().nullable()
}).strict();

export const Youtube_llm_outputsUpdateInputSchema: z.ZodType<Prisma.Youtube_llm_outputsUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  llm_prompt_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  output: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  youtube_videos: z.lazy(() => Youtube_videosUpdateOneWithoutYoutube_llm_outputsNestedInputSchema).optional()
}).strict();

export const Youtube_llm_outputsUncheckedUpdateInputSchema: z.ZodType<Prisma.Youtube_llm_outputsUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  youtube_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  llm_prompt_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  output: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Youtube_llm_outputsCreateManyInputSchema: z.ZodType<Prisma.Youtube_llm_outputsCreateManyInput> = z.object({
  id: z.string().uuid(),
  youtube_id: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  llm_prompt_type: z.string().optional().nullable(),
  output: z.string().optional().nullable()
}).strict();

export const Youtube_llm_outputsUpdateManyMutationInputSchema: z.ZodType<Prisma.Youtube_llm_outputsUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  llm_prompt_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  output: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Youtube_llm_outputsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.Youtube_llm_outputsUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  youtube_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  llm_prompt_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  output: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Youtube_videosCreateInputSchema: z.ZodType<Prisma.Youtube_videosCreateInput> = z.object({
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
  score: z.number().or(z.nan()).optional().nullable(),
  error: z.string().optional().nullable(),
  youtube_basic_summary: z.lazy(() => Youtube_basic_summaryCreateNestedManyWithoutYoutube_videosInputSchema).optional(),
  youtube_llm_outputs: z.lazy(() => Youtube_llm_outputsCreateNestedManyWithoutYoutube_videosInputSchema).optional()
}).strict();

export const Youtube_videosUncheckedCreateInputSchema: z.ZodType<Prisma.Youtube_videosUncheckedCreateInput> = z.object({
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
  score: z.number().or(z.nan()).optional().nullable(),
  error: z.string().optional().nullable(),
  youtube_basic_summary: z.lazy(() => Youtube_basic_summaryUncheckedCreateNestedManyWithoutYoutube_videosInputSchema).optional(),
  youtube_llm_outputs: z.lazy(() => Youtube_llm_outputsUncheckedCreateNestedManyWithoutYoutube_videosInputSchema).optional()
}).strict();

export const Youtube_videosUpdateInputSchema: z.ZodType<Prisma.Youtube_videosUpdateInput> = z.object({
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
  score: z.union([ z.number().or(z.nan()),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  error: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  youtube_basic_summary: z.lazy(() => Youtube_basic_summaryUpdateManyWithoutYoutube_videosNestedInputSchema).optional(),
  youtube_llm_outputs: z.lazy(() => Youtube_llm_outputsUpdateManyWithoutYoutube_videosNestedInputSchema).optional()
}).strict();

export const Youtube_videosUncheckedUpdateInputSchema: z.ZodType<Prisma.Youtube_videosUncheckedUpdateInput> = z.object({
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
  score: z.union([ z.number().or(z.nan()),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  error: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  youtube_basic_summary: z.lazy(() => Youtube_basic_summaryUncheckedUpdateManyWithoutYoutube_videosNestedInputSchema).optional(),
  youtube_llm_outputs: z.lazy(() => Youtube_llm_outputsUncheckedUpdateManyWithoutYoutube_videosNestedInputSchema).optional()
}).strict();

export const Youtube_videosCreateManyInputSchema: z.ZodType<Prisma.Youtube_videosCreateManyInput> = z.object({
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
  score: z.number().or(z.nan()).optional().nullable(),
  error: z.string().optional().nullable()
}).strict();

export const Youtube_videosUpdateManyMutationInputSchema: z.ZodType<Prisma.Youtube_videosUpdateManyMutationInput> = z.object({
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
  score: z.union([ z.number().or(z.nan()),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  error: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Youtube_videosUncheckedUpdateManyInputSchema: z.ZodType<Prisma.Youtube_videosUncheckedUpdateManyInput> = z.object({
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
  score: z.union([ z.number().or(z.nan()),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  error: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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

export const Trpc_callsCountOrderByAggregateInputSchema: z.ZodType<Prisma.Trpc_callsCountOrderByAggregateInput> = z.object({
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

export const Trpc_callsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.Trpc_callsAvgOrderByAggregateInput> = z.object({
  elapsedms: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Trpc_callsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.Trpc_callsMaxOrderByAggregateInput> = z.object({
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

export const Trpc_callsMinOrderByAggregateInputSchema: z.ZodType<Prisma.Trpc_callsMinOrderByAggregateInput> = z.object({
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

export const Trpc_callsSumOrderByAggregateInputSchema: z.ZodType<Prisma.Trpc_callsSumOrderByAggregateInput> = z.object({
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

export const Youtube_videosRelationFilterSchema: z.ZodType<Prisma.Youtube_videosRelationFilter> = z.object({
  is: z.lazy(() => Youtube_videosWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => Youtube_videosWhereInputSchema).optional().nullable()
}).strict();

export const Youtube_basic_summaryCountOrderByAggregateInputSchema: z.ZodType<Prisma.Youtube_basic_summaryCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  youtube_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  hour_summaries: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Youtube_basic_summaryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.Youtube_basic_summaryMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  youtube_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  hour_summaries: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Youtube_basic_summaryMinOrderByAggregateInputSchema: z.ZodType<Prisma.Youtube_basic_summaryMinOrderByAggregateInput> = z.object({
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

export const Youtube_llm_outputsCountOrderByAggregateInputSchema: z.ZodType<Prisma.Youtube_llm_outputsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  youtube_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  llm_prompt_type: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Youtube_llm_outputsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.Youtube_llm_outputsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  youtube_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  llm_prompt_type: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Youtube_llm_outputsMinOrderByAggregateInputSchema: z.ZodType<Prisma.Youtube_llm_outputsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  youtube_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  llm_prompt_type: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FloatNullableFilterSchema: z.ZodType<Prisma.FloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const Youtube_basic_summaryListRelationFilterSchema: z.ZodType<Prisma.Youtube_basic_summaryListRelationFilter> = z.object({
  every: z.lazy(() => Youtube_basic_summaryWhereInputSchema).optional(),
  some: z.lazy(() => Youtube_basic_summaryWhereInputSchema).optional(),
  none: z.lazy(() => Youtube_basic_summaryWhereInputSchema).optional()
}).strict();

export const Youtube_llm_outputsListRelationFilterSchema: z.ZodType<Prisma.Youtube_llm_outputsListRelationFilter> = z.object({
  every: z.lazy(() => Youtube_llm_outputsWhereInputSchema).optional(),
  some: z.lazy(() => Youtube_llm_outputsWhereInputSchema).optional(),
  none: z.lazy(() => Youtube_llm_outputsWhereInputSchema).optional()
}).strict();

export const Youtube_basic_summaryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.Youtube_basic_summaryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Youtube_llm_outputsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.Youtube_llm_outputsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Youtube_videosCountOrderByAggregateInputSchema: z.ZodType<Prisma.Youtube_videosCountOrderByAggregateInput> = z.object({
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
  score: z.lazy(() => SortOrderSchema).optional(),
  error: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Youtube_videosAvgOrderByAggregateInputSchema: z.ZodType<Prisma.Youtube_videosAvgOrderByAggregateInput> = z.object({
  height: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  thumbnail_height: z.lazy(() => SortOrderSchema).optional(),
  thumbnail_width: z.lazy(() => SortOrderSchema).optional(),
  score: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Youtube_videosMaxOrderByAggregateInputSchema: z.ZodType<Prisma.Youtube_videosMaxOrderByAggregateInput> = z.object({
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
  score: z.lazy(() => SortOrderSchema).optional(),
  error: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Youtube_videosMinOrderByAggregateInputSchema: z.ZodType<Prisma.Youtube_videosMinOrderByAggregateInput> = z.object({
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
  score: z.lazy(() => SortOrderSchema).optional(),
  error: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Youtube_videosSumOrderByAggregateInputSchema: z.ZodType<Prisma.Youtube_videosSumOrderByAggregateInput> = z.object({
  height: z.lazy(() => SortOrderSchema).optional(),
  width: z.lazy(() => SortOrderSchema).optional(),
  thumbnail_height: z.lazy(() => SortOrderSchema).optional(),
  thumbnail_width: z.lazy(() => SortOrderSchema).optional(),
  score: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FloatNullableWithAggregatesFilterSchema: z.ZodType<Prisma.FloatNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatNullableFilterSchema).optional()
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

export const Youtube_videosCreateNestedOneWithoutYoutube_basic_summaryInputSchema: z.ZodType<Prisma.Youtube_videosCreateNestedOneWithoutYoutube_basic_summaryInput> = z.object({
  create: z.union([ z.lazy(() => Youtube_videosCreateWithoutYoutube_basic_summaryInputSchema),z.lazy(() => Youtube_videosUncheckedCreateWithoutYoutube_basic_summaryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => Youtube_videosCreateOrConnectWithoutYoutube_basic_summaryInputSchema).optional(),
  connect: z.lazy(() => Youtube_videosWhereUniqueInputSchema).optional()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const Youtube_videosUpdateOneWithoutYoutube_basic_summaryNestedInputSchema: z.ZodType<Prisma.Youtube_videosUpdateOneWithoutYoutube_basic_summaryNestedInput> = z.object({
  create: z.union([ z.lazy(() => Youtube_videosCreateWithoutYoutube_basic_summaryInputSchema),z.lazy(() => Youtube_videosUncheckedCreateWithoutYoutube_basic_summaryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => Youtube_videosCreateOrConnectWithoutYoutube_basic_summaryInputSchema).optional(),
  upsert: z.lazy(() => Youtube_videosUpsertWithoutYoutube_basic_summaryInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => Youtube_videosWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => Youtube_videosUpdateWithoutYoutube_basic_summaryInputSchema),z.lazy(() => Youtube_videosUncheckedUpdateWithoutYoutube_basic_summaryInputSchema) ]).optional(),
}).strict();

export const Youtube_videosCreateNestedOneWithoutYoutube_llm_outputsInputSchema: z.ZodType<Prisma.Youtube_videosCreateNestedOneWithoutYoutube_llm_outputsInput> = z.object({
  create: z.union([ z.lazy(() => Youtube_videosCreateWithoutYoutube_llm_outputsInputSchema),z.lazy(() => Youtube_videosUncheckedCreateWithoutYoutube_llm_outputsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => Youtube_videosCreateOrConnectWithoutYoutube_llm_outputsInputSchema).optional(),
  connect: z.lazy(() => Youtube_videosWhereUniqueInputSchema).optional()
}).strict();

export const Youtube_videosUpdateOneWithoutYoutube_llm_outputsNestedInputSchema: z.ZodType<Prisma.Youtube_videosUpdateOneWithoutYoutube_llm_outputsNestedInput> = z.object({
  create: z.union([ z.lazy(() => Youtube_videosCreateWithoutYoutube_llm_outputsInputSchema),z.lazy(() => Youtube_videosUncheckedCreateWithoutYoutube_llm_outputsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => Youtube_videosCreateOrConnectWithoutYoutube_llm_outputsInputSchema).optional(),
  upsert: z.lazy(() => Youtube_videosUpsertWithoutYoutube_llm_outputsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => Youtube_videosWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => Youtube_videosUpdateWithoutYoutube_llm_outputsInputSchema),z.lazy(() => Youtube_videosUncheckedUpdateWithoutYoutube_llm_outputsInputSchema) ]).optional(),
}).strict();

export const Youtube_basic_summaryCreateNestedManyWithoutYoutube_videosInputSchema: z.ZodType<Prisma.Youtube_basic_summaryCreateNestedManyWithoutYoutube_videosInput> = z.object({
  create: z.union([ z.lazy(() => Youtube_basic_summaryCreateWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_basic_summaryCreateWithoutYoutube_videosInputSchema).array(),z.lazy(() => Youtube_basic_summaryUncheckedCreateWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_basic_summaryUncheckedCreateWithoutYoutube_videosInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Youtube_basic_summaryCreateOrConnectWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_basic_summaryCreateOrConnectWithoutYoutube_videosInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Youtube_basic_summaryCreateManyYoutube_videosInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Youtube_basic_summaryWhereUniqueInputSchema),z.lazy(() => Youtube_basic_summaryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Youtube_llm_outputsCreateNestedManyWithoutYoutube_videosInputSchema: z.ZodType<Prisma.Youtube_llm_outputsCreateNestedManyWithoutYoutube_videosInput> = z.object({
  create: z.union([ z.lazy(() => Youtube_llm_outputsCreateWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_llm_outputsCreateWithoutYoutube_videosInputSchema).array(),z.lazy(() => Youtube_llm_outputsUncheckedCreateWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_llm_outputsUncheckedCreateWithoutYoutube_videosInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Youtube_llm_outputsCreateOrConnectWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_llm_outputsCreateOrConnectWithoutYoutube_videosInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Youtube_llm_outputsCreateManyYoutube_videosInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Youtube_llm_outputsWhereUniqueInputSchema),z.lazy(() => Youtube_llm_outputsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Youtube_basic_summaryUncheckedCreateNestedManyWithoutYoutube_videosInputSchema: z.ZodType<Prisma.Youtube_basic_summaryUncheckedCreateNestedManyWithoutYoutube_videosInput> = z.object({
  create: z.union([ z.lazy(() => Youtube_basic_summaryCreateWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_basic_summaryCreateWithoutYoutube_videosInputSchema).array(),z.lazy(() => Youtube_basic_summaryUncheckedCreateWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_basic_summaryUncheckedCreateWithoutYoutube_videosInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Youtube_basic_summaryCreateOrConnectWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_basic_summaryCreateOrConnectWithoutYoutube_videosInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Youtube_basic_summaryCreateManyYoutube_videosInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Youtube_basic_summaryWhereUniqueInputSchema),z.lazy(() => Youtube_basic_summaryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Youtube_llm_outputsUncheckedCreateNestedManyWithoutYoutube_videosInputSchema: z.ZodType<Prisma.Youtube_llm_outputsUncheckedCreateNestedManyWithoutYoutube_videosInput> = z.object({
  create: z.union([ z.lazy(() => Youtube_llm_outputsCreateWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_llm_outputsCreateWithoutYoutube_videosInputSchema).array(),z.lazy(() => Youtube_llm_outputsUncheckedCreateWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_llm_outputsUncheckedCreateWithoutYoutube_videosInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Youtube_llm_outputsCreateOrConnectWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_llm_outputsCreateOrConnectWithoutYoutube_videosInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Youtube_llm_outputsCreateManyYoutube_videosInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Youtube_llm_outputsWhereUniqueInputSchema),z.lazy(() => Youtube_llm_outputsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NullableFloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableFloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const Youtube_basic_summaryUpdateManyWithoutYoutube_videosNestedInputSchema: z.ZodType<Prisma.Youtube_basic_summaryUpdateManyWithoutYoutube_videosNestedInput> = z.object({
  create: z.union([ z.lazy(() => Youtube_basic_summaryCreateWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_basic_summaryCreateWithoutYoutube_videosInputSchema).array(),z.lazy(() => Youtube_basic_summaryUncheckedCreateWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_basic_summaryUncheckedCreateWithoutYoutube_videosInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Youtube_basic_summaryCreateOrConnectWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_basic_summaryCreateOrConnectWithoutYoutube_videosInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Youtube_basic_summaryUpsertWithWhereUniqueWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_basic_summaryUpsertWithWhereUniqueWithoutYoutube_videosInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Youtube_basic_summaryCreateManyYoutube_videosInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Youtube_basic_summaryWhereUniqueInputSchema),z.lazy(() => Youtube_basic_summaryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Youtube_basic_summaryWhereUniqueInputSchema),z.lazy(() => Youtube_basic_summaryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Youtube_basic_summaryWhereUniqueInputSchema),z.lazy(() => Youtube_basic_summaryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Youtube_basic_summaryWhereUniqueInputSchema),z.lazy(() => Youtube_basic_summaryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Youtube_basic_summaryUpdateWithWhereUniqueWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_basic_summaryUpdateWithWhereUniqueWithoutYoutube_videosInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Youtube_basic_summaryUpdateManyWithWhereWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_basic_summaryUpdateManyWithWhereWithoutYoutube_videosInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Youtube_basic_summaryScalarWhereInputSchema),z.lazy(() => Youtube_basic_summaryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Youtube_llm_outputsUpdateManyWithoutYoutube_videosNestedInputSchema: z.ZodType<Prisma.Youtube_llm_outputsUpdateManyWithoutYoutube_videosNestedInput> = z.object({
  create: z.union([ z.lazy(() => Youtube_llm_outputsCreateWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_llm_outputsCreateWithoutYoutube_videosInputSchema).array(),z.lazy(() => Youtube_llm_outputsUncheckedCreateWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_llm_outputsUncheckedCreateWithoutYoutube_videosInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Youtube_llm_outputsCreateOrConnectWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_llm_outputsCreateOrConnectWithoutYoutube_videosInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Youtube_llm_outputsUpsertWithWhereUniqueWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_llm_outputsUpsertWithWhereUniqueWithoutYoutube_videosInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Youtube_llm_outputsCreateManyYoutube_videosInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Youtube_llm_outputsWhereUniqueInputSchema),z.lazy(() => Youtube_llm_outputsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Youtube_llm_outputsWhereUniqueInputSchema),z.lazy(() => Youtube_llm_outputsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Youtube_llm_outputsWhereUniqueInputSchema),z.lazy(() => Youtube_llm_outputsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Youtube_llm_outputsWhereUniqueInputSchema),z.lazy(() => Youtube_llm_outputsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Youtube_llm_outputsUpdateWithWhereUniqueWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_llm_outputsUpdateWithWhereUniqueWithoutYoutube_videosInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Youtube_llm_outputsUpdateManyWithWhereWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_llm_outputsUpdateManyWithWhereWithoutYoutube_videosInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Youtube_llm_outputsScalarWhereInputSchema),z.lazy(() => Youtube_llm_outputsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Youtube_basic_summaryUncheckedUpdateManyWithoutYoutube_videosNestedInputSchema: z.ZodType<Prisma.Youtube_basic_summaryUncheckedUpdateManyWithoutYoutube_videosNestedInput> = z.object({
  create: z.union([ z.lazy(() => Youtube_basic_summaryCreateWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_basic_summaryCreateWithoutYoutube_videosInputSchema).array(),z.lazy(() => Youtube_basic_summaryUncheckedCreateWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_basic_summaryUncheckedCreateWithoutYoutube_videosInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Youtube_basic_summaryCreateOrConnectWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_basic_summaryCreateOrConnectWithoutYoutube_videosInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Youtube_basic_summaryUpsertWithWhereUniqueWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_basic_summaryUpsertWithWhereUniqueWithoutYoutube_videosInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Youtube_basic_summaryCreateManyYoutube_videosInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Youtube_basic_summaryWhereUniqueInputSchema),z.lazy(() => Youtube_basic_summaryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Youtube_basic_summaryWhereUniqueInputSchema),z.lazy(() => Youtube_basic_summaryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Youtube_basic_summaryWhereUniqueInputSchema),z.lazy(() => Youtube_basic_summaryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Youtube_basic_summaryWhereUniqueInputSchema),z.lazy(() => Youtube_basic_summaryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Youtube_basic_summaryUpdateWithWhereUniqueWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_basic_summaryUpdateWithWhereUniqueWithoutYoutube_videosInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Youtube_basic_summaryUpdateManyWithWhereWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_basic_summaryUpdateManyWithWhereWithoutYoutube_videosInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Youtube_basic_summaryScalarWhereInputSchema),z.lazy(() => Youtube_basic_summaryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Youtube_llm_outputsUncheckedUpdateManyWithoutYoutube_videosNestedInputSchema: z.ZodType<Prisma.Youtube_llm_outputsUncheckedUpdateManyWithoutYoutube_videosNestedInput> = z.object({
  create: z.union([ z.lazy(() => Youtube_llm_outputsCreateWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_llm_outputsCreateWithoutYoutube_videosInputSchema).array(),z.lazy(() => Youtube_llm_outputsUncheckedCreateWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_llm_outputsUncheckedCreateWithoutYoutube_videosInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Youtube_llm_outputsCreateOrConnectWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_llm_outputsCreateOrConnectWithoutYoutube_videosInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Youtube_llm_outputsUpsertWithWhereUniqueWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_llm_outputsUpsertWithWhereUniqueWithoutYoutube_videosInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Youtube_llm_outputsCreateManyYoutube_videosInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Youtube_llm_outputsWhereUniqueInputSchema),z.lazy(() => Youtube_llm_outputsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Youtube_llm_outputsWhereUniqueInputSchema),z.lazy(() => Youtube_llm_outputsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Youtube_llm_outputsWhereUniqueInputSchema),z.lazy(() => Youtube_llm_outputsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Youtube_llm_outputsWhereUniqueInputSchema),z.lazy(() => Youtube_llm_outputsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Youtube_llm_outputsUpdateWithWhereUniqueWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_llm_outputsUpdateWithWhereUniqueWithoutYoutube_videosInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Youtube_llm_outputsUpdateManyWithWhereWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_llm_outputsUpdateManyWithWhereWithoutYoutube_videosInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Youtube_llm_outputsScalarWhereInputSchema),z.lazy(() => Youtube_llm_outputsScalarWhereInputSchema).array() ]).optional(),
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

export const NestedFloatNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatNullableFilterSchema).optional()
}).strict();

export const Youtube_videosCreateWithoutYoutube_basic_summaryInputSchema: z.ZodType<Prisma.Youtube_videosCreateWithoutYoutube_basic_summaryInput> = z.object({
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
  score: z.number().optional().nullable(),
  error: z.string().optional().nullable(),
  youtube_llm_outputs: z.lazy(() => Youtube_llm_outputsCreateNestedManyWithoutYoutube_videosInputSchema).optional()
}).strict();

export const Youtube_videosUncheckedCreateWithoutYoutube_basic_summaryInputSchema: z.ZodType<Prisma.Youtube_videosUncheckedCreateWithoutYoutube_basic_summaryInput> = z.object({
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
  score: z.number().optional().nullable(),
  error: z.string().optional().nullable(),
  youtube_llm_outputs: z.lazy(() => Youtube_llm_outputsUncheckedCreateNestedManyWithoutYoutube_videosInputSchema).optional()
}).strict();

export const Youtube_videosCreateOrConnectWithoutYoutube_basic_summaryInputSchema: z.ZodType<Prisma.Youtube_videosCreateOrConnectWithoutYoutube_basic_summaryInput> = z.object({
  where: z.lazy(() => Youtube_videosWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Youtube_videosCreateWithoutYoutube_basic_summaryInputSchema),z.lazy(() => Youtube_videosUncheckedCreateWithoutYoutube_basic_summaryInputSchema) ]),
}).strict();

export const Youtube_videosUpsertWithoutYoutube_basic_summaryInputSchema: z.ZodType<Prisma.Youtube_videosUpsertWithoutYoutube_basic_summaryInput> = z.object({
  update: z.union([ z.lazy(() => Youtube_videosUpdateWithoutYoutube_basic_summaryInputSchema),z.lazy(() => Youtube_videosUncheckedUpdateWithoutYoutube_basic_summaryInputSchema) ]),
  create: z.union([ z.lazy(() => Youtube_videosCreateWithoutYoutube_basic_summaryInputSchema),z.lazy(() => Youtube_videosUncheckedCreateWithoutYoutube_basic_summaryInputSchema) ]),
}).strict();

export const Youtube_videosUpdateWithoutYoutube_basic_summaryInputSchema: z.ZodType<Prisma.Youtube_videosUpdateWithoutYoutube_basic_summaryInput> = z.object({
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
  score: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  error: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  youtube_llm_outputs: z.lazy(() => Youtube_llm_outputsUpdateManyWithoutYoutube_videosNestedInputSchema).optional()
}).strict();

export const Youtube_videosUncheckedUpdateWithoutYoutube_basic_summaryInputSchema: z.ZodType<Prisma.Youtube_videosUncheckedUpdateWithoutYoutube_basic_summaryInput> = z.object({
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
  score: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  error: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  youtube_llm_outputs: z.lazy(() => Youtube_llm_outputsUncheckedUpdateManyWithoutYoutube_videosNestedInputSchema).optional()
}).strict();

export const Youtube_videosCreateWithoutYoutube_llm_outputsInputSchema: z.ZodType<Prisma.Youtube_videosCreateWithoutYoutube_llm_outputsInput> = z.object({
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
  score: z.number().optional().nullable(),
  error: z.string().optional().nullable(),
  youtube_basic_summary: z.lazy(() => Youtube_basic_summaryCreateNestedManyWithoutYoutube_videosInputSchema).optional()
}).strict();

export const Youtube_videosUncheckedCreateWithoutYoutube_llm_outputsInputSchema: z.ZodType<Prisma.Youtube_videosUncheckedCreateWithoutYoutube_llm_outputsInput> = z.object({
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
  score: z.number().optional().nullable(),
  error: z.string().optional().nullable(),
  youtube_basic_summary: z.lazy(() => Youtube_basic_summaryUncheckedCreateNestedManyWithoutYoutube_videosInputSchema).optional()
}).strict();

export const Youtube_videosCreateOrConnectWithoutYoutube_llm_outputsInputSchema: z.ZodType<Prisma.Youtube_videosCreateOrConnectWithoutYoutube_llm_outputsInput> = z.object({
  where: z.lazy(() => Youtube_videosWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Youtube_videosCreateWithoutYoutube_llm_outputsInputSchema),z.lazy(() => Youtube_videosUncheckedCreateWithoutYoutube_llm_outputsInputSchema) ]),
}).strict();

export const Youtube_videosUpsertWithoutYoutube_llm_outputsInputSchema: z.ZodType<Prisma.Youtube_videosUpsertWithoutYoutube_llm_outputsInput> = z.object({
  update: z.union([ z.lazy(() => Youtube_videosUpdateWithoutYoutube_llm_outputsInputSchema),z.lazy(() => Youtube_videosUncheckedUpdateWithoutYoutube_llm_outputsInputSchema) ]),
  create: z.union([ z.lazy(() => Youtube_videosCreateWithoutYoutube_llm_outputsInputSchema),z.lazy(() => Youtube_videosUncheckedCreateWithoutYoutube_llm_outputsInputSchema) ]),
}).strict();

export const Youtube_videosUpdateWithoutYoutube_llm_outputsInputSchema: z.ZodType<Prisma.Youtube_videosUpdateWithoutYoutube_llm_outputsInput> = z.object({
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
  score: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  error: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  youtube_basic_summary: z.lazy(() => Youtube_basic_summaryUpdateManyWithoutYoutube_videosNestedInputSchema).optional()
}).strict();

export const Youtube_videosUncheckedUpdateWithoutYoutube_llm_outputsInputSchema: z.ZodType<Prisma.Youtube_videosUncheckedUpdateWithoutYoutube_llm_outputsInput> = z.object({
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
  score: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  error: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  youtube_basic_summary: z.lazy(() => Youtube_basic_summaryUncheckedUpdateManyWithoutYoutube_videosNestedInputSchema).optional()
}).strict();

export const Youtube_basic_summaryCreateWithoutYoutube_videosInputSchema: z.ZodType<Prisma.Youtube_basic_summaryCreateWithoutYoutube_videosInput> = z.object({
  id: z.string(),
  created_at: z.coerce.date().optional().nullable(),
  hour_summaries: z.string().optional().nullable()
}).strict();

export const Youtube_basic_summaryUncheckedCreateWithoutYoutube_videosInputSchema: z.ZodType<Prisma.Youtube_basic_summaryUncheckedCreateWithoutYoutube_videosInput> = z.object({
  id: z.string(),
  created_at: z.coerce.date().optional().nullable(),
  hour_summaries: z.string().optional().nullable()
}).strict();

export const Youtube_basic_summaryCreateOrConnectWithoutYoutube_videosInputSchema: z.ZodType<Prisma.Youtube_basic_summaryCreateOrConnectWithoutYoutube_videosInput> = z.object({
  where: z.lazy(() => Youtube_basic_summaryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Youtube_basic_summaryCreateWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_basic_summaryUncheckedCreateWithoutYoutube_videosInputSchema) ]),
}).strict();

export const Youtube_basic_summaryCreateManyYoutube_videosInputEnvelopeSchema: z.ZodType<Prisma.Youtube_basic_summaryCreateManyYoutube_videosInputEnvelope> = z.object({
  data: z.lazy(() => Youtube_basic_summaryCreateManyYoutube_videosInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const Youtube_llm_outputsCreateWithoutYoutube_videosInputSchema: z.ZodType<Prisma.Youtube_llm_outputsCreateWithoutYoutube_videosInput> = z.object({
  id: z.string(),
  created_at: z.coerce.date().optional().nullable(),
  llm_prompt_type: z.string().optional().nullable(),
  output: z.string().optional().nullable()
}).strict();

export const Youtube_llm_outputsUncheckedCreateWithoutYoutube_videosInputSchema: z.ZodType<Prisma.Youtube_llm_outputsUncheckedCreateWithoutYoutube_videosInput> = z.object({
  id: z.string(),
  created_at: z.coerce.date().optional().nullable(),
  llm_prompt_type: z.string().optional().nullable(),
  output: z.string().optional().nullable()
}).strict();

export const Youtube_llm_outputsCreateOrConnectWithoutYoutube_videosInputSchema: z.ZodType<Prisma.Youtube_llm_outputsCreateOrConnectWithoutYoutube_videosInput> = z.object({
  where: z.lazy(() => Youtube_llm_outputsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Youtube_llm_outputsCreateWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_llm_outputsUncheckedCreateWithoutYoutube_videosInputSchema) ]),
}).strict();

export const Youtube_llm_outputsCreateManyYoutube_videosInputEnvelopeSchema: z.ZodType<Prisma.Youtube_llm_outputsCreateManyYoutube_videosInputEnvelope> = z.object({
  data: z.lazy(() => Youtube_llm_outputsCreateManyYoutube_videosInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const Youtube_basic_summaryUpsertWithWhereUniqueWithoutYoutube_videosInputSchema: z.ZodType<Prisma.Youtube_basic_summaryUpsertWithWhereUniqueWithoutYoutube_videosInput> = z.object({
  where: z.lazy(() => Youtube_basic_summaryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => Youtube_basic_summaryUpdateWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_basic_summaryUncheckedUpdateWithoutYoutube_videosInputSchema) ]),
  create: z.union([ z.lazy(() => Youtube_basic_summaryCreateWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_basic_summaryUncheckedCreateWithoutYoutube_videosInputSchema) ]),
}).strict();

export const Youtube_basic_summaryUpdateWithWhereUniqueWithoutYoutube_videosInputSchema: z.ZodType<Prisma.Youtube_basic_summaryUpdateWithWhereUniqueWithoutYoutube_videosInput> = z.object({
  where: z.lazy(() => Youtube_basic_summaryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => Youtube_basic_summaryUpdateWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_basic_summaryUncheckedUpdateWithoutYoutube_videosInputSchema) ]),
}).strict();

export const Youtube_basic_summaryUpdateManyWithWhereWithoutYoutube_videosInputSchema: z.ZodType<Prisma.Youtube_basic_summaryUpdateManyWithWhereWithoutYoutube_videosInput> = z.object({
  where: z.lazy(() => Youtube_basic_summaryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => Youtube_basic_summaryUpdateManyMutationInputSchema),z.lazy(() => Youtube_basic_summaryUncheckedUpdateManyWithoutYoutube_basic_summaryInputSchema) ]),
}).strict();

export const Youtube_basic_summaryScalarWhereInputSchema: z.ZodType<Prisma.Youtube_basic_summaryScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Youtube_basic_summaryScalarWhereInputSchema),z.lazy(() => Youtube_basic_summaryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Youtube_basic_summaryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Youtube_basic_summaryScalarWhereInputSchema),z.lazy(() => Youtube_basic_summaryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  youtube_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  hour_summaries: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const Youtube_llm_outputsUpsertWithWhereUniqueWithoutYoutube_videosInputSchema: z.ZodType<Prisma.Youtube_llm_outputsUpsertWithWhereUniqueWithoutYoutube_videosInput> = z.object({
  where: z.lazy(() => Youtube_llm_outputsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => Youtube_llm_outputsUpdateWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_llm_outputsUncheckedUpdateWithoutYoutube_videosInputSchema) ]),
  create: z.union([ z.lazy(() => Youtube_llm_outputsCreateWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_llm_outputsUncheckedCreateWithoutYoutube_videosInputSchema) ]),
}).strict();

export const Youtube_llm_outputsUpdateWithWhereUniqueWithoutYoutube_videosInputSchema: z.ZodType<Prisma.Youtube_llm_outputsUpdateWithWhereUniqueWithoutYoutube_videosInput> = z.object({
  where: z.lazy(() => Youtube_llm_outputsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => Youtube_llm_outputsUpdateWithoutYoutube_videosInputSchema),z.lazy(() => Youtube_llm_outputsUncheckedUpdateWithoutYoutube_videosInputSchema) ]),
}).strict();

export const Youtube_llm_outputsUpdateManyWithWhereWithoutYoutube_videosInputSchema: z.ZodType<Prisma.Youtube_llm_outputsUpdateManyWithWhereWithoutYoutube_videosInput> = z.object({
  where: z.lazy(() => Youtube_llm_outputsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => Youtube_llm_outputsUpdateManyMutationInputSchema),z.lazy(() => Youtube_llm_outputsUncheckedUpdateManyWithoutYoutube_llm_outputsInputSchema) ]),
}).strict();

export const Youtube_llm_outputsScalarWhereInputSchema: z.ZodType<Prisma.Youtube_llm_outputsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Youtube_llm_outputsScalarWhereInputSchema),z.lazy(() => Youtube_llm_outputsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Youtube_llm_outputsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Youtube_llm_outputsScalarWhereInputSchema),z.lazy(() => Youtube_llm_outputsScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  youtube_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  llm_prompt_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  output: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const Youtube_basic_summaryCreateManyYoutube_videosInputSchema: z.ZodType<Prisma.Youtube_basic_summaryCreateManyYoutube_videosInput> = z.object({
  id: z.string().uuid(),
  created_at: z.coerce.date().optional().nullable(),
  hour_summaries: z.string().optional().nullable()
}).strict();

export const Youtube_llm_outputsCreateManyYoutube_videosInputSchema: z.ZodType<Prisma.Youtube_llm_outputsCreateManyYoutube_videosInput> = z.object({
  id: z.string().uuid(),
  created_at: z.coerce.date().optional().nullable(),
  llm_prompt_type: z.string().optional().nullable(),
  output: z.string().optional().nullable()
}).strict();

export const Youtube_basic_summaryUpdateWithoutYoutube_videosInputSchema: z.ZodType<Prisma.Youtube_basic_summaryUpdateWithoutYoutube_videosInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hour_summaries: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Youtube_basic_summaryUncheckedUpdateWithoutYoutube_videosInputSchema: z.ZodType<Prisma.Youtube_basic_summaryUncheckedUpdateWithoutYoutube_videosInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hour_summaries: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Youtube_basic_summaryUncheckedUpdateManyWithoutYoutube_basic_summaryInputSchema: z.ZodType<Prisma.Youtube_basic_summaryUncheckedUpdateManyWithoutYoutube_basic_summaryInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hour_summaries: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Youtube_llm_outputsUpdateWithoutYoutube_videosInputSchema: z.ZodType<Prisma.Youtube_llm_outputsUpdateWithoutYoutube_videosInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  llm_prompt_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  output: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Youtube_llm_outputsUncheckedUpdateWithoutYoutube_videosInputSchema: z.ZodType<Prisma.Youtube_llm_outputsUncheckedUpdateWithoutYoutube_videosInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  llm_prompt_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  output: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Youtube_llm_outputsUncheckedUpdateManyWithoutYoutube_llm_outputsInputSchema: z.ZodType<Prisma.Youtube_llm_outputsUncheckedUpdateManyWithoutYoutube_llm_outputsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  llm_prompt_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  output: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const Trpc_callsFindFirstArgsSchema: z.ZodType<Prisma.Trpc_callsFindFirstArgs> = z.object({
  select: Trpc_callsSelectSchema.optional(),
  where: Trpc_callsWhereInputSchema.optional(),
  orderBy: z.union([ Trpc_callsOrderByWithRelationInputSchema.array(),Trpc_callsOrderByWithRelationInputSchema ]).optional(),
  cursor: Trpc_callsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Trpc_callsScalarFieldEnumSchema.array().optional(),
}).strict()

export const Trpc_callsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.Trpc_callsFindFirstOrThrowArgs> = z.object({
  select: Trpc_callsSelectSchema.optional(),
  where: Trpc_callsWhereInputSchema.optional(),
  orderBy: z.union([ Trpc_callsOrderByWithRelationInputSchema.array(),Trpc_callsOrderByWithRelationInputSchema ]).optional(),
  cursor: Trpc_callsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Trpc_callsScalarFieldEnumSchema.array().optional(),
}).strict()

export const Trpc_callsFindManyArgsSchema: z.ZodType<Prisma.Trpc_callsFindManyArgs> = z.object({
  select: Trpc_callsSelectSchema.optional(),
  where: Trpc_callsWhereInputSchema.optional(),
  orderBy: z.union([ Trpc_callsOrderByWithRelationInputSchema.array(),Trpc_callsOrderByWithRelationInputSchema ]).optional(),
  cursor: Trpc_callsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Trpc_callsScalarFieldEnumSchema.array().optional(),
}).strict()

export const Trpc_callsAggregateArgsSchema: z.ZodType<Prisma.Trpc_callsAggregateArgs> = z.object({
  where: Trpc_callsWhereInputSchema.optional(),
  orderBy: z.union([ Trpc_callsOrderByWithRelationInputSchema.array(),Trpc_callsOrderByWithRelationInputSchema ]).optional(),
  cursor: Trpc_callsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const Trpc_callsGroupByArgsSchema: z.ZodType<Prisma.Trpc_callsGroupByArgs> = z.object({
  where: Trpc_callsWhereInputSchema.optional(),
  orderBy: z.union([ Trpc_callsOrderByWithAggregationInputSchema.array(),Trpc_callsOrderByWithAggregationInputSchema ]).optional(),
  by: Trpc_callsScalarFieldEnumSchema.array(),
  having: Trpc_callsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const Trpc_callsFindUniqueArgsSchema: z.ZodType<Prisma.Trpc_callsFindUniqueArgs> = z.object({
  select: Trpc_callsSelectSchema.optional(),
  where: Trpc_callsWhereUniqueInputSchema,
}).strict()

export const Trpc_callsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.Trpc_callsFindUniqueOrThrowArgs> = z.object({
  select: Trpc_callsSelectSchema.optional(),
  where: Trpc_callsWhereUniqueInputSchema,
}).strict()

export const Youtube_basic_summaryFindFirstArgsSchema: z.ZodType<Prisma.Youtube_basic_summaryFindFirstArgs> = z.object({
  select: Youtube_basic_summarySelectSchema.optional(),
  include: Youtube_basic_summaryIncludeSchema.optional(),
  where: Youtube_basic_summaryWhereInputSchema.optional(),
  orderBy: z.union([ Youtube_basic_summaryOrderByWithRelationInputSchema.array(),Youtube_basic_summaryOrderByWithRelationInputSchema ]).optional(),
  cursor: Youtube_basic_summaryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Youtube_basic_summaryScalarFieldEnumSchema.array().optional(),
}).strict()

export const Youtube_basic_summaryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.Youtube_basic_summaryFindFirstOrThrowArgs> = z.object({
  select: Youtube_basic_summarySelectSchema.optional(),
  include: Youtube_basic_summaryIncludeSchema.optional(),
  where: Youtube_basic_summaryWhereInputSchema.optional(),
  orderBy: z.union([ Youtube_basic_summaryOrderByWithRelationInputSchema.array(),Youtube_basic_summaryOrderByWithRelationInputSchema ]).optional(),
  cursor: Youtube_basic_summaryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Youtube_basic_summaryScalarFieldEnumSchema.array().optional(),
}).strict()

export const Youtube_basic_summaryFindManyArgsSchema: z.ZodType<Prisma.Youtube_basic_summaryFindManyArgs> = z.object({
  select: Youtube_basic_summarySelectSchema.optional(),
  include: Youtube_basic_summaryIncludeSchema.optional(),
  where: Youtube_basic_summaryWhereInputSchema.optional(),
  orderBy: z.union([ Youtube_basic_summaryOrderByWithRelationInputSchema.array(),Youtube_basic_summaryOrderByWithRelationInputSchema ]).optional(),
  cursor: Youtube_basic_summaryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Youtube_basic_summaryScalarFieldEnumSchema.array().optional(),
}).strict()

export const Youtube_basic_summaryAggregateArgsSchema: z.ZodType<Prisma.Youtube_basic_summaryAggregateArgs> = z.object({
  where: Youtube_basic_summaryWhereInputSchema.optional(),
  orderBy: z.union([ Youtube_basic_summaryOrderByWithRelationInputSchema.array(),Youtube_basic_summaryOrderByWithRelationInputSchema ]).optional(),
  cursor: Youtube_basic_summaryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const Youtube_basic_summaryGroupByArgsSchema: z.ZodType<Prisma.Youtube_basic_summaryGroupByArgs> = z.object({
  where: Youtube_basic_summaryWhereInputSchema.optional(),
  orderBy: z.union([ Youtube_basic_summaryOrderByWithAggregationInputSchema.array(),Youtube_basic_summaryOrderByWithAggregationInputSchema ]).optional(),
  by: Youtube_basic_summaryScalarFieldEnumSchema.array(),
  having: Youtube_basic_summaryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const Youtube_basic_summaryFindUniqueArgsSchema: z.ZodType<Prisma.Youtube_basic_summaryFindUniqueArgs> = z.object({
  select: Youtube_basic_summarySelectSchema.optional(),
  include: Youtube_basic_summaryIncludeSchema.optional(),
  where: Youtube_basic_summaryWhereUniqueInputSchema,
}).strict()

export const Youtube_basic_summaryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.Youtube_basic_summaryFindUniqueOrThrowArgs> = z.object({
  select: Youtube_basic_summarySelectSchema.optional(),
  include: Youtube_basic_summaryIncludeSchema.optional(),
  where: Youtube_basic_summaryWhereUniqueInputSchema,
}).strict()

export const Youtube_llm_outputsFindFirstArgsSchema: z.ZodType<Prisma.Youtube_llm_outputsFindFirstArgs> = z.object({
  select: Youtube_llm_outputsSelectSchema.optional(),
  include: Youtube_llm_outputsIncludeSchema.optional(),
  where: Youtube_llm_outputsWhereInputSchema.optional(),
  orderBy: z.union([ Youtube_llm_outputsOrderByWithRelationInputSchema.array(),Youtube_llm_outputsOrderByWithRelationInputSchema ]).optional(),
  cursor: Youtube_llm_outputsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Youtube_llm_outputsScalarFieldEnumSchema.array().optional(),
}).strict()

export const Youtube_llm_outputsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.Youtube_llm_outputsFindFirstOrThrowArgs> = z.object({
  select: Youtube_llm_outputsSelectSchema.optional(),
  include: Youtube_llm_outputsIncludeSchema.optional(),
  where: Youtube_llm_outputsWhereInputSchema.optional(),
  orderBy: z.union([ Youtube_llm_outputsOrderByWithRelationInputSchema.array(),Youtube_llm_outputsOrderByWithRelationInputSchema ]).optional(),
  cursor: Youtube_llm_outputsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Youtube_llm_outputsScalarFieldEnumSchema.array().optional(),
}).strict()

export const Youtube_llm_outputsFindManyArgsSchema: z.ZodType<Prisma.Youtube_llm_outputsFindManyArgs> = z.object({
  select: Youtube_llm_outputsSelectSchema.optional(),
  include: Youtube_llm_outputsIncludeSchema.optional(),
  where: Youtube_llm_outputsWhereInputSchema.optional(),
  orderBy: z.union([ Youtube_llm_outputsOrderByWithRelationInputSchema.array(),Youtube_llm_outputsOrderByWithRelationInputSchema ]).optional(),
  cursor: Youtube_llm_outputsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Youtube_llm_outputsScalarFieldEnumSchema.array().optional(),
}).strict()

export const Youtube_llm_outputsAggregateArgsSchema: z.ZodType<Prisma.Youtube_llm_outputsAggregateArgs> = z.object({
  where: Youtube_llm_outputsWhereInputSchema.optional(),
  orderBy: z.union([ Youtube_llm_outputsOrderByWithRelationInputSchema.array(),Youtube_llm_outputsOrderByWithRelationInputSchema ]).optional(),
  cursor: Youtube_llm_outputsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const Youtube_llm_outputsGroupByArgsSchema: z.ZodType<Prisma.Youtube_llm_outputsGroupByArgs> = z.object({
  where: Youtube_llm_outputsWhereInputSchema.optional(),
  orderBy: z.union([ Youtube_llm_outputsOrderByWithAggregationInputSchema.array(),Youtube_llm_outputsOrderByWithAggregationInputSchema ]).optional(),
  by: Youtube_llm_outputsScalarFieldEnumSchema.array(),
  having: Youtube_llm_outputsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const Youtube_llm_outputsFindUniqueArgsSchema: z.ZodType<Prisma.Youtube_llm_outputsFindUniqueArgs> = z.object({
  select: Youtube_llm_outputsSelectSchema.optional(),
  include: Youtube_llm_outputsIncludeSchema.optional(),
  where: Youtube_llm_outputsWhereUniqueInputSchema,
}).strict()

export const Youtube_llm_outputsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.Youtube_llm_outputsFindUniqueOrThrowArgs> = z.object({
  select: Youtube_llm_outputsSelectSchema.optional(),
  include: Youtube_llm_outputsIncludeSchema.optional(),
  where: Youtube_llm_outputsWhereUniqueInputSchema,
}).strict()

export const Youtube_videosFindFirstArgsSchema: z.ZodType<Prisma.Youtube_videosFindFirstArgs> = z.object({
  select: Youtube_videosSelectSchema.optional(),
  include: Youtube_videosIncludeSchema.optional(),
  where: Youtube_videosWhereInputSchema.optional(),
  orderBy: z.union([ Youtube_videosOrderByWithRelationInputSchema.array(),Youtube_videosOrderByWithRelationInputSchema ]).optional(),
  cursor: Youtube_videosWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Youtube_videosScalarFieldEnumSchema.array().optional(),
}).strict()

export const Youtube_videosFindFirstOrThrowArgsSchema: z.ZodType<Prisma.Youtube_videosFindFirstOrThrowArgs> = z.object({
  select: Youtube_videosSelectSchema.optional(),
  include: Youtube_videosIncludeSchema.optional(),
  where: Youtube_videosWhereInputSchema.optional(),
  orderBy: z.union([ Youtube_videosOrderByWithRelationInputSchema.array(),Youtube_videosOrderByWithRelationInputSchema ]).optional(),
  cursor: Youtube_videosWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Youtube_videosScalarFieldEnumSchema.array().optional(),
}).strict()

export const Youtube_videosFindManyArgsSchema: z.ZodType<Prisma.Youtube_videosFindManyArgs> = z.object({
  select: Youtube_videosSelectSchema.optional(),
  include: Youtube_videosIncludeSchema.optional(),
  where: Youtube_videosWhereInputSchema.optional(),
  orderBy: z.union([ Youtube_videosOrderByWithRelationInputSchema.array(),Youtube_videosOrderByWithRelationInputSchema ]).optional(),
  cursor: Youtube_videosWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Youtube_videosScalarFieldEnumSchema.array().optional(),
}).strict()

export const Youtube_videosAggregateArgsSchema: z.ZodType<Prisma.Youtube_videosAggregateArgs> = z.object({
  where: Youtube_videosWhereInputSchema.optional(),
  orderBy: z.union([ Youtube_videosOrderByWithRelationInputSchema.array(),Youtube_videosOrderByWithRelationInputSchema ]).optional(),
  cursor: Youtube_videosWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const Youtube_videosGroupByArgsSchema: z.ZodType<Prisma.Youtube_videosGroupByArgs> = z.object({
  where: Youtube_videosWhereInputSchema.optional(),
  orderBy: z.union([ Youtube_videosOrderByWithAggregationInputSchema.array(),Youtube_videosOrderByWithAggregationInputSchema ]).optional(),
  by: Youtube_videosScalarFieldEnumSchema.array(),
  having: Youtube_videosScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const Youtube_videosFindUniqueArgsSchema: z.ZodType<Prisma.Youtube_videosFindUniqueArgs> = z.object({
  select: Youtube_videosSelectSchema.optional(),
  include: Youtube_videosIncludeSchema.optional(),
  where: Youtube_videosWhereUniqueInputSchema,
}).strict()

export const Youtube_videosFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.Youtube_videosFindUniqueOrThrowArgs> = z.object({
  select: Youtube_videosSelectSchema.optional(),
  include: Youtube_videosIncludeSchema.optional(),
  where: Youtube_videosWhereUniqueInputSchema,
}).strict()

export const Trpc_callsCreateArgsSchema: z.ZodType<Prisma.Trpc_callsCreateArgs> = z.object({
  select: Trpc_callsSelectSchema.optional(),
  data: z.union([ Trpc_callsCreateInputSchema,Trpc_callsUncheckedCreateInputSchema ]),
}).strict()

export const Trpc_callsUpsertArgsSchema: z.ZodType<Prisma.Trpc_callsUpsertArgs> = z.object({
  select: Trpc_callsSelectSchema.optional(),
  where: Trpc_callsWhereUniqueInputSchema,
  create: z.union([ Trpc_callsCreateInputSchema,Trpc_callsUncheckedCreateInputSchema ]),
  update: z.union([ Trpc_callsUpdateInputSchema,Trpc_callsUncheckedUpdateInputSchema ]),
}).strict()

export const Trpc_callsCreateManyArgsSchema: z.ZodType<Prisma.Trpc_callsCreateManyArgs> = z.object({
  data: Trpc_callsCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const Trpc_callsDeleteArgsSchema: z.ZodType<Prisma.Trpc_callsDeleteArgs> = z.object({
  select: Trpc_callsSelectSchema.optional(),
  where: Trpc_callsWhereUniqueInputSchema,
}).strict()

export const Trpc_callsUpdateArgsSchema: z.ZodType<Prisma.Trpc_callsUpdateArgs> = z.object({
  select: Trpc_callsSelectSchema.optional(),
  data: z.union([ Trpc_callsUpdateInputSchema,Trpc_callsUncheckedUpdateInputSchema ]),
  where: Trpc_callsWhereUniqueInputSchema,
}).strict()

export const Trpc_callsUpdateManyArgsSchema: z.ZodType<Prisma.Trpc_callsUpdateManyArgs> = z.object({
  data: z.union([ Trpc_callsUpdateManyMutationInputSchema,Trpc_callsUncheckedUpdateManyInputSchema ]),
  where: Trpc_callsWhereInputSchema.optional(),
}).strict()

export const Trpc_callsDeleteManyArgsSchema: z.ZodType<Prisma.Trpc_callsDeleteManyArgs> = z.object({
  where: Trpc_callsWhereInputSchema.optional(),
}).strict()

export const Youtube_basic_summaryCreateArgsSchema: z.ZodType<Prisma.Youtube_basic_summaryCreateArgs> = z.object({
  select: Youtube_basic_summarySelectSchema.optional(),
  include: Youtube_basic_summaryIncludeSchema.optional(),
  data: z.union([ Youtube_basic_summaryCreateInputSchema,Youtube_basic_summaryUncheckedCreateInputSchema ]),
}).strict()

export const Youtube_basic_summaryUpsertArgsSchema: z.ZodType<Prisma.Youtube_basic_summaryUpsertArgs> = z.object({
  select: Youtube_basic_summarySelectSchema.optional(),
  include: Youtube_basic_summaryIncludeSchema.optional(),
  where: Youtube_basic_summaryWhereUniqueInputSchema,
  create: z.union([ Youtube_basic_summaryCreateInputSchema,Youtube_basic_summaryUncheckedCreateInputSchema ]),
  update: z.union([ Youtube_basic_summaryUpdateInputSchema,Youtube_basic_summaryUncheckedUpdateInputSchema ]),
}).strict()

export const Youtube_basic_summaryCreateManyArgsSchema: z.ZodType<Prisma.Youtube_basic_summaryCreateManyArgs> = z.object({
  data: Youtube_basic_summaryCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const Youtube_basic_summaryDeleteArgsSchema: z.ZodType<Prisma.Youtube_basic_summaryDeleteArgs> = z.object({
  select: Youtube_basic_summarySelectSchema.optional(),
  include: Youtube_basic_summaryIncludeSchema.optional(),
  where: Youtube_basic_summaryWhereUniqueInputSchema,
}).strict()

export const Youtube_basic_summaryUpdateArgsSchema: z.ZodType<Prisma.Youtube_basic_summaryUpdateArgs> = z.object({
  select: Youtube_basic_summarySelectSchema.optional(),
  include: Youtube_basic_summaryIncludeSchema.optional(),
  data: z.union([ Youtube_basic_summaryUpdateInputSchema,Youtube_basic_summaryUncheckedUpdateInputSchema ]),
  where: Youtube_basic_summaryWhereUniqueInputSchema,
}).strict()

export const Youtube_basic_summaryUpdateManyArgsSchema: z.ZodType<Prisma.Youtube_basic_summaryUpdateManyArgs> = z.object({
  data: z.union([ Youtube_basic_summaryUpdateManyMutationInputSchema,Youtube_basic_summaryUncheckedUpdateManyInputSchema ]),
  where: Youtube_basic_summaryWhereInputSchema.optional(),
}).strict()

export const Youtube_basic_summaryDeleteManyArgsSchema: z.ZodType<Prisma.Youtube_basic_summaryDeleteManyArgs> = z.object({
  where: Youtube_basic_summaryWhereInputSchema.optional(),
}).strict()

export const Youtube_llm_outputsCreateArgsSchema: z.ZodType<Prisma.Youtube_llm_outputsCreateArgs> = z.object({
  select: Youtube_llm_outputsSelectSchema.optional(),
  include: Youtube_llm_outputsIncludeSchema.optional(),
  data: z.union([ Youtube_llm_outputsCreateInputSchema,Youtube_llm_outputsUncheckedCreateInputSchema ]),
}).strict()

export const Youtube_llm_outputsUpsertArgsSchema: z.ZodType<Prisma.Youtube_llm_outputsUpsertArgs> = z.object({
  select: Youtube_llm_outputsSelectSchema.optional(),
  include: Youtube_llm_outputsIncludeSchema.optional(),
  where: Youtube_llm_outputsWhereUniqueInputSchema,
  create: z.union([ Youtube_llm_outputsCreateInputSchema,Youtube_llm_outputsUncheckedCreateInputSchema ]),
  update: z.union([ Youtube_llm_outputsUpdateInputSchema,Youtube_llm_outputsUncheckedUpdateInputSchema ]),
}).strict()

export const Youtube_llm_outputsCreateManyArgsSchema: z.ZodType<Prisma.Youtube_llm_outputsCreateManyArgs> = z.object({
  data: Youtube_llm_outputsCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const Youtube_llm_outputsDeleteArgsSchema: z.ZodType<Prisma.Youtube_llm_outputsDeleteArgs> = z.object({
  select: Youtube_llm_outputsSelectSchema.optional(),
  include: Youtube_llm_outputsIncludeSchema.optional(),
  where: Youtube_llm_outputsWhereUniqueInputSchema,
}).strict()

export const Youtube_llm_outputsUpdateArgsSchema: z.ZodType<Prisma.Youtube_llm_outputsUpdateArgs> = z.object({
  select: Youtube_llm_outputsSelectSchema.optional(),
  include: Youtube_llm_outputsIncludeSchema.optional(),
  data: z.union([ Youtube_llm_outputsUpdateInputSchema,Youtube_llm_outputsUncheckedUpdateInputSchema ]),
  where: Youtube_llm_outputsWhereUniqueInputSchema,
}).strict()

export const Youtube_llm_outputsUpdateManyArgsSchema: z.ZodType<Prisma.Youtube_llm_outputsUpdateManyArgs> = z.object({
  data: z.union([ Youtube_llm_outputsUpdateManyMutationInputSchema,Youtube_llm_outputsUncheckedUpdateManyInputSchema ]),
  where: Youtube_llm_outputsWhereInputSchema.optional(),
}).strict()

export const Youtube_llm_outputsDeleteManyArgsSchema: z.ZodType<Prisma.Youtube_llm_outputsDeleteManyArgs> = z.object({
  where: Youtube_llm_outputsWhereInputSchema.optional(),
}).strict()

export const Youtube_videosCreateArgsSchema: z.ZodType<Prisma.Youtube_videosCreateArgs> = z.object({
  select: Youtube_videosSelectSchema.optional(),
  include: Youtube_videosIncludeSchema.optional(),
  data: z.union([ Youtube_videosCreateInputSchema,Youtube_videosUncheckedCreateInputSchema ]),
}).strict()

export const Youtube_videosUpsertArgsSchema: z.ZodType<Prisma.Youtube_videosUpsertArgs> = z.object({
  select: Youtube_videosSelectSchema.optional(),
  include: Youtube_videosIncludeSchema.optional(),
  where: Youtube_videosWhereUniqueInputSchema,
  create: z.union([ Youtube_videosCreateInputSchema,Youtube_videosUncheckedCreateInputSchema ]),
  update: z.union([ Youtube_videosUpdateInputSchema,Youtube_videosUncheckedUpdateInputSchema ]),
}).strict()

export const Youtube_videosCreateManyArgsSchema: z.ZodType<Prisma.Youtube_videosCreateManyArgs> = z.object({
  data: Youtube_videosCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const Youtube_videosDeleteArgsSchema: z.ZodType<Prisma.Youtube_videosDeleteArgs> = z.object({
  select: Youtube_videosSelectSchema.optional(),
  include: Youtube_videosIncludeSchema.optional(),
  where: Youtube_videosWhereUniqueInputSchema,
}).strict()

export const Youtube_videosUpdateArgsSchema: z.ZodType<Prisma.Youtube_videosUpdateArgs> = z.object({
  select: Youtube_videosSelectSchema.optional(),
  include: Youtube_videosIncludeSchema.optional(),
  data: z.union([ Youtube_videosUpdateInputSchema,Youtube_videosUncheckedUpdateInputSchema ]),
  where: Youtube_videosWhereUniqueInputSchema,
}).strict()

export const Youtube_videosUpdateManyArgsSchema: z.ZodType<Prisma.Youtube_videosUpdateManyArgs> = z.object({
  data: z.union([ Youtube_videosUpdateManyMutationInputSchema,Youtube_videosUncheckedUpdateManyInputSchema ]),
  where: Youtube_videosWhereInputSchema.optional(),
}).strict()

export const Youtube_videosDeleteManyArgsSchema: z.ZodType<Prisma.Youtube_videosDeleteManyArgs> = z.object({
  where: Youtube_videosWhereInputSchema.optional(),
}).strict()

interface Trpc_callsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.Trpc_callsArgs
  readonly type: Prisma.Trpc_callsGetPayload<this['_A']>
}

interface Youtube_basic_summaryGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.Youtube_basic_summaryArgs
  readonly type: Prisma.Youtube_basic_summaryGetPayload<this['_A']>
}

interface Youtube_llm_outputsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.Youtube_llm_outputsArgs
  readonly type: Prisma.Youtube_llm_outputsGetPayload<this['_A']>
}

interface Youtube_videosGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.Youtube_videosArgs
  readonly type: Prisma.Youtube_videosGetPayload<this['_A']>
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
    modelSchema: (Trpc_callsCreateInputSchema as any)
      .partial()
      .or((Trpc_callsUncheckedCreateInputSchema as any).partial()),
    createSchema: Trpc_callsCreateArgsSchema,
    createManySchema: Trpc_callsCreateManyArgsSchema,
    findUniqueSchema: Trpc_callsFindUniqueArgsSchema,
    findSchema: Trpc_callsFindFirstArgsSchema,
    updateSchema: Trpc_callsUpdateArgsSchema,
    updateManySchema: Trpc_callsUpdateManyArgsSchema,
    upsertSchema: Trpc_callsUpsertArgsSchema,
    deleteSchema: Trpc_callsDeleteArgsSchema,
    deleteManySchema: Trpc_callsDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof Trpc_callsCreateInputSchema>,
    Prisma.Trpc_callsCreateArgs['data'],
    Prisma.Trpc_callsUpdateArgs['data'],
    Prisma.Trpc_callsFindFirstArgs['select'],
    Prisma.Trpc_callsFindFirstArgs['where'],
    Prisma.Trpc_callsFindUniqueArgs['where'],
    never,
    Prisma.Trpc_callsFindFirstArgs['orderBy'],
    Prisma.Trpc_callsScalarFieldEnum,
    Trpc_callsGetPayload
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
      new Relation("youtube_videos", "youtube_id", "id", "youtube_videos", "Youtube_basic_summaryToYoutube_videos", "one"),
    ],
    modelSchema: (Youtube_basic_summaryCreateInputSchema as any)
      .partial()
      .or((Youtube_basic_summaryUncheckedCreateInputSchema as any).partial()),
    createSchema: Youtube_basic_summaryCreateArgsSchema,
    createManySchema: Youtube_basic_summaryCreateManyArgsSchema,
    findUniqueSchema: Youtube_basic_summaryFindUniqueArgsSchema,
    findSchema: Youtube_basic_summaryFindFirstArgsSchema,
    updateSchema: Youtube_basic_summaryUpdateArgsSchema,
    updateManySchema: Youtube_basic_summaryUpdateManyArgsSchema,
    upsertSchema: Youtube_basic_summaryUpsertArgsSchema,
    deleteSchema: Youtube_basic_summaryDeleteArgsSchema,
    deleteManySchema: Youtube_basic_summaryDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof Youtube_basic_summaryCreateInputSchema>,
    Prisma.Youtube_basic_summaryCreateArgs['data'],
    Prisma.Youtube_basic_summaryUpdateArgs['data'],
    Prisma.Youtube_basic_summaryFindFirstArgs['select'],
    Prisma.Youtube_basic_summaryFindFirstArgs['where'],
    Prisma.Youtube_basic_summaryFindUniqueArgs['where'],
    Omit<Prisma.Youtube_basic_summaryInclude, '_count'>,
    Prisma.Youtube_basic_summaryFindFirstArgs['orderBy'],
    Prisma.Youtube_basic_summaryScalarFieldEnum,
    Youtube_basic_summaryGetPayload
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
      new Relation("youtube_videos", "youtube_id", "id", "youtube_videos", "Youtube_llm_outputsToYoutube_videos", "one"),
    ],
    modelSchema: (Youtube_llm_outputsCreateInputSchema as any)
      .partial()
      .or((Youtube_llm_outputsUncheckedCreateInputSchema as any).partial()),
    createSchema: Youtube_llm_outputsCreateArgsSchema,
    createManySchema: Youtube_llm_outputsCreateManyArgsSchema,
    findUniqueSchema: Youtube_llm_outputsFindUniqueArgsSchema,
    findSchema: Youtube_llm_outputsFindFirstArgsSchema,
    updateSchema: Youtube_llm_outputsUpdateArgsSchema,
    updateManySchema: Youtube_llm_outputsUpdateManyArgsSchema,
    upsertSchema: Youtube_llm_outputsUpsertArgsSchema,
    deleteSchema: Youtube_llm_outputsDeleteArgsSchema,
    deleteManySchema: Youtube_llm_outputsDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof Youtube_llm_outputsCreateInputSchema>,
    Prisma.Youtube_llm_outputsCreateArgs['data'],
    Prisma.Youtube_llm_outputsUpdateArgs['data'],
    Prisma.Youtube_llm_outputsFindFirstArgs['select'],
    Prisma.Youtube_llm_outputsFindFirstArgs['where'],
    Prisma.Youtube_llm_outputsFindUniqueArgs['where'],
    Omit<Prisma.Youtube_llm_outputsInclude, '_count'>,
    Prisma.Youtube_llm_outputsFindFirstArgs['orderBy'],
    Prisma.Youtube_llm_outputsScalarFieldEnum,
    Youtube_llm_outputsGetPayload
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
      ],
      [
        "score",
        "FLOAT8"
      ],
      [
        "error",
        "TEXT"
      ]
    ]),
    relations: [
      new Relation("youtube_basic_summary", "", "", "youtube_basic_summary", "Youtube_basic_summaryToYoutube_videos", "many"),
      new Relation("youtube_llm_outputs", "", "", "youtube_llm_outputs", "Youtube_llm_outputsToYoutube_videos", "many"),
    ],
    modelSchema: (Youtube_videosCreateInputSchema as any)
      .partial()
      .or((Youtube_videosUncheckedCreateInputSchema as any).partial()),
    createSchema: Youtube_videosCreateArgsSchema,
    createManySchema: Youtube_videosCreateManyArgsSchema,
    findUniqueSchema: Youtube_videosFindUniqueArgsSchema,
    findSchema: Youtube_videosFindFirstArgsSchema,
    updateSchema: Youtube_videosUpdateArgsSchema,
    updateManySchema: Youtube_videosUpdateManyArgsSchema,
    upsertSchema: Youtube_videosUpsertArgsSchema,
    deleteSchema: Youtube_videosDeleteArgsSchema,
    deleteManySchema: Youtube_videosDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof Youtube_videosCreateInputSchema>,
    Prisma.Youtube_videosCreateArgs['data'],
    Prisma.Youtube_videosUpdateArgs['data'],
    Prisma.Youtube_videosFindFirstArgs['select'],
    Prisma.Youtube_videosFindFirstArgs['where'],
    Prisma.Youtube_videosFindUniqueArgs['where'],
    Omit<Prisma.Youtube_videosInclude, '_count'>,
    Prisma.Youtube_videosFindFirstArgs['orderBy'],
    Prisma.Youtube_videosScalarFieldEnum,
    Youtube_videosGetPayload
  >,
}

export const schema = new DbSchema(tableSchemas, migrations)
export type Electric = ElectricClient<typeof schema>
