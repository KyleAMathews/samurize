
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Trpc_calls
 * 
 */
export type Trpc_calls = {
  /**
   * @zod.string.uuid()
   */
  id: string
  createdat: Date
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  elapsedms: number | null
  path: string
  input: string | null
  type: string
  state: string
  clientid: string
  response: string | null
}

/**
 * Model Youtube_basic_summary
 * 
 */
export type Youtube_basic_summary = {
  /**
   * @zod.string.uuid()
   */
  id: string
  youtube_id: string | null
  created_at: Date | null
  hour_summaries: string | null
}

/**
 * Model Youtube_llm_outputs
 * 
 */
export type Youtube_llm_outputs = {
  /**
   * @zod.string.uuid()
   */
  id: string
  youtube_id: string | null
  created_at: Date | null
  llm_prompt_type: string | null
  output: string | null
}

/**
 * Model Youtube_videos
 * 
 */
export type Youtube_videos = {
  id: string
  transcript: string | null
  created_at: Date | null
  updated_at: Date | null
  title: string | null
  author_name: string | null
  author_url: string | null
  type: string | null
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  height: number | null
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  width: number | null
  version: string | null
  provider_name: string | null
  provider_url: string | null
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  thumbnail_height: number | null
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  thumbnail_width: number | null
  thumbnail_url: string | null
  html: string | null
  /**
   * @zod.custom.use(z.number().or(z.nan()))
   */
  score: number | null
  error: string | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Trpc_calls
 * const trpc_calls = await prisma.trpc_calls.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Trpc_calls
   * const trpc_calls = await prisma.trpc_calls.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.trpc_calls`: Exposes CRUD operations for the **Trpc_calls** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trpc_calls
    * const trpc_calls = await prisma.trpc_calls.findMany()
    * ```
    */
  get trpc_calls(): Prisma.Trpc_callsDelegate<GlobalReject>;

  /**
   * `prisma.youtube_basic_summary`: Exposes CRUD operations for the **Youtube_basic_summary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Youtube_basic_summaries
    * const youtube_basic_summaries = await prisma.youtube_basic_summary.findMany()
    * ```
    */
  get youtube_basic_summary(): Prisma.Youtube_basic_summaryDelegate<GlobalReject>;

  /**
   * `prisma.youtube_llm_outputs`: Exposes CRUD operations for the **Youtube_llm_outputs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Youtube_llm_outputs
    * const youtube_llm_outputs = await prisma.youtube_llm_outputs.findMany()
    * ```
    */
  get youtube_llm_outputs(): Prisma.Youtube_llm_outputsDelegate<GlobalReject>;

  /**
   * `prisma.youtube_videos`: Exposes CRUD operations for the **Youtube_videos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Youtube_videos
    * const youtube_videos = await prisma.youtube_videos.findMany()
    * ```
    */
  get youtube_videos(): Prisma.Youtube_videosDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.8.1
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
export type InputJsonValue = null | string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Trpc_calls: 'Trpc_calls',
    Youtube_basic_summary: 'Youtube_basic_summary',
    Youtube_llm_outputs: 'Youtube_llm_outputs',
    Youtube_videos: 'Youtube_videos'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Youtube_videosCountOutputType
   */


  export type Youtube_videosCountOutputType = {
    youtube_basic_summary: number
    youtube_llm_outputs: number
  }

  export type Youtube_videosCountOutputTypeSelect = {
    youtube_basic_summary?: boolean
    youtube_llm_outputs?: boolean
  }

  export type Youtube_videosCountOutputTypeGetPayload<S extends boolean | null | undefined | Youtube_videosCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Youtube_videosCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Youtube_videosCountOutputTypeArgs)
    ? Youtube_videosCountOutputType 
    : S extends { select: any } & (Youtube_videosCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Youtube_videosCountOutputType ? Youtube_videosCountOutputType[P] : never
  } 
      : Youtube_videosCountOutputType




  // Custom InputTypes

  /**
   * Youtube_videosCountOutputType without action
   */
  export type Youtube_videosCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Youtube_videosCountOutputType
     * 
    **/
    select?: Youtube_videosCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Trpc_calls
   */


  export type AggregateTrpc_calls = {
    _count: Trpc_callsCountAggregateOutputType | null
    _avg: Trpc_callsAvgAggregateOutputType | null
    _sum: Trpc_callsSumAggregateOutputType | null
    _min: Trpc_callsMinAggregateOutputType | null
    _max: Trpc_callsMaxAggregateOutputType | null
  }

  export type Trpc_callsAvgAggregateOutputType = {
    elapsedms: number | null
  }

  export type Trpc_callsSumAggregateOutputType = {
    elapsedms: number | null
  }

  export type Trpc_callsMinAggregateOutputType = {
    id: string | null
    createdat: Date | null
    elapsedms: number | null
    path: string | null
    input: string | null
    type: string | null
    state: string | null
    clientid: string | null
    response: string | null
  }

  export type Trpc_callsMaxAggregateOutputType = {
    id: string | null
    createdat: Date | null
    elapsedms: number | null
    path: string | null
    input: string | null
    type: string | null
    state: string | null
    clientid: string | null
    response: string | null
  }

  export type Trpc_callsCountAggregateOutputType = {
    id: number
    createdat: number
    elapsedms: number
    path: number
    input: number
    type: number
    state: number
    clientid: number
    response: number
    _all: number
  }


  export type Trpc_callsAvgAggregateInputType = {
    elapsedms?: true
  }

  export type Trpc_callsSumAggregateInputType = {
    elapsedms?: true
  }

  export type Trpc_callsMinAggregateInputType = {
    id?: true
    createdat?: true
    elapsedms?: true
    path?: true
    input?: true
    type?: true
    state?: true
    clientid?: true
    response?: true
  }

  export type Trpc_callsMaxAggregateInputType = {
    id?: true
    createdat?: true
    elapsedms?: true
    path?: true
    input?: true
    type?: true
    state?: true
    clientid?: true
    response?: true
  }

  export type Trpc_callsCountAggregateInputType = {
    id?: true
    createdat?: true
    elapsedms?: true
    path?: true
    input?: true
    type?: true
    state?: true
    clientid?: true
    response?: true
    _all?: true
  }

  export type Trpc_callsAggregateArgs = {
    /**
     * Filter which Trpc_calls to aggregate.
     * 
    **/
    where?: Trpc_callsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trpc_calls to fetch.
     * 
    **/
    orderBy?: Enumerable<Trpc_callsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Trpc_callsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trpc_calls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trpc_calls.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trpc_calls
    **/
    _count?: true | Trpc_callsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Trpc_callsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Trpc_callsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Trpc_callsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Trpc_callsMaxAggregateInputType
  }

  export type GetTrpc_callsAggregateType<T extends Trpc_callsAggregateArgs> = {
        [P in keyof T & keyof AggregateTrpc_calls]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrpc_calls[P]>
      : GetScalarType<T[P], AggregateTrpc_calls[P]>
  }




  export type Trpc_callsGroupByArgs = {
    where?: Trpc_callsWhereInput
    orderBy?: Enumerable<Trpc_callsOrderByWithAggregationInput>
    by: Array<Trpc_callsScalarFieldEnum>
    having?: Trpc_callsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Trpc_callsCountAggregateInputType | true
    _avg?: Trpc_callsAvgAggregateInputType
    _sum?: Trpc_callsSumAggregateInputType
    _min?: Trpc_callsMinAggregateInputType
    _max?: Trpc_callsMaxAggregateInputType
  }


  export type Trpc_callsGroupByOutputType = {
    id: string
    createdat: Date
    elapsedms: number | null
    path: string
    input: string | null
    type: string
    state: string
    clientid: string
    response: string | null
    _count: Trpc_callsCountAggregateOutputType | null
    _avg: Trpc_callsAvgAggregateOutputType | null
    _sum: Trpc_callsSumAggregateOutputType | null
    _min: Trpc_callsMinAggregateOutputType | null
    _max: Trpc_callsMaxAggregateOutputType | null
  }

  type GetTrpc_callsGroupByPayload<T extends Trpc_callsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Trpc_callsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Trpc_callsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Trpc_callsGroupByOutputType[P]>
            : GetScalarType<T[P], Trpc_callsGroupByOutputType[P]>
        }
      >
    >


  export type Trpc_callsSelect = {
    id?: boolean
    createdat?: boolean
    elapsedms?: boolean
    path?: boolean
    input?: boolean
    type?: boolean
    state?: boolean
    clientid?: boolean
    response?: boolean
  }


  export type Trpc_callsGetPayload<S extends boolean | null | undefined | Trpc_callsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Trpc_calls :
    S extends undefined ? never :
    S extends { include: any } & (Trpc_callsArgs | Trpc_callsFindManyArgs)
    ? Trpc_calls 
    : S extends { select: any } & (Trpc_callsArgs | Trpc_callsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Trpc_calls ? Trpc_calls[P] : never
  } 
      : Trpc_calls


  type Trpc_callsCountArgs = Merge<
    Omit<Trpc_callsFindManyArgs, 'select' | 'include'> & {
      select?: Trpc_callsCountAggregateInputType | true
    }
  >

  export interface Trpc_callsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Trpc_calls that matches the filter.
     * @param {Trpc_callsFindUniqueArgs} args - Arguments to find a Trpc_calls
     * @example
     * // Get one Trpc_calls
     * const trpc_calls = await prisma.trpc_calls.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Trpc_callsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Trpc_callsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Trpc_calls'> extends True ? Prisma__Trpc_callsClient<Trpc_callsGetPayload<T>> : Prisma__Trpc_callsClient<Trpc_callsGetPayload<T> | null, null>

    /**
     * Find one Trpc_calls that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Trpc_callsFindUniqueOrThrowArgs} args - Arguments to find a Trpc_calls
     * @example
     * // Get one Trpc_calls
     * const trpc_calls = await prisma.trpc_calls.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Trpc_callsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Trpc_callsFindUniqueOrThrowArgs>
    ): Prisma__Trpc_callsClient<Trpc_callsGetPayload<T>>

    /**
     * Find the first Trpc_calls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Trpc_callsFindFirstArgs} args - Arguments to find a Trpc_calls
     * @example
     * // Get one Trpc_calls
     * const trpc_calls = await prisma.trpc_calls.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Trpc_callsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Trpc_callsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Trpc_calls'> extends True ? Prisma__Trpc_callsClient<Trpc_callsGetPayload<T>> : Prisma__Trpc_callsClient<Trpc_callsGetPayload<T> | null, null>

    /**
     * Find the first Trpc_calls that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Trpc_callsFindFirstOrThrowArgs} args - Arguments to find a Trpc_calls
     * @example
     * // Get one Trpc_calls
     * const trpc_calls = await prisma.trpc_calls.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Trpc_callsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Trpc_callsFindFirstOrThrowArgs>
    ): Prisma__Trpc_callsClient<Trpc_callsGetPayload<T>>

    /**
     * Find zero or more Trpc_calls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Trpc_callsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trpc_calls
     * const trpc_calls = await prisma.trpc_calls.findMany()
     * 
     * // Get first 10 Trpc_calls
     * const trpc_calls = await prisma.trpc_calls.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trpc_callsWithIdOnly = await prisma.trpc_calls.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Trpc_callsFindManyArgs>(
      args?: SelectSubset<T, Trpc_callsFindManyArgs>
    ): PrismaPromise<Array<Trpc_callsGetPayload<T>>>

    /**
     * Create a Trpc_calls.
     * @param {Trpc_callsCreateArgs} args - Arguments to create a Trpc_calls.
     * @example
     * // Create one Trpc_calls
     * const Trpc_calls = await prisma.trpc_calls.create({
     *   data: {
     *     // ... data to create a Trpc_calls
     *   }
     * })
     * 
    **/
    create<T extends Trpc_callsCreateArgs>(
      args: SelectSubset<T, Trpc_callsCreateArgs>
    ): Prisma__Trpc_callsClient<Trpc_callsGetPayload<T>>

    /**
     * Create many Trpc_calls.
     *     @param {Trpc_callsCreateManyArgs} args - Arguments to create many Trpc_calls.
     *     @example
     *     // Create many Trpc_calls
     *     const trpc_calls = await prisma.trpc_calls.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Trpc_callsCreateManyArgs>(
      args?: SelectSubset<T, Trpc_callsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Trpc_calls.
     * @param {Trpc_callsDeleteArgs} args - Arguments to delete one Trpc_calls.
     * @example
     * // Delete one Trpc_calls
     * const Trpc_calls = await prisma.trpc_calls.delete({
     *   where: {
     *     // ... filter to delete one Trpc_calls
     *   }
     * })
     * 
    **/
    delete<T extends Trpc_callsDeleteArgs>(
      args: SelectSubset<T, Trpc_callsDeleteArgs>
    ): Prisma__Trpc_callsClient<Trpc_callsGetPayload<T>>

    /**
     * Update one Trpc_calls.
     * @param {Trpc_callsUpdateArgs} args - Arguments to update one Trpc_calls.
     * @example
     * // Update one Trpc_calls
     * const trpc_calls = await prisma.trpc_calls.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Trpc_callsUpdateArgs>(
      args: SelectSubset<T, Trpc_callsUpdateArgs>
    ): Prisma__Trpc_callsClient<Trpc_callsGetPayload<T>>

    /**
     * Delete zero or more Trpc_calls.
     * @param {Trpc_callsDeleteManyArgs} args - Arguments to filter Trpc_calls to delete.
     * @example
     * // Delete a few Trpc_calls
     * const { count } = await prisma.trpc_calls.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Trpc_callsDeleteManyArgs>(
      args?: SelectSubset<T, Trpc_callsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trpc_calls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Trpc_callsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trpc_calls
     * const trpc_calls = await prisma.trpc_calls.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Trpc_callsUpdateManyArgs>(
      args: SelectSubset<T, Trpc_callsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Trpc_calls.
     * @param {Trpc_callsUpsertArgs} args - Arguments to update or create a Trpc_calls.
     * @example
     * // Update or create a Trpc_calls
     * const trpc_calls = await prisma.trpc_calls.upsert({
     *   create: {
     *     // ... data to create a Trpc_calls
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trpc_calls we want to update
     *   }
     * })
    **/
    upsert<T extends Trpc_callsUpsertArgs>(
      args: SelectSubset<T, Trpc_callsUpsertArgs>
    ): Prisma__Trpc_callsClient<Trpc_callsGetPayload<T>>

    /**
     * Count the number of Trpc_calls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Trpc_callsCountArgs} args - Arguments to filter Trpc_calls to count.
     * @example
     * // Count the number of Trpc_calls
     * const count = await prisma.trpc_calls.count({
     *   where: {
     *     // ... the filter for the Trpc_calls we want to count
     *   }
     * })
    **/
    count<T extends Trpc_callsCountArgs>(
      args?: Subset<T, Trpc_callsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Trpc_callsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trpc_calls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Trpc_callsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Trpc_callsAggregateArgs>(args: Subset<T, Trpc_callsAggregateArgs>): PrismaPromise<GetTrpc_callsAggregateType<T>>

    /**
     * Group by Trpc_calls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Trpc_callsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Trpc_callsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Trpc_callsGroupByArgs['orderBy'] }
        : { orderBy?: Trpc_callsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Trpc_callsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrpc_callsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Trpc_calls.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Trpc_callsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Trpc_calls base type for findUnique actions
   */
  export type Trpc_callsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Trpc_calls
     * 
    **/
    select?: Trpc_callsSelect | null
    /**
     * Filter, which Trpc_calls to fetch.
     * 
    **/
    where: Trpc_callsWhereUniqueInput
  }

  /**
   * Trpc_calls findUnique
   */
  export interface Trpc_callsFindUniqueArgs extends Trpc_callsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Trpc_calls findUniqueOrThrow
   */
  export type Trpc_callsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Trpc_calls
     * 
    **/
    select?: Trpc_callsSelect | null
    /**
     * Filter, which Trpc_calls to fetch.
     * 
    **/
    where: Trpc_callsWhereUniqueInput
  }


  /**
   * Trpc_calls base type for findFirst actions
   */
  export type Trpc_callsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Trpc_calls
     * 
    **/
    select?: Trpc_callsSelect | null
    /**
     * Filter, which Trpc_calls to fetch.
     * 
    **/
    where?: Trpc_callsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trpc_calls to fetch.
     * 
    **/
    orderBy?: Enumerable<Trpc_callsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trpc_calls.
     * 
    **/
    cursor?: Trpc_callsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trpc_calls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trpc_calls.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trpc_calls.
     * 
    **/
    distinct?: Enumerable<Trpc_callsScalarFieldEnum>
  }

  /**
   * Trpc_calls findFirst
   */
  export interface Trpc_callsFindFirstArgs extends Trpc_callsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Trpc_calls findFirstOrThrow
   */
  export type Trpc_callsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Trpc_calls
     * 
    **/
    select?: Trpc_callsSelect | null
    /**
     * Filter, which Trpc_calls to fetch.
     * 
    **/
    where?: Trpc_callsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trpc_calls to fetch.
     * 
    **/
    orderBy?: Enumerable<Trpc_callsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trpc_calls.
     * 
    **/
    cursor?: Trpc_callsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trpc_calls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trpc_calls.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trpc_calls.
     * 
    **/
    distinct?: Enumerable<Trpc_callsScalarFieldEnum>
  }


  /**
   * Trpc_calls findMany
   */
  export type Trpc_callsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Trpc_calls
     * 
    **/
    select?: Trpc_callsSelect | null
    /**
     * Filter, which Trpc_calls to fetch.
     * 
    **/
    where?: Trpc_callsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trpc_calls to fetch.
     * 
    **/
    orderBy?: Enumerable<Trpc_callsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trpc_calls.
     * 
    **/
    cursor?: Trpc_callsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trpc_calls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trpc_calls.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Trpc_callsScalarFieldEnum>
  }


  /**
   * Trpc_calls create
   */
  export type Trpc_callsCreateArgs = {
    /**
     * Select specific fields to fetch from the Trpc_calls
     * 
    **/
    select?: Trpc_callsSelect | null
    /**
     * The data needed to create a Trpc_calls.
     * 
    **/
    data: XOR<Trpc_callsCreateInput, Trpc_callsUncheckedCreateInput>
  }


  /**
   * Trpc_calls createMany
   */
  export type Trpc_callsCreateManyArgs = {
    /**
     * The data used to create many Trpc_calls.
     * 
    **/
    data: Enumerable<Trpc_callsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Trpc_calls update
   */
  export type Trpc_callsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Trpc_calls
     * 
    **/
    select?: Trpc_callsSelect | null
    /**
     * The data needed to update a Trpc_calls.
     * 
    **/
    data: XOR<Trpc_callsUpdateInput, Trpc_callsUncheckedUpdateInput>
    /**
     * Choose, which Trpc_calls to update.
     * 
    **/
    where: Trpc_callsWhereUniqueInput
  }


  /**
   * Trpc_calls updateMany
   */
  export type Trpc_callsUpdateManyArgs = {
    /**
     * The data used to update Trpc_calls.
     * 
    **/
    data: XOR<Trpc_callsUpdateManyMutationInput, Trpc_callsUncheckedUpdateManyInput>
    /**
     * Filter which Trpc_calls to update
     * 
    **/
    where?: Trpc_callsWhereInput
  }


  /**
   * Trpc_calls upsert
   */
  export type Trpc_callsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Trpc_calls
     * 
    **/
    select?: Trpc_callsSelect | null
    /**
     * The filter to search for the Trpc_calls to update in case it exists.
     * 
    **/
    where: Trpc_callsWhereUniqueInput
    /**
     * In case the Trpc_calls found by the `where` argument doesn't exist, create a new Trpc_calls with this data.
     * 
    **/
    create: XOR<Trpc_callsCreateInput, Trpc_callsUncheckedCreateInput>
    /**
     * In case the Trpc_calls was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Trpc_callsUpdateInput, Trpc_callsUncheckedUpdateInput>
  }


  /**
   * Trpc_calls delete
   */
  export type Trpc_callsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Trpc_calls
     * 
    **/
    select?: Trpc_callsSelect | null
    /**
     * Filter which Trpc_calls to delete.
     * 
    **/
    where: Trpc_callsWhereUniqueInput
  }


  /**
   * Trpc_calls deleteMany
   */
  export type Trpc_callsDeleteManyArgs = {
    /**
     * Filter which Trpc_calls to delete
     * 
    **/
    where?: Trpc_callsWhereInput
  }


  /**
   * Trpc_calls without action
   */
  export type Trpc_callsArgs = {
    /**
     * Select specific fields to fetch from the Trpc_calls
     * 
    **/
    select?: Trpc_callsSelect | null
  }



  /**
   * Model Youtube_basic_summary
   */


  export type AggregateYoutube_basic_summary = {
    _count: Youtube_basic_summaryCountAggregateOutputType | null
    _min: Youtube_basic_summaryMinAggregateOutputType | null
    _max: Youtube_basic_summaryMaxAggregateOutputType | null
  }

  export type Youtube_basic_summaryMinAggregateOutputType = {
    id: string | null
    youtube_id: string | null
    created_at: Date | null
    hour_summaries: string | null
  }

  export type Youtube_basic_summaryMaxAggregateOutputType = {
    id: string | null
    youtube_id: string | null
    created_at: Date | null
    hour_summaries: string | null
  }

  export type Youtube_basic_summaryCountAggregateOutputType = {
    id: number
    youtube_id: number
    created_at: number
    hour_summaries: number
    _all: number
  }


  export type Youtube_basic_summaryMinAggregateInputType = {
    id?: true
    youtube_id?: true
    created_at?: true
    hour_summaries?: true
  }

  export type Youtube_basic_summaryMaxAggregateInputType = {
    id?: true
    youtube_id?: true
    created_at?: true
    hour_summaries?: true
  }

  export type Youtube_basic_summaryCountAggregateInputType = {
    id?: true
    youtube_id?: true
    created_at?: true
    hour_summaries?: true
    _all?: true
  }

  export type Youtube_basic_summaryAggregateArgs = {
    /**
     * Filter which Youtube_basic_summary to aggregate.
     * 
    **/
    where?: Youtube_basic_summaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Youtube_basic_summaries to fetch.
     * 
    **/
    orderBy?: Enumerable<Youtube_basic_summaryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Youtube_basic_summaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Youtube_basic_summaries from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Youtube_basic_summaries.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Youtube_basic_summaries
    **/
    _count?: true | Youtube_basic_summaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Youtube_basic_summaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Youtube_basic_summaryMaxAggregateInputType
  }

  export type GetYoutube_basic_summaryAggregateType<T extends Youtube_basic_summaryAggregateArgs> = {
        [P in keyof T & keyof AggregateYoutube_basic_summary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYoutube_basic_summary[P]>
      : GetScalarType<T[P], AggregateYoutube_basic_summary[P]>
  }




  export type Youtube_basic_summaryGroupByArgs = {
    where?: Youtube_basic_summaryWhereInput
    orderBy?: Enumerable<Youtube_basic_summaryOrderByWithAggregationInput>
    by: Array<Youtube_basic_summaryScalarFieldEnum>
    having?: Youtube_basic_summaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Youtube_basic_summaryCountAggregateInputType | true
    _min?: Youtube_basic_summaryMinAggregateInputType
    _max?: Youtube_basic_summaryMaxAggregateInputType
  }


  export type Youtube_basic_summaryGroupByOutputType = {
    id: string
    youtube_id: string | null
    created_at: Date | null
    hour_summaries: string | null
    _count: Youtube_basic_summaryCountAggregateOutputType | null
    _min: Youtube_basic_summaryMinAggregateOutputType | null
    _max: Youtube_basic_summaryMaxAggregateOutputType | null
  }

  type GetYoutube_basic_summaryGroupByPayload<T extends Youtube_basic_summaryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Youtube_basic_summaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Youtube_basic_summaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Youtube_basic_summaryGroupByOutputType[P]>
            : GetScalarType<T[P], Youtube_basic_summaryGroupByOutputType[P]>
        }
      >
    >


  export type Youtube_basic_summarySelect = {
    id?: boolean
    youtube_id?: boolean
    created_at?: boolean
    hour_summaries?: boolean
    youtube_videos?: boolean | Youtube_videosArgs
  }


  export type Youtube_basic_summaryInclude = {
    youtube_videos?: boolean | Youtube_videosArgs
  } 

  export type Youtube_basic_summaryGetPayload<S extends boolean | null | undefined | Youtube_basic_summaryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Youtube_basic_summary :
    S extends undefined ? never :
    S extends { include: any } & (Youtube_basic_summaryArgs | Youtube_basic_summaryFindManyArgs)
    ? Youtube_basic_summary  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'youtube_videos' ? Youtube_videosGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (Youtube_basic_summaryArgs | Youtube_basic_summaryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'youtube_videos' ? Youtube_videosGetPayload<S['select'][P]> | null :  P extends keyof Youtube_basic_summary ? Youtube_basic_summary[P] : never
  } 
      : Youtube_basic_summary


  type Youtube_basic_summaryCountArgs = Merge<
    Omit<Youtube_basic_summaryFindManyArgs, 'select' | 'include'> & {
      select?: Youtube_basic_summaryCountAggregateInputType | true
    }
  >

  export interface Youtube_basic_summaryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Youtube_basic_summary that matches the filter.
     * @param {Youtube_basic_summaryFindUniqueArgs} args - Arguments to find a Youtube_basic_summary
     * @example
     * // Get one Youtube_basic_summary
     * const youtube_basic_summary = await prisma.youtube_basic_summary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Youtube_basic_summaryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Youtube_basic_summaryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Youtube_basic_summary'> extends True ? Prisma__Youtube_basic_summaryClient<Youtube_basic_summaryGetPayload<T>> : Prisma__Youtube_basic_summaryClient<Youtube_basic_summaryGetPayload<T> | null, null>

    /**
     * Find one Youtube_basic_summary that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Youtube_basic_summaryFindUniqueOrThrowArgs} args - Arguments to find a Youtube_basic_summary
     * @example
     * // Get one Youtube_basic_summary
     * const youtube_basic_summary = await prisma.youtube_basic_summary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Youtube_basic_summaryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Youtube_basic_summaryFindUniqueOrThrowArgs>
    ): Prisma__Youtube_basic_summaryClient<Youtube_basic_summaryGetPayload<T>>

    /**
     * Find the first Youtube_basic_summary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Youtube_basic_summaryFindFirstArgs} args - Arguments to find a Youtube_basic_summary
     * @example
     * // Get one Youtube_basic_summary
     * const youtube_basic_summary = await prisma.youtube_basic_summary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Youtube_basic_summaryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Youtube_basic_summaryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Youtube_basic_summary'> extends True ? Prisma__Youtube_basic_summaryClient<Youtube_basic_summaryGetPayload<T>> : Prisma__Youtube_basic_summaryClient<Youtube_basic_summaryGetPayload<T> | null, null>

    /**
     * Find the first Youtube_basic_summary that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Youtube_basic_summaryFindFirstOrThrowArgs} args - Arguments to find a Youtube_basic_summary
     * @example
     * // Get one Youtube_basic_summary
     * const youtube_basic_summary = await prisma.youtube_basic_summary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Youtube_basic_summaryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Youtube_basic_summaryFindFirstOrThrowArgs>
    ): Prisma__Youtube_basic_summaryClient<Youtube_basic_summaryGetPayload<T>>

    /**
     * Find zero or more Youtube_basic_summaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Youtube_basic_summaryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Youtube_basic_summaries
     * const youtube_basic_summaries = await prisma.youtube_basic_summary.findMany()
     * 
     * // Get first 10 Youtube_basic_summaries
     * const youtube_basic_summaries = await prisma.youtube_basic_summary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const youtube_basic_summaryWithIdOnly = await prisma.youtube_basic_summary.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Youtube_basic_summaryFindManyArgs>(
      args?: SelectSubset<T, Youtube_basic_summaryFindManyArgs>
    ): PrismaPromise<Array<Youtube_basic_summaryGetPayload<T>>>

    /**
     * Create a Youtube_basic_summary.
     * @param {Youtube_basic_summaryCreateArgs} args - Arguments to create a Youtube_basic_summary.
     * @example
     * // Create one Youtube_basic_summary
     * const Youtube_basic_summary = await prisma.youtube_basic_summary.create({
     *   data: {
     *     // ... data to create a Youtube_basic_summary
     *   }
     * })
     * 
    **/
    create<T extends Youtube_basic_summaryCreateArgs>(
      args: SelectSubset<T, Youtube_basic_summaryCreateArgs>
    ): Prisma__Youtube_basic_summaryClient<Youtube_basic_summaryGetPayload<T>>

    /**
     * Create many Youtube_basic_summaries.
     *     @param {Youtube_basic_summaryCreateManyArgs} args - Arguments to create many Youtube_basic_summaries.
     *     @example
     *     // Create many Youtube_basic_summaries
     *     const youtube_basic_summary = await prisma.youtube_basic_summary.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Youtube_basic_summaryCreateManyArgs>(
      args?: SelectSubset<T, Youtube_basic_summaryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Youtube_basic_summary.
     * @param {Youtube_basic_summaryDeleteArgs} args - Arguments to delete one Youtube_basic_summary.
     * @example
     * // Delete one Youtube_basic_summary
     * const Youtube_basic_summary = await prisma.youtube_basic_summary.delete({
     *   where: {
     *     // ... filter to delete one Youtube_basic_summary
     *   }
     * })
     * 
    **/
    delete<T extends Youtube_basic_summaryDeleteArgs>(
      args: SelectSubset<T, Youtube_basic_summaryDeleteArgs>
    ): Prisma__Youtube_basic_summaryClient<Youtube_basic_summaryGetPayload<T>>

    /**
     * Update one Youtube_basic_summary.
     * @param {Youtube_basic_summaryUpdateArgs} args - Arguments to update one Youtube_basic_summary.
     * @example
     * // Update one Youtube_basic_summary
     * const youtube_basic_summary = await prisma.youtube_basic_summary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Youtube_basic_summaryUpdateArgs>(
      args: SelectSubset<T, Youtube_basic_summaryUpdateArgs>
    ): Prisma__Youtube_basic_summaryClient<Youtube_basic_summaryGetPayload<T>>

    /**
     * Delete zero or more Youtube_basic_summaries.
     * @param {Youtube_basic_summaryDeleteManyArgs} args - Arguments to filter Youtube_basic_summaries to delete.
     * @example
     * // Delete a few Youtube_basic_summaries
     * const { count } = await prisma.youtube_basic_summary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Youtube_basic_summaryDeleteManyArgs>(
      args?: SelectSubset<T, Youtube_basic_summaryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Youtube_basic_summaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Youtube_basic_summaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Youtube_basic_summaries
     * const youtube_basic_summary = await prisma.youtube_basic_summary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Youtube_basic_summaryUpdateManyArgs>(
      args: SelectSubset<T, Youtube_basic_summaryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Youtube_basic_summary.
     * @param {Youtube_basic_summaryUpsertArgs} args - Arguments to update or create a Youtube_basic_summary.
     * @example
     * // Update or create a Youtube_basic_summary
     * const youtube_basic_summary = await prisma.youtube_basic_summary.upsert({
     *   create: {
     *     // ... data to create a Youtube_basic_summary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Youtube_basic_summary we want to update
     *   }
     * })
    **/
    upsert<T extends Youtube_basic_summaryUpsertArgs>(
      args: SelectSubset<T, Youtube_basic_summaryUpsertArgs>
    ): Prisma__Youtube_basic_summaryClient<Youtube_basic_summaryGetPayload<T>>

    /**
     * Count the number of Youtube_basic_summaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Youtube_basic_summaryCountArgs} args - Arguments to filter Youtube_basic_summaries to count.
     * @example
     * // Count the number of Youtube_basic_summaries
     * const count = await prisma.youtube_basic_summary.count({
     *   where: {
     *     // ... the filter for the Youtube_basic_summaries we want to count
     *   }
     * })
    **/
    count<T extends Youtube_basic_summaryCountArgs>(
      args?: Subset<T, Youtube_basic_summaryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Youtube_basic_summaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Youtube_basic_summary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Youtube_basic_summaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Youtube_basic_summaryAggregateArgs>(args: Subset<T, Youtube_basic_summaryAggregateArgs>): PrismaPromise<GetYoutube_basic_summaryAggregateType<T>>

    /**
     * Group by Youtube_basic_summary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Youtube_basic_summaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Youtube_basic_summaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Youtube_basic_summaryGroupByArgs['orderBy'] }
        : { orderBy?: Youtube_basic_summaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Youtube_basic_summaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYoutube_basic_summaryGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Youtube_basic_summary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Youtube_basic_summaryClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    youtube_videos<T extends Youtube_videosArgs= {}>(args?: Subset<T, Youtube_videosArgs>): Prisma__Youtube_videosClient<Youtube_videosGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Youtube_basic_summary base type for findUnique actions
   */
  export type Youtube_basic_summaryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Youtube_basic_summary
     * 
    **/
    select?: Youtube_basic_summarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_basic_summaryInclude | null
    /**
     * Filter, which Youtube_basic_summary to fetch.
     * 
    **/
    where: Youtube_basic_summaryWhereUniqueInput
  }

  /**
   * Youtube_basic_summary findUnique
   */
  export interface Youtube_basic_summaryFindUniqueArgs extends Youtube_basic_summaryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Youtube_basic_summary findUniqueOrThrow
   */
  export type Youtube_basic_summaryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Youtube_basic_summary
     * 
    **/
    select?: Youtube_basic_summarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_basic_summaryInclude | null
    /**
     * Filter, which Youtube_basic_summary to fetch.
     * 
    **/
    where: Youtube_basic_summaryWhereUniqueInput
  }


  /**
   * Youtube_basic_summary base type for findFirst actions
   */
  export type Youtube_basic_summaryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Youtube_basic_summary
     * 
    **/
    select?: Youtube_basic_summarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_basic_summaryInclude | null
    /**
     * Filter, which Youtube_basic_summary to fetch.
     * 
    **/
    where?: Youtube_basic_summaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Youtube_basic_summaries to fetch.
     * 
    **/
    orderBy?: Enumerable<Youtube_basic_summaryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Youtube_basic_summaries.
     * 
    **/
    cursor?: Youtube_basic_summaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Youtube_basic_summaries from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Youtube_basic_summaries.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Youtube_basic_summaries.
     * 
    **/
    distinct?: Enumerable<Youtube_basic_summaryScalarFieldEnum>
  }

  /**
   * Youtube_basic_summary findFirst
   */
  export interface Youtube_basic_summaryFindFirstArgs extends Youtube_basic_summaryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Youtube_basic_summary findFirstOrThrow
   */
  export type Youtube_basic_summaryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Youtube_basic_summary
     * 
    **/
    select?: Youtube_basic_summarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_basic_summaryInclude | null
    /**
     * Filter, which Youtube_basic_summary to fetch.
     * 
    **/
    where?: Youtube_basic_summaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Youtube_basic_summaries to fetch.
     * 
    **/
    orderBy?: Enumerable<Youtube_basic_summaryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Youtube_basic_summaries.
     * 
    **/
    cursor?: Youtube_basic_summaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Youtube_basic_summaries from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Youtube_basic_summaries.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Youtube_basic_summaries.
     * 
    **/
    distinct?: Enumerable<Youtube_basic_summaryScalarFieldEnum>
  }


  /**
   * Youtube_basic_summary findMany
   */
  export type Youtube_basic_summaryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Youtube_basic_summary
     * 
    **/
    select?: Youtube_basic_summarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_basic_summaryInclude | null
    /**
     * Filter, which Youtube_basic_summaries to fetch.
     * 
    **/
    where?: Youtube_basic_summaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Youtube_basic_summaries to fetch.
     * 
    **/
    orderBy?: Enumerable<Youtube_basic_summaryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Youtube_basic_summaries.
     * 
    **/
    cursor?: Youtube_basic_summaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Youtube_basic_summaries from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Youtube_basic_summaries.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Youtube_basic_summaryScalarFieldEnum>
  }


  /**
   * Youtube_basic_summary create
   */
  export type Youtube_basic_summaryCreateArgs = {
    /**
     * Select specific fields to fetch from the Youtube_basic_summary
     * 
    **/
    select?: Youtube_basic_summarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_basic_summaryInclude | null
    /**
     * The data needed to create a Youtube_basic_summary.
     * 
    **/
    data: XOR<Youtube_basic_summaryCreateInput, Youtube_basic_summaryUncheckedCreateInput>
  }


  /**
   * Youtube_basic_summary createMany
   */
  export type Youtube_basic_summaryCreateManyArgs = {
    /**
     * The data used to create many Youtube_basic_summaries.
     * 
    **/
    data: Enumerable<Youtube_basic_summaryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Youtube_basic_summary update
   */
  export type Youtube_basic_summaryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Youtube_basic_summary
     * 
    **/
    select?: Youtube_basic_summarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_basic_summaryInclude | null
    /**
     * The data needed to update a Youtube_basic_summary.
     * 
    **/
    data: XOR<Youtube_basic_summaryUpdateInput, Youtube_basic_summaryUncheckedUpdateInput>
    /**
     * Choose, which Youtube_basic_summary to update.
     * 
    **/
    where: Youtube_basic_summaryWhereUniqueInput
  }


  /**
   * Youtube_basic_summary updateMany
   */
  export type Youtube_basic_summaryUpdateManyArgs = {
    /**
     * The data used to update Youtube_basic_summaries.
     * 
    **/
    data: XOR<Youtube_basic_summaryUpdateManyMutationInput, Youtube_basic_summaryUncheckedUpdateManyInput>
    /**
     * Filter which Youtube_basic_summaries to update
     * 
    **/
    where?: Youtube_basic_summaryWhereInput
  }


  /**
   * Youtube_basic_summary upsert
   */
  export type Youtube_basic_summaryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Youtube_basic_summary
     * 
    **/
    select?: Youtube_basic_summarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_basic_summaryInclude | null
    /**
     * The filter to search for the Youtube_basic_summary to update in case it exists.
     * 
    **/
    where: Youtube_basic_summaryWhereUniqueInput
    /**
     * In case the Youtube_basic_summary found by the `where` argument doesn't exist, create a new Youtube_basic_summary with this data.
     * 
    **/
    create: XOR<Youtube_basic_summaryCreateInput, Youtube_basic_summaryUncheckedCreateInput>
    /**
     * In case the Youtube_basic_summary was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Youtube_basic_summaryUpdateInput, Youtube_basic_summaryUncheckedUpdateInput>
  }


  /**
   * Youtube_basic_summary delete
   */
  export type Youtube_basic_summaryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Youtube_basic_summary
     * 
    **/
    select?: Youtube_basic_summarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_basic_summaryInclude | null
    /**
     * Filter which Youtube_basic_summary to delete.
     * 
    **/
    where: Youtube_basic_summaryWhereUniqueInput
  }


  /**
   * Youtube_basic_summary deleteMany
   */
  export type Youtube_basic_summaryDeleteManyArgs = {
    /**
     * Filter which Youtube_basic_summaries to delete
     * 
    **/
    where?: Youtube_basic_summaryWhereInput
  }


  /**
   * Youtube_basic_summary without action
   */
  export type Youtube_basic_summaryArgs = {
    /**
     * Select specific fields to fetch from the Youtube_basic_summary
     * 
    **/
    select?: Youtube_basic_summarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_basic_summaryInclude | null
  }



  /**
   * Model Youtube_llm_outputs
   */


  export type AggregateYoutube_llm_outputs = {
    _count: Youtube_llm_outputsCountAggregateOutputType | null
    _min: Youtube_llm_outputsMinAggregateOutputType | null
    _max: Youtube_llm_outputsMaxAggregateOutputType | null
  }

  export type Youtube_llm_outputsMinAggregateOutputType = {
    id: string | null
    youtube_id: string | null
    created_at: Date | null
    llm_prompt_type: string | null
    output: string | null
  }

  export type Youtube_llm_outputsMaxAggregateOutputType = {
    id: string | null
    youtube_id: string | null
    created_at: Date | null
    llm_prompt_type: string | null
    output: string | null
  }

  export type Youtube_llm_outputsCountAggregateOutputType = {
    id: number
    youtube_id: number
    created_at: number
    llm_prompt_type: number
    output: number
    _all: number
  }


  export type Youtube_llm_outputsMinAggregateInputType = {
    id?: true
    youtube_id?: true
    created_at?: true
    llm_prompt_type?: true
    output?: true
  }

  export type Youtube_llm_outputsMaxAggregateInputType = {
    id?: true
    youtube_id?: true
    created_at?: true
    llm_prompt_type?: true
    output?: true
  }

  export type Youtube_llm_outputsCountAggregateInputType = {
    id?: true
    youtube_id?: true
    created_at?: true
    llm_prompt_type?: true
    output?: true
    _all?: true
  }

  export type Youtube_llm_outputsAggregateArgs = {
    /**
     * Filter which Youtube_llm_outputs to aggregate.
     * 
    **/
    where?: Youtube_llm_outputsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Youtube_llm_outputs to fetch.
     * 
    **/
    orderBy?: Enumerable<Youtube_llm_outputsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Youtube_llm_outputsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Youtube_llm_outputs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Youtube_llm_outputs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Youtube_llm_outputs
    **/
    _count?: true | Youtube_llm_outputsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Youtube_llm_outputsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Youtube_llm_outputsMaxAggregateInputType
  }

  export type GetYoutube_llm_outputsAggregateType<T extends Youtube_llm_outputsAggregateArgs> = {
        [P in keyof T & keyof AggregateYoutube_llm_outputs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYoutube_llm_outputs[P]>
      : GetScalarType<T[P], AggregateYoutube_llm_outputs[P]>
  }




  export type Youtube_llm_outputsGroupByArgs = {
    where?: Youtube_llm_outputsWhereInput
    orderBy?: Enumerable<Youtube_llm_outputsOrderByWithAggregationInput>
    by: Array<Youtube_llm_outputsScalarFieldEnum>
    having?: Youtube_llm_outputsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Youtube_llm_outputsCountAggregateInputType | true
    _min?: Youtube_llm_outputsMinAggregateInputType
    _max?: Youtube_llm_outputsMaxAggregateInputType
  }


  export type Youtube_llm_outputsGroupByOutputType = {
    id: string
    youtube_id: string | null
    created_at: Date | null
    llm_prompt_type: string | null
    output: string | null
    _count: Youtube_llm_outputsCountAggregateOutputType | null
    _min: Youtube_llm_outputsMinAggregateOutputType | null
    _max: Youtube_llm_outputsMaxAggregateOutputType | null
  }

  type GetYoutube_llm_outputsGroupByPayload<T extends Youtube_llm_outputsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Youtube_llm_outputsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Youtube_llm_outputsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Youtube_llm_outputsGroupByOutputType[P]>
            : GetScalarType<T[P], Youtube_llm_outputsGroupByOutputType[P]>
        }
      >
    >


  export type Youtube_llm_outputsSelect = {
    id?: boolean
    youtube_id?: boolean
    created_at?: boolean
    llm_prompt_type?: boolean
    output?: boolean
    youtube_videos?: boolean | Youtube_videosArgs
  }


  export type Youtube_llm_outputsInclude = {
    youtube_videos?: boolean | Youtube_videosArgs
  } 

  export type Youtube_llm_outputsGetPayload<S extends boolean | null | undefined | Youtube_llm_outputsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Youtube_llm_outputs :
    S extends undefined ? never :
    S extends { include: any } & (Youtube_llm_outputsArgs | Youtube_llm_outputsFindManyArgs)
    ? Youtube_llm_outputs  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'youtube_videos' ? Youtube_videosGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (Youtube_llm_outputsArgs | Youtube_llm_outputsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'youtube_videos' ? Youtube_videosGetPayload<S['select'][P]> | null :  P extends keyof Youtube_llm_outputs ? Youtube_llm_outputs[P] : never
  } 
      : Youtube_llm_outputs


  type Youtube_llm_outputsCountArgs = Merge<
    Omit<Youtube_llm_outputsFindManyArgs, 'select' | 'include'> & {
      select?: Youtube_llm_outputsCountAggregateInputType | true
    }
  >

  export interface Youtube_llm_outputsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Youtube_llm_outputs that matches the filter.
     * @param {Youtube_llm_outputsFindUniqueArgs} args - Arguments to find a Youtube_llm_outputs
     * @example
     * // Get one Youtube_llm_outputs
     * const youtube_llm_outputs = await prisma.youtube_llm_outputs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Youtube_llm_outputsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Youtube_llm_outputsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Youtube_llm_outputs'> extends True ? Prisma__Youtube_llm_outputsClient<Youtube_llm_outputsGetPayload<T>> : Prisma__Youtube_llm_outputsClient<Youtube_llm_outputsGetPayload<T> | null, null>

    /**
     * Find one Youtube_llm_outputs that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Youtube_llm_outputsFindUniqueOrThrowArgs} args - Arguments to find a Youtube_llm_outputs
     * @example
     * // Get one Youtube_llm_outputs
     * const youtube_llm_outputs = await prisma.youtube_llm_outputs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Youtube_llm_outputsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Youtube_llm_outputsFindUniqueOrThrowArgs>
    ): Prisma__Youtube_llm_outputsClient<Youtube_llm_outputsGetPayload<T>>

    /**
     * Find the first Youtube_llm_outputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Youtube_llm_outputsFindFirstArgs} args - Arguments to find a Youtube_llm_outputs
     * @example
     * // Get one Youtube_llm_outputs
     * const youtube_llm_outputs = await prisma.youtube_llm_outputs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Youtube_llm_outputsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Youtube_llm_outputsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Youtube_llm_outputs'> extends True ? Prisma__Youtube_llm_outputsClient<Youtube_llm_outputsGetPayload<T>> : Prisma__Youtube_llm_outputsClient<Youtube_llm_outputsGetPayload<T> | null, null>

    /**
     * Find the first Youtube_llm_outputs that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Youtube_llm_outputsFindFirstOrThrowArgs} args - Arguments to find a Youtube_llm_outputs
     * @example
     * // Get one Youtube_llm_outputs
     * const youtube_llm_outputs = await prisma.youtube_llm_outputs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Youtube_llm_outputsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Youtube_llm_outputsFindFirstOrThrowArgs>
    ): Prisma__Youtube_llm_outputsClient<Youtube_llm_outputsGetPayload<T>>

    /**
     * Find zero or more Youtube_llm_outputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Youtube_llm_outputsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Youtube_llm_outputs
     * const youtube_llm_outputs = await prisma.youtube_llm_outputs.findMany()
     * 
     * // Get first 10 Youtube_llm_outputs
     * const youtube_llm_outputs = await prisma.youtube_llm_outputs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const youtube_llm_outputsWithIdOnly = await prisma.youtube_llm_outputs.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Youtube_llm_outputsFindManyArgs>(
      args?: SelectSubset<T, Youtube_llm_outputsFindManyArgs>
    ): PrismaPromise<Array<Youtube_llm_outputsGetPayload<T>>>

    /**
     * Create a Youtube_llm_outputs.
     * @param {Youtube_llm_outputsCreateArgs} args - Arguments to create a Youtube_llm_outputs.
     * @example
     * // Create one Youtube_llm_outputs
     * const Youtube_llm_outputs = await prisma.youtube_llm_outputs.create({
     *   data: {
     *     // ... data to create a Youtube_llm_outputs
     *   }
     * })
     * 
    **/
    create<T extends Youtube_llm_outputsCreateArgs>(
      args: SelectSubset<T, Youtube_llm_outputsCreateArgs>
    ): Prisma__Youtube_llm_outputsClient<Youtube_llm_outputsGetPayload<T>>

    /**
     * Create many Youtube_llm_outputs.
     *     @param {Youtube_llm_outputsCreateManyArgs} args - Arguments to create many Youtube_llm_outputs.
     *     @example
     *     // Create many Youtube_llm_outputs
     *     const youtube_llm_outputs = await prisma.youtube_llm_outputs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Youtube_llm_outputsCreateManyArgs>(
      args?: SelectSubset<T, Youtube_llm_outputsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Youtube_llm_outputs.
     * @param {Youtube_llm_outputsDeleteArgs} args - Arguments to delete one Youtube_llm_outputs.
     * @example
     * // Delete one Youtube_llm_outputs
     * const Youtube_llm_outputs = await prisma.youtube_llm_outputs.delete({
     *   where: {
     *     // ... filter to delete one Youtube_llm_outputs
     *   }
     * })
     * 
    **/
    delete<T extends Youtube_llm_outputsDeleteArgs>(
      args: SelectSubset<T, Youtube_llm_outputsDeleteArgs>
    ): Prisma__Youtube_llm_outputsClient<Youtube_llm_outputsGetPayload<T>>

    /**
     * Update one Youtube_llm_outputs.
     * @param {Youtube_llm_outputsUpdateArgs} args - Arguments to update one Youtube_llm_outputs.
     * @example
     * // Update one Youtube_llm_outputs
     * const youtube_llm_outputs = await prisma.youtube_llm_outputs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Youtube_llm_outputsUpdateArgs>(
      args: SelectSubset<T, Youtube_llm_outputsUpdateArgs>
    ): Prisma__Youtube_llm_outputsClient<Youtube_llm_outputsGetPayload<T>>

    /**
     * Delete zero or more Youtube_llm_outputs.
     * @param {Youtube_llm_outputsDeleteManyArgs} args - Arguments to filter Youtube_llm_outputs to delete.
     * @example
     * // Delete a few Youtube_llm_outputs
     * const { count } = await prisma.youtube_llm_outputs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Youtube_llm_outputsDeleteManyArgs>(
      args?: SelectSubset<T, Youtube_llm_outputsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Youtube_llm_outputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Youtube_llm_outputsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Youtube_llm_outputs
     * const youtube_llm_outputs = await prisma.youtube_llm_outputs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Youtube_llm_outputsUpdateManyArgs>(
      args: SelectSubset<T, Youtube_llm_outputsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Youtube_llm_outputs.
     * @param {Youtube_llm_outputsUpsertArgs} args - Arguments to update or create a Youtube_llm_outputs.
     * @example
     * // Update or create a Youtube_llm_outputs
     * const youtube_llm_outputs = await prisma.youtube_llm_outputs.upsert({
     *   create: {
     *     // ... data to create a Youtube_llm_outputs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Youtube_llm_outputs we want to update
     *   }
     * })
    **/
    upsert<T extends Youtube_llm_outputsUpsertArgs>(
      args: SelectSubset<T, Youtube_llm_outputsUpsertArgs>
    ): Prisma__Youtube_llm_outputsClient<Youtube_llm_outputsGetPayload<T>>

    /**
     * Count the number of Youtube_llm_outputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Youtube_llm_outputsCountArgs} args - Arguments to filter Youtube_llm_outputs to count.
     * @example
     * // Count the number of Youtube_llm_outputs
     * const count = await prisma.youtube_llm_outputs.count({
     *   where: {
     *     // ... the filter for the Youtube_llm_outputs we want to count
     *   }
     * })
    **/
    count<T extends Youtube_llm_outputsCountArgs>(
      args?: Subset<T, Youtube_llm_outputsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Youtube_llm_outputsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Youtube_llm_outputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Youtube_llm_outputsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Youtube_llm_outputsAggregateArgs>(args: Subset<T, Youtube_llm_outputsAggregateArgs>): PrismaPromise<GetYoutube_llm_outputsAggregateType<T>>

    /**
     * Group by Youtube_llm_outputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Youtube_llm_outputsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Youtube_llm_outputsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Youtube_llm_outputsGroupByArgs['orderBy'] }
        : { orderBy?: Youtube_llm_outputsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Youtube_llm_outputsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYoutube_llm_outputsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Youtube_llm_outputs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Youtube_llm_outputsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    youtube_videos<T extends Youtube_videosArgs= {}>(args?: Subset<T, Youtube_videosArgs>): Prisma__Youtube_videosClient<Youtube_videosGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Youtube_llm_outputs base type for findUnique actions
   */
  export type Youtube_llm_outputsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Youtube_llm_outputs
     * 
    **/
    select?: Youtube_llm_outputsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_llm_outputsInclude | null
    /**
     * Filter, which Youtube_llm_outputs to fetch.
     * 
    **/
    where: Youtube_llm_outputsWhereUniqueInput
  }

  /**
   * Youtube_llm_outputs findUnique
   */
  export interface Youtube_llm_outputsFindUniqueArgs extends Youtube_llm_outputsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Youtube_llm_outputs findUniqueOrThrow
   */
  export type Youtube_llm_outputsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Youtube_llm_outputs
     * 
    **/
    select?: Youtube_llm_outputsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_llm_outputsInclude | null
    /**
     * Filter, which Youtube_llm_outputs to fetch.
     * 
    **/
    where: Youtube_llm_outputsWhereUniqueInput
  }


  /**
   * Youtube_llm_outputs base type for findFirst actions
   */
  export type Youtube_llm_outputsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Youtube_llm_outputs
     * 
    **/
    select?: Youtube_llm_outputsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_llm_outputsInclude | null
    /**
     * Filter, which Youtube_llm_outputs to fetch.
     * 
    **/
    where?: Youtube_llm_outputsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Youtube_llm_outputs to fetch.
     * 
    **/
    orderBy?: Enumerable<Youtube_llm_outputsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Youtube_llm_outputs.
     * 
    **/
    cursor?: Youtube_llm_outputsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Youtube_llm_outputs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Youtube_llm_outputs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Youtube_llm_outputs.
     * 
    **/
    distinct?: Enumerable<Youtube_llm_outputsScalarFieldEnum>
  }

  /**
   * Youtube_llm_outputs findFirst
   */
  export interface Youtube_llm_outputsFindFirstArgs extends Youtube_llm_outputsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Youtube_llm_outputs findFirstOrThrow
   */
  export type Youtube_llm_outputsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Youtube_llm_outputs
     * 
    **/
    select?: Youtube_llm_outputsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_llm_outputsInclude | null
    /**
     * Filter, which Youtube_llm_outputs to fetch.
     * 
    **/
    where?: Youtube_llm_outputsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Youtube_llm_outputs to fetch.
     * 
    **/
    orderBy?: Enumerable<Youtube_llm_outputsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Youtube_llm_outputs.
     * 
    **/
    cursor?: Youtube_llm_outputsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Youtube_llm_outputs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Youtube_llm_outputs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Youtube_llm_outputs.
     * 
    **/
    distinct?: Enumerable<Youtube_llm_outputsScalarFieldEnum>
  }


  /**
   * Youtube_llm_outputs findMany
   */
  export type Youtube_llm_outputsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Youtube_llm_outputs
     * 
    **/
    select?: Youtube_llm_outputsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_llm_outputsInclude | null
    /**
     * Filter, which Youtube_llm_outputs to fetch.
     * 
    **/
    where?: Youtube_llm_outputsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Youtube_llm_outputs to fetch.
     * 
    **/
    orderBy?: Enumerable<Youtube_llm_outputsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Youtube_llm_outputs.
     * 
    **/
    cursor?: Youtube_llm_outputsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Youtube_llm_outputs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Youtube_llm_outputs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Youtube_llm_outputsScalarFieldEnum>
  }


  /**
   * Youtube_llm_outputs create
   */
  export type Youtube_llm_outputsCreateArgs = {
    /**
     * Select specific fields to fetch from the Youtube_llm_outputs
     * 
    **/
    select?: Youtube_llm_outputsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_llm_outputsInclude | null
    /**
     * The data needed to create a Youtube_llm_outputs.
     * 
    **/
    data: XOR<Youtube_llm_outputsCreateInput, Youtube_llm_outputsUncheckedCreateInput>
  }


  /**
   * Youtube_llm_outputs createMany
   */
  export type Youtube_llm_outputsCreateManyArgs = {
    /**
     * The data used to create many Youtube_llm_outputs.
     * 
    **/
    data: Enumerable<Youtube_llm_outputsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Youtube_llm_outputs update
   */
  export type Youtube_llm_outputsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Youtube_llm_outputs
     * 
    **/
    select?: Youtube_llm_outputsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_llm_outputsInclude | null
    /**
     * The data needed to update a Youtube_llm_outputs.
     * 
    **/
    data: XOR<Youtube_llm_outputsUpdateInput, Youtube_llm_outputsUncheckedUpdateInput>
    /**
     * Choose, which Youtube_llm_outputs to update.
     * 
    **/
    where: Youtube_llm_outputsWhereUniqueInput
  }


  /**
   * Youtube_llm_outputs updateMany
   */
  export type Youtube_llm_outputsUpdateManyArgs = {
    /**
     * The data used to update Youtube_llm_outputs.
     * 
    **/
    data: XOR<Youtube_llm_outputsUpdateManyMutationInput, Youtube_llm_outputsUncheckedUpdateManyInput>
    /**
     * Filter which Youtube_llm_outputs to update
     * 
    **/
    where?: Youtube_llm_outputsWhereInput
  }


  /**
   * Youtube_llm_outputs upsert
   */
  export type Youtube_llm_outputsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Youtube_llm_outputs
     * 
    **/
    select?: Youtube_llm_outputsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_llm_outputsInclude | null
    /**
     * The filter to search for the Youtube_llm_outputs to update in case it exists.
     * 
    **/
    where: Youtube_llm_outputsWhereUniqueInput
    /**
     * In case the Youtube_llm_outputs found by the `where` argument doesn't exist, create a new Youtube_llm_outputs with this data.
     * 
    **/
    create: XOR<Youtube_llm_outputsCreateInput, Youtube_llm_outputsUncheckedCreateInput>
    /**
     * In case the Youtube_llm_outputs was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Youtube_llm_outputsUpdateInput, Youtube_llm_outputsUncheckedUpdateInput>
  }


  /**
   * Youtube_llm_outputs delete
   */
  export type Youtube_llm_outputsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Youtube_llm_outputs
     * 
    **/
    select?: Youtube_llm_outputsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_llm_outputsInclude | null
    /**
     * Filter which Youtube_llm_outputs to delete.
     * 
    **/
    where: Youtube_llm_outputsWhereUniqueInput
  }


  /**
   * Youtube_llm_outputs deleteMany
   */
  export type Youtube_llm_outputsDeleteManyArgs = {
    /**
     * Filter which Youtube_llm_outputs to delete
     * 
    **/
    where?: Youtube_llm_outputsWhereInput
  }


  /**
   * Youtube_llm_outputs without action
   */
  export type Youtube_llm_outputsArgs = {
    /**
     * Select specific fields to fetch from the Youtube_llm_outputs
     * 
    **/
    select?: Youtube_llm_outputsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_llm_outputsInclude | null
  }



  /**
   * Model Youtube_videos
   */


  export type AggregateYoutube_videos = {
    _count: Youtube_videosCountAggregateOutputType | null
    _avg: Youtube_videosAvgAggregateOutputType | null
    _sum: Youtube_videosSumAggregateOutputType | null
    _min: Youtube_videosMinAggregateOutputType | null
    _max: Youtube_videosMaxAggregateOutputType | null
  }

  export type Youtube_videosAvgAggregateOutputType = {
    height: number | null
    width: number | null
    thumbnail_height: number | null
    thumbnail_width: number | null
    score: number | null
  }

  export type Youtube_videosSumAggregateOutputType = {
    height: number | null
    width: number | null
    thumbnail_height: number | null
    thumbnail_width: number | null
    score: number | null
  }

  export type Youtube_videosMinAggregateOutputType = {
    id: string | null
    transcript: string | null
    created_at: Date | null
    updated_at: Date | null
    title: string | null
    author_name: string | null
    author_url: string | null
    type: string | null
    height: number | null
    width: number | null
    version: string | null
    provider_name: string | null
    provider_url: string | null
    thumbnail_height: number | null
    thumbnail_width: number | null
    thumbnail_url: string | null
    html: string | null
    score: number | null
    error: string | null
  }

  export type Youtube_videosMaxAggregateOutputType = {
    id: string | null
    transcript: string | null
    created_at: Date | null
    updated_at: Date | null
    title: string | null
    author_name: string | null
    author_url: string | null
    type: string | null
    height: number | null
    width: number | null
    version: string | null
    provider_name: string | null
    provider_url: string | null
    thumbnail_height: number | null
    thumbnail_width: number | null
    thumbnail_url: string | null
    html: string | null
    score: number | null
    error: string | null
  }

  export type Youtube_videosCountAggregateOutputType = {
    id: number
    transcript: number
    created_at: number
    updated_at: number
    title: number
    author_name: number
    author_url: number
    type: number
    height: number
    width: number
    version: number
    provider_name: number
    provider_url: number
    thumbnail_height: number
    thumbnail_width: number
    thumbnail_url: number
    html: number
    score: number
    error: number
    _all: number
  }


  export type Youtube_videosAvgAggregateInputType = {
    height?: true
    width?: true
    thumbnail_height?: true
    thumbnail_width?: true
    score?: true
  }

  export type Youtube_videosSumAggregateInputType = {
    height?: true
    width?: true
    thumbnail_height?: true
    thumbnail_width?: true
    score?: true
  }

  export type Youtube_videosMinAggregateInputType = {
    id?: true
    transcript?: true
    created_at?: true
    updated_at?: true
    title?: true
    author_name?: true
    author_url?: true
    type?: true
    height?: true
    width?: true
    version?: true
    provider_name?: true
    provider_url?: true
    thumbnail_height?: true
    thumbnail_width?: true
    thumbnail_url?: true
    html?: true
    score?: true
    error?: true
  }

  export type Youtube_videosMaxAggregateInputType = {
    id?: true
    transcript?: true
    created_at?: true
    updated_at?: true
    title?: true
    author_name?: true
    author_url?: true
    type?: true
    height?: true
    width?: true
    version?: true
    provider_name?: true
    provider_url?: true
    thumbnail_height?: true
    thumbnail_width?: true
    thumbnail_url?: true
    html?: true
    score?: true
    error?: true
  }

  export type Youtube_videosCountAggregateInputType = {
    id?: true
    transcript?: true
    created_at?: true
    updated_at?: true
    title?: true
    author_name?: true
    author_url?: true
    type?: true
    height?: true
    width?: true
    version?: true
    provider_name?: true
    provider_url?: true
    thumbnail_height?: true
    thumbnail_width?: true
    thumbnail_url?: true
    html?: true
    score?: true
    error?: true
    _all?: true
  }

  export type Youtube_videosAggregateArgs = {
    /**
     * Filter which Youtube_videos to aggregate.
     * 
    **/
    where?: Youtube_videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Youtube_videos to fetch.
     * 
    **/
    orderBy?: Enumerable<Youtube_videosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Youtube_videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Youtube_videos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Youtube_videos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Youtube_videos
    **/
    _count?: true | Youtube_videosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Youtube_videosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Youtube_videosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Youtube_videosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Youtube_videosMaxAggregateInputType
  }

  export type GetYoutube_videosAggregateType<T extends Youtube_videosAggregateArgs> = {
        [P in keyof T & keyof AggregateYoutube_videos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYoutube_videos[P]>
      : GetScalarType<T[P], AggregateYoutube_videos[P]>
  }




  export type Youtube_videosGroupByArgs = {
    where?: Youtube_videosWhereInput
    orderBy?: Enumerable<Youtube_videosOrderByWithAggregationInput>
    by: Array<Youtube_videosScalarFieldEnum>
    having?: Youtube_videosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Youtube_videosCountAggregateInputType | true
    _avg?: Youtube_videosAvgAggregateInputType
    _sum?: Youtube_videosSumAggregateInputType
    _min?: Youtube_videosMinAggregateInputType
    _max?: Youtube_videosMaxAggregateInputType
  }


  export type Youtube_videosGroupByOutputType = {
    id: string
    transcript: string | null
    created_at: Date | null
    updated_at: Date | null
    title: string | null
    author_name: string | null
    author_url: string | null
    type: string | null
    height: number | null
    width: number | null
    version: string | null
    provider_name: string | null
    provider_url: string | null
    thumbnail_height: number | null
    thumbnail_width: number | null
    thumbnail_url: string | null
    html: string | null
    score: number | null
    error: string | null
    _count: Youtube_videosCountAggregateOutputType | null
    _avg: Youtube_videosAvgAggregateOutputType | null
    _sum: Youtube_videosSumAggregateOutputType | null
    _min: Youtube_videosMinAggregateOutputType | null
    _max: Youtube_videosMaxAggregateOutputType | null
  }

  type GetYoutube_videosGroupByPayload<T extends Youtube_videosGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Youtube_videosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Youtube_videosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Youtube_videosGroupByOutputType[P]>
            : GetScalarType<T[P], Youtube_videosGroupByOutputType[P]>
        }
      >
    >


  export type Youtube_videosSelect = {
    id?: boolean
    transcript?: boolean
    created_at?: boolean
    updated_at?: boolean
    title?: boolean
    author_name?: boolean
    author_url?: boolean
    type?: boolean
    height?: boolean
    width?: boolean
    version?: boolean
    provider_name?: boolean
    provider_url?: boolean
    thumbnail_height?: boolean
    thumbnail_width?: boolean
    thumbnail_url?: boolean
    html?: boolean
    score?: boolean
    error?: boolean
    youtube_basic_summary?: boolean | Youtube_videos$youtube_basic_summaryArgs
    youtube_llm_outputs?: boolean | Youtube_videos$youtube_llm_outputsArgs
    _count?: boolean | Youtube_videosCountOutputTypeArgs
  }


  export type Youtube_videosInclude = {
    youtube_basic_summary?: boolean | Youtube_videos$youtube_basic_summaryArgs
    youtube_llm_outputs?: boolean | Youtube_videos$youtube_llm_outputsArgs
    _count?: boolean | Youtube_videosCountOutputTypeArgs
  } 

  export type Youtube_videosGetPayload<S extends boolean | null | undefined | Youtube_videosArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Youtube_videos :
    S extends undefined ? never :
    S extends { include: any } & (Youtube_videosArgs | Youtube_videosFindManyArgs)
    ? Youtube_videos  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'youtube_basic_summary' ? Array < Youtube_basic_summaryGetPayload<S['include'][P]>>  :
        P extends 'youtube_llm_outputs' ? Array < Youtube_llm_outputsGetPayload<S['include'][P]>>  :
        P extends '_count' ? Youtube_videosCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (Youtube_videosArgs | Youtube_videosFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'youtube_basic_summary' ? Array < Youtube_basic_summaryGetPayload<S['select'][P]>>  :
        P extends 'youtube_llm_outputs' ? Array < Youtube_llm_outputsGetPayload<S['select'][P]>>  :
        P extends '_count' ? Youtube_videosCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Youtube_videos ? Youtube_videos[P] : never
  } 
      : Youtube_videos


  type Youtube_videosCountArgs = Merge<
    Omit<Youtube_videosFindManyArgs, 'select' | 'include'> & {
      select?: Youtube_videosCountAggregateInputType | true
    }
  >

  export interface Youtube_videosDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Youtube_videos that matches the filter.
     * @param {Youtube_videosFindUniqueArgs} args - Arguments to find a Youtube_videos
     * @example
     * // Get one Youtube_videos
     * const youtube_videos = await prisma.youtube_videos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Youtube_videosFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Youtube_videosFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Youtube_videos'> extends True ? Prisma__Youtube_videosClient<Youtube_videosGetPayload<T>> : Prisma__Youtube_videosClient<Youtube_videosGetPayload<T> | null, null>

    /**
     * Find one Youtube_videos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Youtube_videosFindUniqueOrThrowArgs} args - Arguments to find a Youtube_videos
     * @example
     * // Get one Youtube_videos
     * const youtube_videos = await prisma.youtube_videos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Youtube_videosFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Youtube_videosFindUniqueOrThrowArgs>
    ): Prisma__Youtube_videosClient<Youtube_videosGetPayload<T>>

    /**
     * Find the first Youtube_videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Youtube_videosFindFirstArgs} args - Arguments to find a Youtube_videos
     * @example
     * // Get one Youtube_videos
     * const youtube_videos = await prisma.youtube_videos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Youtube_videosFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Youtube_videosFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Youtube_videos'> extends True ? Prisma__Youtube_videosClient<Youtube_videosGetPayload<T>> : Prisma__Youtube_videosClient<Youtube_videosGetPayload<T> | null, null>

    /**
     * Find the first Youtube_videos that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Youtube_videosFindFirstOrThrowArgs} args - Arguments to find a Youtube_videos
     * @example
     * // Get one Youtube_videos
     * const youtube_videos = await prisma.youtube_videos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Youtube_videosFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Youtube_videosFindFirstOrThrowArgs>
    ): Prisma__Youtube_videosClient<Youtube_videosGetPayload<T>>

    /**
     * Find zero or more Youtube_videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Youtube_videosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Youtube_videos
     * const youtube_videos = await prisma.youtube_videos.findMany()
     * 
     * // Get first 10 Youtube_videos
     * const youtube_videos = await prisma.youtube_videos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const youtube_videosWithIdOnly = await prisma.youtube_videos.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Youtube_videosFindManyArgs>(
      args?: SelectSubset<T, Youtube_videosFindManyArgs>
    ): PrismaPromise<Array<Youtube_videosGetPayload<T>>>

    /**
     * Create a Youtube_videos.
     * @param {Youtube_videosCreateArgs} args - Arguments to create a Youtube_videos.
     * @example
     * // Create one Youtube_videos
     * const Youtube_videos = await prisma.youtube_videos.create({
     *   data: {
     *     // ... data to create a Youtube_videos
     *   }
     * })
     * 
    **/
    create<T extends Youtube_videosCreateArgs>(
      args: SelectSubset<T, Youtube_videosCreateArgs>
    ): Prisma__Youtube_videosClient<Youtube_videosGetPayload<T>>

    /**
     * Create many Youtube_videos.
     *     @param {Youtube_videosCreateManyArgs} args - Arguments to create many Youtube_videos.
     *     @example
     *     // Create many Youtube_videos
     *     const youtube_videos = await prisma.youtube_videos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Youtube_videosCreateManyArgs>(
      args?: SelectSubset<T, Youtube_videosCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Youtube_videos.
     * @param {Youtube_videosDeleteArgs} args - Arguments to delete one Youtube_videos.
     * @example
     * // Delete one Youtube_videos
     * const Youtube_videos = await prisma.youtube_videos.delete({
     *   where: {
     *     // ... filter to delete one Youtube_videos
     *   }
     * })
     * 
    **/
    delete<T extends Youtube_videosDeleteArgs>(
      args: SelectSubset<T, Youtube_videosDeleteArgs>
    ): Prisma__Youtube_videosClient<Youtube_videosGetPayload<T>>

    /**
     * Update one Youtube_videos.
     * @param {Youtube_videosUpdateArgs} args - Arguments to update one Youtube_videos.
     * @example
     * // Update one Youtube_videos
     * const youtube_videos = await prisma.youtube_videos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Youtube_videosUpdateArgs>(
      args: SelectSubset<T, Youtube_videosUpdateArgs>
    ): Prisma__Youtube_videosClient<Youtube_videosGetPayload<T>>

    /**
     * Delete zero or more Youtube_videos.
     * @param {Youtube_videosDeleteManyArgs} args - Arguments to filter Youtube_videos to delete.
     * @example
     * // Delete a few Youtube_videos
     * const { count } = await prisma.youtube_videos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Youtube_videosDeleteManyArgs>(
      args?: SelectSubset<T, Youtube_videosDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Youtube_videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Youtube_videosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Youtube_videos
     * const youtube_videos = await prisma.youtube_videos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Youtube_videosUpdateManyArgs>(
      args: SelectSubset<T, Youtube_videosUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Youtube_videos.
     * @param {Youtube_videosUpsertArgs} args - Arguments to update or create a Youtube_videos.
     * @example
     * // Update or create a Youtube_videos
     * const youtube_videos = await prisma.youtube_videos.upsert({
     *   create: {
     *     // ... data to create a Youtube_videos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Youtube_videos we want to update
     *   }
     * })
    **/
    upsert<T extends Youtube_videosUpsertArgs>(
      args: SelectSubset<T, Youtube_videosUpsertArgs>
    ): Prisma__Youtube_videosClient<Youtube_videosGetPayload<T>>

    /**
     * Count the number of Youtube_videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Youtube_videosCountArgs} args - Arguments to filter Youtube_videos to count.
     * @example
     * // Count the number of Youtube_videos
     * const count = await prisma.youtube_videos.count({
     *   where: {
     *     // ... the filter for the Youtube_videos we want to count
     *   }
     * })
    **/
    count<T extends Youtube_videosCountArgs>(
      args?: Subset<T, Youtube_videosCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Youtube_videosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Youtube_videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Youtube_videosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Youtube_videosAggregateArgs>(args: Subset<T, Youtube_videosAggregateArgs>): PrismaPromise<GetYoutube_videosAggregateType<T>>

    /**
     * Group by Youtube_videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Youtube_videosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Youtube_videosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Youtube_videosGroupByArgs['orderBy'] }
        : { orderBy?: Youtube_videosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Youtube_videosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYoutube_videosGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Youtube_videos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Youtube_videosClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    youtube_basic_summary<T extends Youtube_videos$youtube_basic_summaryArgs= {}>(args?: Subset<T, Youtube_videos$youtube_basic_summaryArgs>): PrismaPromise<Array<Youtube_basic_summaryGetPayload<T>>| Null>;

    youtube_llm_outputs<T extends Youtube_videos$youtube_llm_outputsArgs= {}>(args?: Subset<T, Youtube_videos$youtube_llm_outputsArgs>): PrismaPromise<Array<Youtube_llm_outputsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Youtube_videos base type for findUnique actions
   */
  export type Youtube_videosFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Youtube_videos
     * 
    **/
    select?: Youtube_videosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_videosInclude | null
    /**
     * Filter, which Youtube_videos to fetch.
     * 
    **/
    where: Youtube_videosWhereUniqueInput
  }

  /**
   * Youtube_videos findUnique
   */
  export interface Youtube_videosFindUniqueArgs extends Youtube_videosFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Youtube_videos findUniqueOrThrow
   */
  export type Youtube_videosFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Youtube_videos
     * 
    **/
    select?: Youtube_videosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_videosInclude | null
    /**
     * Filter, which Youtube_videos to fetch.
     * 
    **/
    where: Youtube_videosWhereUniqueInput
  }


  /**
   * Youtube_videos base type for findFirst actions
   */
  export type Youtube_videosFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Youtube_videos
     * 
    **/
    select?: Youtube_videosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_videosInclude | null
    /**
     * Filter, which Youtube_videos to fetch.
     * 
    **/
    where?: Youtube_videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Youtube_videos to fetch.
     * 
    **/
    orderBy?: Enumerable<Youtube_videosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Youtube_videos.
     * 
    **/
    cursor?: Youtube_videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Youtube_videos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Youtube_videos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Youtube_videos.
     * 
    **/
    distinct?: Enumerable<Youtube_videosScalarFieldEnum>
  }

  /**
   * Youtube_videos findFirst
   */
  export interface Youtube_videosFindFirstArgs extends Youtube_videosFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Youtube_videos findFirstOrThrow
   */
  export type Youtube_videosFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Youtube_videos
     * 
    **/
    select?: Youtube_videosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_videosInclude | null
    /**
     * Filter, which Youtube_videos to fetch.
     * 
    **/
    where?: Youtube_videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Youtube_videos to fetch.
     * 
    **/
    orderBy?: Enumerable<Youtube_videosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Youtube_videos.
     * 
    **/
    cursor?: Youtube_videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Youtube_videos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Youtube_videos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Youtube_videos.
     * 
    **/
    distinct?: Enumerable<Youtube_videosScalarFieldEnum>
  }


  /**
   * Youtube_videos findMany
   */
  export type Youtube_videosFindManyArgs = {
    /**
     * Select specific fields to fetch from the Youtube_videos
     * 
    **/
    select?: Youtube_videosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_videosInclude | null
    /**
     * Filter, which Youtube_videos to fetch.
     * 
    **/
    where?: Youtube_videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Youtube_videos to fetch.
     * 
    **/
    orderBy?: Enumerable<Youtube_videosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Youtube_videos.
     * 
    **/
    cursor?: Youtube_videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Youtube_videos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Youtube_videos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Youtube_videosScalarFieldEnum>
  }


  /**
   * Youtube_videos create
   */
  export type Youtube_videosCreateArgs = {
    /**
     * Select specific fields to fetch from the Youtube_videos
     * 
    **/
    select?: Youtube_videosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_videosInclude | null
    /**
     * The data needed to create a Youtube_videos.
     * 
    **/
    data: XOR<Youtube_videosCreateInput, Youtube_videosUncheckedCreateInput>
  }


  /**
   * Youtube_videos createMany
   */
  export type Youtube_videosCreateManyArgs = {
    /**
     * The data used to create many Youtube_videos.
     * 
    **/
    data: Enumerable<Youtube_videosCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Youtube_videos update
   */
  export type Youtube_videosUpdateArgs = {
    /**
     * Select specific fields to fetch from the Youtube_videos
     * 
    **/
    select?: Youtube_videosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_videosInclude | null
    /**
     * The data needed to update a Youtube_videos.
     * 
    **/
    data: XOR<Youtube_videosUpdateInput, Youtube_videosUncheckedUpdateInput>
    /**
     * Choose, which Youtube_videos to update.
     * 
    **/
    where: Youtube_videosWhereUniqueInput
  }


  /**
   * Youtube_videos updateMany
   */
  export type Youtube_videosUpdateManyArgs = {
    /**
     * The data used to update Youtube_videos.
     * 
    **/
    data: XOR<Youtube_videosUpdateManyMutationInput, Youtube_videosUncheckedUpdateManyInput>
    /**
     * Filter which Youtube_videos to update
     * 
    **/
    where?: Youtube_videosWhereInput
  }


  /**
   * Youtube_videos upsert
   */
  export type Youtube_videosUpsertArgs = {
    /**
     * Select specific fields to fetch from the Youtube_videos
     * 
    **/
    select?: Youtube_videosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_videosInclude | null
    /**
     * The filter to search for the Youtube_videos to update in case it exists.
     * 
    **/
    where: Youtube_videosWhereUniqueInput
    /**
     * In case the Youtube_videos found by the `where` argument doesn't exist, create a new Youtube_videos with this data.
     * 
    **/
    create: XOR<Youtube_videosCreateInput, Youtube_videosUncheckedCreateInput>
    /**
     * In case the Youtube_videos was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Youtube_videosUpdateInput, Youtube_videosUncheckedUpdateInput>
  }


  /**
   * Youtube_videos delete
   */
  export type Youtube_videosDeleteArgs = {
    /**
     * Select specific fields to fetch from the Youtube_videos
     * 
    **/
    select?: Youtube_videosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_videosInclude | null
    /**
     * Filter which Youtube_videos to delete.
     * 
    **/
    where: Youtube_videosWhereUniqueInput
  }


  /**
   * Youtube_videos deleteMany
   */
  export type Youtube_videosDeleteManyArgs = {
    /**
     * Filter which Youtube_videos to delete
     * 
    **/
    where?: Youtube_videosWhereInput
  }


  /**
   * Youtube_videos.youtube_basic_summary
   */
  export type Youtube_videos$youtube_basic_summaryArgs = {
    /**
     * Select specific fields to fetch from the Youtube_basic_summary
     * 
    **/
    select?: Youtube_basic_summarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_basic_summaryInclude | null
    where?: Youtube_basic_summaryWhereInput
    orderBy?: Enumerable<Youtube_basic_summaryOrderByWithRelationInput>
    cursor?: Youtube_basic_summaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Youtube_basic_summaryScalarFieldEnum>
  }


  /**
   * Youtube_videos.youtube_llm_outputs
   */
  export type Youtube_videos$youtube_llm_outputsArgs = {
    /**
     * Select specific fields to fetch from the Youtube_llm_outputs
     * 
    **/
    select?: Youtube_llm_outputsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_llm_outputsInclude | null
    where?: Youtube_llm_outputsWhereInput
    orderBy?: Enumerable<Youtube_llm_outputsOrderByWithRelationInput>
    cursor?: Youtube_llm_outputsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Youtube_llm_outputsScalarFieldEnum>
  }


  /**
   * Youtube_videos without action
   */
  export type Youtube_videosArgs = {
    /**
     * Select specific fields to fetch from the Youtube_videos
     * 
    **/
    select?: Youtube_videosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Youtube_videosInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Trpc_callsScalarFieldEnum: {
    id: 'id',
    createdat: 'createdat',
    elapsedms: 'elapsedms',
    path: 'path',
    input: 'input',
    type: 'type',
    state: 'state',
    clientid: 'clientid',
    response: 'response'
  };

  export type Trpc_callsScalarFieldEnum = (typeof Trpc_callsScalarFieldEnum)[keyof typeof Trpc_callsScalarFieldEnum]


  export const Youtube_basic_summaryScalarFieldEnum: {
    id: 'id',
    youtube_id: 'youtube_id',
    created_at: 'created_at',
    hour_summaries: 'hour_summaries'
  };

  export type Youtube_basic_summaryScalarFieldEnum = (typeof Youtube_basic_summaryScalarFieldEnum)[keyof typeof Youtube_basic_summaryScalarFieldEnum]


  export const Youtube_llm_outputsScalarFieldEnum: {
    id: 'id',
    youtube_id: 'youtube_id',
    created_at: 'created_at',
    llm_prompt_type: 'llm_prompt_type',
    output: 'output'
  };

  export type Youtube_llm_outputsScalarFieldEnum = (typeof Youtube_llm_outputsScalarFieldEnum)[keyof typeof Youtube_llm_outputsScalarFieldEnum]


  export const Youtube_videosScalarFieldEnum: {
    id: 'id',
    transcript: 'transcript',
    created_at: 'created_at',
    updated_at: 'updated_at',
    title: 'title',
    author_name: 'author_name',
    author_url: 'author_url',
    type: 'type',
    height: 'height',
    width: 'width',
    version: 'version',
    provider_name: 'provider_name',
    provider_url: 'provider_url',
    thumbnail_height: 'thumbnail_height',
    thumbnail_width: 'thumbnail_width',
    thumbnail_url: 'thumbnail_url',
    html: 'html',
    score: 'score',
    error: 'error'
  };

  export type Youtube_videosScalarFieldEnum = (typeof Youtube_videosScalarFieldEnum)[keyof typeof Youtube_videosScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type Trpc_callsWhereInput = {
    AND?: Enumerable<Trpc_callsWhereInput>
    OR?: Enumerable<Trpc_callsWhereInput>
    NOT?: Enumerable<Trpc_callsWhereInput>
    id?: UuidFilter | string
    createdat?: DateTimeFilter | Date | string
    elapsedms?: IntNullableFilter | number | null
    path?: StringFilter | string
    input?: StringNullableFilter | string | null
    type?: StringFilter | string
    state?: StringFilter | string
    clientid?: StringFilter | string
    response?: StringNullableFilter | string | null
  }

  export type Trpc_callsOrderByWithRelationInput = {
    id?: SortOrder
    createdat?: SortOrder
    elapsedms?: SortOrder
    path?: SortOrder
    input?: SortOrder
    type?: SortOrder
    state?: SortOrder
    clientid?: SortOrder
    response?: SortOrder
  }

  export type Trpc_callsWhereUniqueInput = {
    id?: string
  }

  export type Trpc_callsOrderByWithAggregationInput = {
    id?: SortOrder
    createdat?: SortOrder
    elapsedms?: SortOrder
    path?: SortOrder
    input?: SortOrder
    type?: SortOrder
    state?: SortOrder
    clientid?: SortOrder
    response?: SortOrder
    _count?: Trpc_callsCountOrderByAggregateInput
    _avg?: Trpc_callsAvgOrderByAggregateInput
    _max?: Trpc_callsMaxOrderByAggregateInput
    _min?: Trpc_callsMinOrderByAggregateInput
    _sum?: Trpc_callsSumOrderByAggregateInput
  }

  export type Trpc_callsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Trpc_callsScalarWhereWithAggregatesInput>
    OR?: Enumerable<Trpc_callsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Trpc_callsScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    createdat?: DateTimeWithAggregatesFilter | Date | string
    elapsedms?: IntNullableWithAggregatesFilter | number | null
    path?: StringWithAggregatesFilter | string
    input?: StringNullableWithAggregatesFilter | string | null
    type?: StringWithAggregatesFilter | string
    state?: StringWithAggregatesFilter | string
    clientid?: StringWithAggregatesFilter | string
    response?: StringNullableWithAggregatesFilter | string | null
  }

  export type Youtube_basic_summaryWhereInput = {
    AND?: Enumerable<Youtube_basic_summaryWhereInput>
    OR?: Enumerable<Youtube_basic_summaryWhereInput>
    NOT?: Enumerable<Youtube_basic_summaryWhereInput>
    id?: UuidFilter | string
    youtube_id?: StringNullableFilter | string | null
    created_at?: DateTimeNullableFilter | Date | string | null
    hour_summaries?: StringNullableFilter | string | null
    youtube_videos?: XOR<Youtube_videosRelationFilter, Youtube_videosWhereInput> | null
  }

  export type Youtube_basic_summaryOrderByWithRelationInput = {
    id?: SortOrder
    youtube_id?: SortOrder
    created_at?: SortOrder
    hour_summaries?: SortOrder
    youtube_videos?: Youtube_videosOrderByWithRelationInput
  }

  export type Youtube_basic_summaryWhereUniqueInput = {
    id?: string
  }

  export type Youtube_basic_summaryOrderByWithAggregationInput = {
    id?: SortOrder
    youtube_id?: SortOrder
    created_at?: SortOrder
    hour_summaries?: SortOrder
    _count?: Youtube_basic_summaryCountOrderByAggregateInput
    _max?: Youtube_basic_summaryMaxOrderByAggregateInput
    _min?: Youtube_basic_summaryMinOrderByAggregateInput
  }

  export type Youtube_basic_summaryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Youtube_basic_summaryScalarWhereWithAggregatesInput>
    OR?: Enumerable<Youtube_basic_summaryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Youtube_basic_summaryScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    youtube_id?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    hour_summaries?: StringNullableWithAggregatesFilter | string | null
  }

  export type Youtube_llm_outputsWhereInput = {
    AND?: Enumerable<Youtube_llm_outputsWhereInput>
    OR?: Enumerable<Youtube_llm_outputsWhereInput>
    NOT?: Enumerable<Youtube_llm_outputsWhereInput>
    id?: UuidFilter | string
    youtube_id?: StringNullableFilter | string | null
    created_at?: DateTimeNullableFilter | Date | string | null
    llm_prompt_type?: StringNullableFilter | string | null
    output?: StringNullableFilter | string | null
    youtube_videos?: XOR<Youtube_videosRelationFilter, Youtube_videosWhereInput> | null
  }

  export type Youtube_llm_outputsOrderByWithRelationInput = {
    id?: SortOrder
    youtube_id?: SortOrder
    created_at?: SortOrder
    llm_prompt_type?: SortOrder
    output?: SortOrder
    youtube_videos?: Youtube_videosOrderByWithRelationInput
  }

  export type Youtube_llm_outputsWhereUniqueInput = {
    id?: string
  }

  export type Youtube_llm_outputsOrderByWithAggregationInput = {
    id?: SortOrder
    youtube_id?: SortOrder
    created_at?: SortOrder
    llm_prompt_type?: SortOrder
    output?: SortOrder
    _count?: Youtube_llm_outputsCountOrderByAggregateInput
    _max?: Youtube_llm_outputsMaxOrderByAggregateInput
    _min?: Youtube_llm_outputsMinOrderByAggregateInput
  }

  export type Youtube_llm_outputsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Youtube_llm_outputsScalarWhereWithAggregatesInput>
    OR?: Enumerable<Youtube_llm_outputsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Youtube_llm_outputsScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    youtube_id?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    llm_prompt_type?: StringNullableWithAggregatesFilter | string | null
    output?: StringNullableWithAggregatesFilter | string | null
  }

  export type Youtube_videosWhereInput = {
    AND?: Enumerable<Youtube_videosWhereInput>
    OR?: Enumerable<Youtube_videosWhereInput>
    NOT?: Enumerable<Youtube_videosWhereInput>
    id?: StringFilter | string
    transcript?: StringNullableFilter | string | null
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    title?: StringNullableFilter | string | null
    author_name?: StringNullableFilter | string | null
    author_url?: StringNullableFilter | string | null
    type?: StringNullableFilter | string | null
    height?: IntNullableFilter | number | null
    width?: IntNullableFilter | number | null
    version?: StringNullableFilter | string | null
    provider_name?: StringNullableFilter | string | null
    provider_url?: StringNullableFilter | string | null
    thumbnail_height?: IntNullableFilter | number | null
    thumbnail_width?: IntNullableFilter | number | null
    thumbnail_url?: StringNullableFilter | string | null
    html?: StringNullableFilter | string | null
    score?: FloatNullableFilter | number | null
    error?: StringNullableFilter | string | null
    youtube_basic_summary?: Youtube_basic_summaryListRelationFilter
    youtube_llm_outputs?: Youtube_llm_outputsListRelationFilter
  }

  export type Youtube_videosOrderByWithRelationInput = {
    id?: SortOrder
    transcript?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    title?: SortOrder
    author_name?: SortOrder
    author_url?: SortOrder
    type?: SortOrder
    height?: SortOrder
    width?: SortOrder
    version?: SortOrder
    provider_name?: SortOrder
    provider_url?: SortOrder
    thumbnail_height?: SortOrder
    thumbnail_width?: SortOrder
    thumbnail_url?: SortOrder
    html?: SortOrder
    score?: SortOrder
    error?: SortOrder
    youtube_basic_summary?: Youtube_basic_summaryOrderByRelationAggregateInput
    youtube_llm_outputs?: Youtube_llm_outputsOrderByRelationAggregateInput
  }

  export type Youtube_videosWhereUniqueInput = {
    id?: string
  }

  export type Youtube_videosOrderByWithAggregationInput = {
    id?: SortOrder
    transcript?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    title?: SortOrder
    author_name?: SortOrder
    author_url?: SortOrder
    type?: SortOrder
    height?: SortOrder
    width?: SortOrder
    version?: SortOrder
    provider_name?: SortOrder
    provider_url?: SortOrder
    thumbnail_height?: SortOrder
    thumbnail_width?: SortOrder
    thumbnail_url?: SortOrder
    html?: SortOrder
    score?: SortOrder
    error?: SortOrder
    _count?: Youtube_videosCountOrderByAggregateInput
    _avg?: Youtube_videosAvgOrderByAggregateInput
    _max?: Youtube_videosMaxOrderByAggregateInput
    _min?: Youtube_videosMinOrderByAggregateInput
    _sum?: Youtube_videosSumOrderByAggregateInput
  }

  export type Youtube_videosScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Youtube_videosScalarWhereWithAggregatesInput>
    OR?: Enumerable<Youtube_videosScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Youtube_videosScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    transcript?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    title?: StringNullableWithAggregatesFilter | string | null
    author_name?: StringNullableWithAggregatesFilter | string | null
    author_url?: StringNullableWithAggregatesFilter | string | null
    type?: StringNullableWithAggregatesFilter | string | null
    height?: IntNullableWithAggregatesFilter | number | null
    width?: IntNullableWithAggregatesFilter | number | null
    version?: StringNullableWithAggregatesFilter | string | null
    provider_name?: StringNullableWithAggregatesFilter | string | null
    provider_url?: StringNullableWithAggregatesFilter | string | null
    thumbnail_height?: IntNullableWithAggregatesFilter | number | null
    thumbnail_width?: IntNullableWithAggregatesFilter | number | null
    thumbnail_url?: StringNullableWithAggregatesFilter | string | null
    html?: StringNullableWithAggregatesFilter | string | null
    score?: FloatNullableWithAggregatesFilter | number | null
    error?: StringNullableWithAggregatesFilter | string | null
  }

  export type Trpc_callsCreateInput = {
    id: string
    createdat: Date | string
    elapsedms?: number | null
    path: string
    input?: string | null
    type: string
    state: string
    clientid: string
    response?: string | null
  }

  export type Trpc_callsUncheckedCreateInput = {
    id: string
    createdat: Date | string
    elapsedms?: number | null
    path: string
    input?: string | null
    type: string
    state: string
    clientid: string
    response?: string | null
  }

  export type Trpc_callsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    elapsedms?: NullableIntFieldUpdateOperationsInput | number | null
    path?: StringFieldUpdateOperationsInput | string
    input?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    clientid?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Trpc_callsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    elapsedms?: NullableIntFieldUpdateOperationsInput | number | null
    path?: StringFieldUpdateOperationsInput | string
    input?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    clientid?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Trpc_callsCreateManyInput = {
    id: string
    createdat: Date | string
    elapsedms?: number | null
    path: string
    input?: string | null
    type: string
    state: string
    clientid: string
    response?: string | null
  }

  export type Trpc_callsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    elapsedms?: NullableIntFieldUpdateOperationsInput | number | null
    path?: StringFieldUpdateOperationsInput | string
    input?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    clientid?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Trpc_callsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    elapsedms?: NullableIntFieldUpdateOperationsInput | number | null
    path?: StringFieldUpdateOperationsInput | string
    input?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    clientid?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Youtube_basic_summaryCreateInput = {
    id: string
    created_at?: Date | string | null
    hour_summaries?: string | null
    youtube_videos?: Youtube_videosCreateNestedOneWithoutYoutube_basic_summaryInput
  }

  export type Youtube_basic_summaryUncheckedCreateInput = {
    id: string
    youtube_id?: string | null
    created_at?: Date | string | null
    hour_summaries?: string | null
  }

  export type Youtube_basic_summaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hour_summaries?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_videos?: Youtube_videosUpdateOneWithoutYoutube_basic_summaryNestedInput
  }

  export type Youtube_basic_summaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtube_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hour_summaries?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Youtube_basic_summaryCreateManyInput = {
    id: string
    youtube_id?: string | null
    created_at?: Date | string | null
    hour_summaries?: string | null
  }

  export type Youtube_basic_summaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hour_summaries?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Youtube_basic_summaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtube_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hour_summaries?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Youtube_llm_outputsCreateInput = {
    id: string
    created_at?: Date | string | null
    llm_prompt_type?: string | null
    output?: string | null
    youtube_videos?: Youtube_videosCreateNestedOneWithoutYoutube_llm_outputsInput
  }

  export type Youtube_llm_outputsUncheckedCreateInput = {
    id: string
    youtube_id?: string | null
    created_at?: Date | string | null
    llm_prompt_type?: string | null
    output?: string | null
  }

  export type Youtube_llm_outputsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    llm_prompt_type?: NullableStringFieldUpdateOperationsInput | string | null
    output?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_videos?: Youtube_videosUpdateOneWithoutYoutube_llm_outputsNestedInput
  }

  export type Youtube_llm_outputsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtube_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    llm_prompt_type?: NullableStringFieldUpdateOperationsInput | string | null
    output?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Youtube_llm_outputsCreateManyInput = {
    id: string
    youtube_id?: string | null
    created_at?: Date | string | null
    llm_prompt_type?: string | null
    output?: string | null
  }

  export type Youtube_llm_outputsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    llm_prompt_type?: NullableStringFieldUpdateOperationsInput | string | null
    output?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Youtube_llm_outputsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtube_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    llm_prompt_type?: NullableStringFieldUpdateOperationsInput | string | null
    output?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Youtube_videosCreateInput = {
    id: string
    transcript?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    title?: string | null
    author_name?: string | null
    author_url?: string | null
    type?: string | null
    height?: number | null
    width?: number | null
    version?: string | null
    provider_name?: string | null
    provider_url?: string | null
    thumbnail_height?: number | null
    thumbnail_width?: number | null
    thumbnail_url?: string | null
    html?: string | null
    score?: number | null
    error?: string | null
    youtube_basic_summary?: Youtube_basic_summaryCreateNestedManyWithoutYoutube_videosInput
    youtube_llm_outputs?: Youtube_llm_outputsCreateNestedManyWithoutYoutube_videosInput
  }

  export type Youtube_videosUncheckedCreateInput = {
    id: string
    transcript?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    title?: string | null
    author_name?: string | null
    author_url?: string | null
    type?: string | null
    height?: number | null
    width?: number | null
    version?: string | null
    provider_name?: string | null
    provider_url?: string | null
    thumbnail_height?: number | null
    thumbnail_width?: number | null
    thumbnail_url?: string | null
    html?: string | null
    score?: number | null
    error?: string | null
    youtube_basic_summary?: Youtube_basic_summaryUncheckedCreateNestedManyWithoutYoutube_videosInput
    youtube_llm_outputs?: Youtube_llm_outputsUncheckedCreateNestedManyWithoutYoutube_videosInput
  }

  export type Youtube_videosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    provider_url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_height?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail_width?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null
    html?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_basic_summary?: Youtube_basic_summaryUpdateManyWithoutYoutube_videosNestedInput
    youtube_llm_outputs?: Youtube_llm_outputsUpdateManyWithoutYoutube_videosNestedInput
  }

  export type Youtube_videosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    provider_url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_height?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail_width?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null
    html?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_basic_summary?: Youtube_basic_summaryUncheckedUpdateManyWithoutYoutube_videosNestedInput
    youtube_llm_outputs?: Youtube_llm_outputsUncheckedUpdateManyWithoutYoutube_videosNestedInput
  }

  export type Youtube_videosCreateManyInput = {
    id: string
    transcript?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    title?: string | null
    author_name?: string | null
    author_url?: string | null
    type?: string | null
    height?: number | null
    width?: number | null
    version?: string | null
    provider_name?: string | null
    provider_url?: string | null
    thumbnail_height?: number | null
    thumbnail_width?: number | null
    thumbnail_url?: string | null
    html?: string | null
    score?: number | null
    error?: string | null
  }

  export type Youtube_videosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    provider_url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_height?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail_width?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null
    html?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Youtube_videosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    provider_url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_height?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail_width?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null
    html?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type Trpc_callsCountOrderByAggregateInput = {
    id?: SortOrder
    createdat?: SortOrder
    elapsedms?: SortOrder
    path?: SortOrder
    input?: SortOrder
    type?: SortOrder
    state?: SortOrder
    clientid?: SortOrder
    response?: SortOrder
  }

  export type Trpc_callsAvgOrderByAggregateInput = {
    elapsedms?: SortOrder
  }

  export type Trpc_callsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdat?: SortOrder
    elapsedms?: SortOrder
    path?: SortOrder
    input?: SortOrder
    type?: SortOrder
    state?: SortOrder
    clientid?: SortOrder
    response?: SortOrder
  }

  export type Trpc_callsMinOrderByAggregateInput = {
    id?: SortOrder
    createdat?: SortOrder
    elapsedms?: SortOrder
    path?: SortOrder
    input?: SortOrder
    type?: SortOrder
    state?: SortOrder
    clientid?: SortOrder
    response?: SortOrder
  }

  export type Trpc_callsSumOrderByAggregateInput = {
    elapsedms?: SortOrder
  }

  export type UuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type Youtube_videosRelationFilter = {
    is?: Youtube_videosWhereInput | null
    isNot?: Youtube_videosWhereInput | null
  }

  export type Youtube_basic_summaryCountOrderByAggregateInput = {
    id?: SortOrder
    youtube_id?: SortOrder
    created_at?: SortOrder
    hour_summaries?: SortOrder
  }

  export type Youtube_basic_summaryMaxOrderByAggregateInput = {
    id?: SortOrder
    youtube_id?: SortOrder
    created_at?: SortOrder
    hour_summaries?: SortOrder
  }

  export type Youtube_basic_summaryMinOrderByAggregateInput = {
    id?: SortOrder
    youtube_id?: SortOrder
    created_at?: SortOrder
    hour_summaries?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type Youtube_llm_outputsCountOrderByAggregateInput = {
    id?: SortOrder
    youtube_id?: SortOrder
    created_at?: SortOrder
    llm_prompt_type?: SortOrder
    output?: SortOrder
  }

  export type Youtube_llm_outputsMaxOrderByAggregateInput = {
    id?: SortOrder
    youtube_id?: SortOrder
    created_at?: SortOrder
    llm_prompt_type?: SortOrder
    output?: SortOrder
  }

  export type Youtube_llm_outputsMinOrderByAggregateInput = {
    id?: SortOrder
    youtube_id?: SortOrder
    created_at?: SortOrder
    llm_prompt_type?: SortOrder
    output?: SortOrder
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type Youtube_basic_summaryListRelationFilter = {
    every?: Youtube_basic_summaryWhereInput
    some?: Youtube_basic_summaryWhereInput
    none?: Youtube_basic_summaryWhereInput
  }

  export type Youtube_llm_outputsListRelationFilter = {
    every?: Youtube_llm_outputsWhereInput
    some?: Youtube_llm_outputsWhereInput
    none?: Youtube_llm_outputsWhereInput
  }

  export type Youtube_basic_summaryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Youtube_llm_outputsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Youtube_videosCountOrderByAggregateInput = {
    id?: SortOrder
    transcript?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    title?: SortOrder
    author_name?: SortOrder
    author_url?: SortOrder
    type?: SortOrder
    height?: SortOrder
    width?: SortOrder
    version?: SortOrder
    provider_name?: SortOrder
    provider_url?: SortOrder
    thumbnail_height?: SortOrder
    thumbnail_width?: SortOrder
    thumbnail_url?: SortOrder
    html?: SortOrder
    score?: SortOrder
    error?: SortOrder
  }

  export type Youtube_videosAvgOrderByAggregateInput = {
    height?: SortOrder
    width?: SortOrder
    thumbnail_height?: SortOrder
    thumbnail_width?: SortOrder
    score?: SortOrder
  }

  export type Youtube_videosMaxOrderByAggregateInput = {
    id?: SortOrder
    transcript?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    title?: SortOrder
    author_name?: SortOrder
    author_url?: SortOrder
    type?: SortOrder
    height?: SortOrder
    width?: SortOrder
    version?: SortOrder
    provider_name?: SortOrder
    provider_url?: SortOrder
    thumbnail_height?: SortOrder
    thumbnail_width?: SortOrder
    thumbnail_url?: SortOrder
    html?: SortOrder
    score?: SortOrder
    error?: SortOrder
  }

  export type Youtube_videosMinOrderByAggregateInput = {
    id?: SortOrder
    transcript?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    title?: SortOrder
    author_name?: SortOrder
    author_url?: SortOrder
    type?: SortOrder
    height?: SortOrder
    width?: SortOrder
    version?: SortOrder
    provider_name?: SortOrder
    provider_url?: SortOrder
    thumbnail_height?: SortOrder
    thumbnail_width?: SortOrder
    thumbnail_url?: SortOrder
    html?: SortOrder
    score?: SortOrder
    error?: SortOrder
  }

  export type Youtube_videosSumOrderByAggregateInput = {
    height?: SortOrder
    width?: SortOrder
    thumbnail_height?: SortOrder
    thumbnail_width?: SortOrder
    score?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Youtube_videosCreateNestedOneWithoutYoutube_basic_summaryInput = {
    create?: XOR<Youtube_videosCreateWithoutYoutube_basic_summaryInput, Youtube_videosUncheckedCreateWithoutYoutube_basic_summaryInput>
    connectOrCreate?: Youtube_videosCreateOrConnectWithoutYoutube_basic_summaryInput
    connect?: Youtube_videosWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Youtube_videosUpdateOneWithoutYoutube_basic_summaryNestedInput = {
    create?: XOR<Youtube_videosCreateWithoutYoutube_basic_summaryInput, Youtube_videosUncheckedCreateWithoutYoutube_basic_summaryInput>
    connectOrCreate?: Youtube_videosCreateOrConnectWithoutYoutube_basic_summaryInput
    upsert?: Youtube_videosUpsertWithoutYoutube_basic_summaryInput
    disconnect?: boolean
    delete?: boolean
    connect?: Youtube_videosWhereUniqueInput
    update?: XOR<Youtube_videosUpdateWithoutYoutube_basic_summaryInput, Youtube_videosUncheckedUpdateWithoutYoutube_basic_summaryInput>
  }

  export type Youtube_videosCreateNestedOneWithoutYoutube_llm_outputsInput = {
    create?: XOR<Youtube_videosCreateWithoutYoutube_llm_outputsInput, Youtube_videosUncheckedCreateWithoutYoutube_llm_outputsInput>
    connectOrCreate?: Youtube_videosCreateOrConnectWithoutYoutube_llm_outputsInput
    connect?: Youtube_videosWhereUniqueInput
  }

  export type Youtube_videosUpdateOneWithoutYoutube_llm_outputsNestedInput = {
    create?: XOR<Youtube_videosCreateWithoutYoutube_llm_outputsInput, Youtube_videosUncheckedCreateWithoutYoutube_llm_outputsInput>
    connectOrCreate?: Youtube_videosCreateOrConnectWithoutYoutube_llm_outputsInput
    upsert?: Youtube_videosUpsertWithoutYoutube_llm_outputsInput
    disconnect?: boolean
    delete?: boolean
    connect?: Youtube_videosWhereUniqueInput
    update?: XOR<Youtube_videosUpdateWithoutYoutube_llm_outputsInput, Youtube_videosUncheckedUpdateWithoutYoutube_llm_outputsInput>
  }

  export type Youtube_basic_summaryCreateNestedManyWithoutYoutube_videosInput = {
    create?: XOR<Enumerable<Youtube_basic_summaryCreateWithoutYoutube_videosInput>, Enumerable<Youtube_basic_summaryUncheckedCreateWithoutYoutube_videosInput>>
    connectOrCreate?: Enumerable<Youtube_basic_summaryCreateOrConnectWithoutYoutube_videosInput>
    createMany?: Youtube_basic_summaryCreateManyYoutube_videosInputEnvelope
    connect?: Enumerable<Youtube_basic_summaryWhereUniqueInput>
  }

  export type Youtube_llm_outputsCreateNestedManyWithoutYoutube_videosInput = {
    create?: XOR<Enumerable<Youtube_llm_outputsCreateWithoutYoutube_videosInput>, Enumerable<Youtube_llm_outputsUncheckedCreateWithoutYoutube_videosInput>>
    connectOrCreate?: Enumerable<Youtube_llm_outputsCreateOrConnectWithoutYoutube_videosInput>
    createMany?: Youtube_llm_outputsCreateManyYoutube_videosInputEnvelope
    connect?: Enumerable<Youtube_llm_outputsWhereUniqueInput>
  }

  export type Youtube_basic_summaryUncheckedCreateNestedManyWithoutYoutube_videosInput = {
    create?: XOR<Enumerable<Youtube_basic_summaryCreateWithoutYoutube_videosInput>, Enumerable<Youtube_basic_summaryUncheckedCreateWithoutYoutube_videosInput>>
    connectOrCreate?: Enumerable<Youtube_basic_summaryCreateOrConnectWithoutYoutube_videosInput>
    createMany?: Youtube_basic_summaryCreateManyYoutube_videosInputEnvelope
    connect?: Enumerable<Youtube_basic_summaryWhereUniqueInput>
  }

  export type Youtube_llm_outputsUncheckedCreateNestedManyWithoutYoutube_videosInput = {
    create?: XOR<Enumerable<Youtube_llm_outputsCreateWithoutYoutube_videosInput>, Enumerable<Youtube_llm_outputsUncheckedCreateWithoutYoutube_videosInput>>
    connectOrCreate?: Enumerable<Youtube_llm_outputsCreateOrConnectWithoutYoutube_videosInput>
    createMany?: Youtube_llm_outputsCreateManyYoutube_videosInputEnvelope
    connect?: Enumerable<Youtube_llm_outputsWhereUniqueInput>
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Youtube_basic_summaryUpdateManyWithoutYoutube_videosNestedInput = {
    create?: XOR<Enumerable<Youtube_basic_summaryCreateWithoutYoutube_videosInput>, Enumerable<Youtube_basic_summaryUncheckedCreateWithoutYoutube_videosInput>>
    connectOrCreate?: Enumerable<Youtube_basic_summaryCreateOrConnectWithoutYoutube_videosInput>
    upsert?: Enumerable<Youtube_basic_summaryUpsertWithWhereUniqueWithoutYoutube_videosInput>
    createMany?: Youtube_basic_summaryCreateManyYoutube_videosInputEnvelope
    set?: Enumerable<Youtube_basic_summaryWhereUniqueInput>
    disconnect?: Enumerable<Youtube_basic_summaryWhereUniqueInput>
    delete?: Enumerable<Youtube_basic_summaryWhereUniqueInput>
    connect?: Enumerable<Youtube_basic_summaryWhereUniqueInput>
    update?: Enumerable<Youtube_basic_summaryUpdateWithWhereUniqueWithoutYoutube_videosInput>
    updateMany?: Enumerable<Youtube_basic_summaryUpdateManyWithWhereWithoutYoutube_videosInput>
    deleteMany?: Enumerable<Youtube_basic_summaryScalarWhereInput>
  }

  export type Youtube_llm_outputsUpdateManyWithoutYoutube_videosNestedInput = {
    create?: XOR<Enumerable<Youtube_llm_outputsCreateWithoutYoutube_videosInput>, Enumerable<Youtube_llm_outputsUncheckedCreateWithoutYoutube_videosInput>>
    connectOrCreate?: Enumerable<Youtube_llm_outputsCreateOrConnectWithoutYoutube_videosInput>
    upsert?: Enumerable<Youtube_llm_outputsUpsertWithWhereUniqueWithoutYoutube_videosInput>
    createMany?: Youtube_llm_outputsCreateManyYoutube_videosInputEnvelope
    set?: Enumerable<Youtube_llm_outputsWhereUniqueInput>
    disconnect?: Enumerable<Youtube_llm_outputsWhereUniqueInput>
    delete?: Enumerable<Youtube_llm_outputsWhereUniqueInput>
    connect?: Enumerable<Youtube_llm_outputsWhereUniqueInput>
    update?: Enumerable<Youtube_llm_outputsUpdateWithWhereUniqueWithoutYoutube_videosInput>
    updateMany?: Enumerable<Youtube_llm_outputsUpdateManyWithWhereWithoutYoutube_videosInput>
    deleteMany?: Enumerable<Youtube_llm_outputsScalarWhereInput>
  }

  export type Youtube_basic_summaryUncheckedUpdateManyWithoutYoutube_videosNestedInput = {
    create?: XOR<Enumerable<Youtube_basic_summaryCreateWithoutYoutube_videosInput>, Enumerable<Youtube_basic_summaryUncheckedCreateWithoutYoutube_videosInput>>
    connectOrCreate?: Enumerable<Youtube_basic_summaryCreateOrConnectWithoutYoutube_videosInput>
    upsert?: Enumerable<Youtube_basic_summaryUpsertWithWhereUniqueWithoutYoutube_videosInput>
    createMany?: Youtube_basic_summaryCreateManyYoutube_videosInputEnvelope
    set?: Enumerable<Youtube_basic_summaryWhereUniqueInput>
    disconnect?: Enumerable<Youtube_basic_summaryWhereUniqueInput>
    delete?: Enumerable<Youtube_basic_summaryWhereUniqueInput>
    connect?: Enumerable<Youtube_basic_summaryWhereUniqueInput>
    update?: Enumerable<Youtube_basic_summaryUpdateWithWhereUniqueWithoutYoutube_videosInput>
    updateMany?: Enumerable<Youtube_basic_summaryUpdateManyWithWhereWithoutYoutube_videosInput>
    deleteMany?: Enumerable<Youtube_basic_summaryScalarWhereInput>
  }

  export type Youtube_llm_outputsUncheckedUpdateManyWithoutYoutube_videosNestedInput = {
    create?: XOR<Enumerable<Youtube_llm_outputsCreateWithoutYoutube_videosInput>, Enumerable<Youtube_llm_outputsUncheckedCreateWithoutYoutube_videosInput>>
    connectOrCreate?: Enumerable<Youtube_llm_outputsCreateOrConnectWithoutYoutube_videosInput>
    upsert?: Enumerable<Youtube_llm_outputsUpsertWithWhereUniqueWithoutYoutube_videosInput>
    createMany?: Youtube_llm_outputsCreateManyYoutube_videosInputEnvelope
    set?: Enumerable<Youtube_llm_outputsWhereUniqueInput>
    disconnect?: Enumerable<Youtube_llm_outputsWhereUniqueInput>
    delete?: Enumerable<Youtube_llm_outputsWhereUniqueInput>
    connect?: Enumerable<Youtube_llm_outputsWhereUniqueInput>
    update?: Enumerable<Youtube_llm_outputsUpdateWithWhereUniqueWithoutYoutube_videosInput>
    updateMany?: Enumerable<Youtube_llm_outputsUpdateManyWithWhereWithoutYoutube_videosInput>
    deleteMany?: Enumerable<Youtube_llm_outputsScalarWhereInput>
  }

  export type NestedUuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedUuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type Youtube_videosCreateWithoutYoutube_basic_summaryInput = {
    id: string
    transcript?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    title?: string | null
    author_name?: string | null
    author_url?: string | null
    type?: string | null
    height?: number | null
    width?: number | null
    version?: string | null
    provider_name?: string | null
    provider_url?: string | null
    thumbnail_height?: number | null
    thumbnail_width?: number | null
    thumbnail_url?: string | null
    html?: string | null
    score?: number | null
    error?: string | null
    youtube_llm_outputs?: Youtube_llm_outputsCreateNestedManyWithoutYoutube_videosInput
  }

  export type Youtube_videosUncheckedCreateWithoutYoutube_basic_summaryInput = {
    id: string
    transcript?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    title?: string | null
    author_name?: string | null
    author_url?: string | null
    type?: string | null
    height?: number | null
    width?: number | null
    version?: string | null
    provider_name?: string | null
    provider_url?: string | null
    thumbnail_height?: number | null
    thumbnail_width?: number | null
    thumbnail_url?: string | null
    html?: string | null
    score?: number | null
    error?: string | null
    youtube_llm_outputs?: Youtube_llm_outputsUncheckedCreateNestedManyWithoutYoutube_videosInput
  }

  export type Youtube_videosCreateOrConnectWithoutYoutube_basic_summaryInput = {
    where: Youtube_videosWhereUniqueInput
    create: XOR<Youtube_videosCreateWithoutYoutube_basic_summaryInput, Youtube_videosUncheckedCreateWithoutYoutube_basic_summaryInput>
  }

  export type Youtube_videosUpsertWithoutYoutube_basic_summaryInput = {
    update: XOR<Youtube_videosUpdateWithoutYoutube_basic_summaryInput, Youtube_videosUncheckedUpdateWithoutYoutube_basic_summaryInput>
    create: XOR<Youtube_videosCreateWithoutYoutube_basic_summaryInput, Youtube_videosUncheckedCreateWithoutYoutube_basic_summaryInput>
  }

  export type Youtube_videosUpdateWithoutYoutube_basic_summaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    provider_url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_height?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail_width?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null
    html?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_llm_outputs?: Youtube_llm_outputsUpdateManyWithoutYoutube_videosNestedInput
  }

  export type Youtube_videosUncheckedUpdateWithoutYoutube_basic_summaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    provider_url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_height?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail_width?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null
    html?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_llm_outputs?: Youtube_llm_outputsUncheckedUpdateManyWithoutYoutube_videosNestedInput
  }

  export type Youtube_videosCreateWithoutYoutube_llm_outputsInput = {
    id: string
    transcript?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    title?: string | null
    author_name?: string | null
    author_url?: string | null
    type?: string | null
    height?: number | null
    width?: number | null
    version?: string | null
    provider_name?: string | null
    provider_url?: string | null
    thumbnail_height?: number | null
    thumbnail_width?: number | null
    thumbnail_url?: string | null
    html?: string | null
    score?: number | null
    error?: string | null
    youtube_basic_summary?: Youtube_basic_summaryCreateNestedManyWithoutYoutube_videosInput
  }

  export type Youtube_videosUncheckedCreateWithoutYoutube_llm_outputsInput = {
    id: string
    transcript?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    title?: string | null
    author_name?: string | null
    author_url?: string | null
    type?: string | null
    height?: number | null
    width?: number | null
    version?: string | null
    provider_name?: string | null
    provider_url?: string | null
    thumbnail_height?: number | null
    thumbnail_width?: number | null
    thumbnail_url?: string | null
    html?: string | null
    score?: number | null
    error?: string | null
    youtube_basic_summary?: Youtube_basic_summaryUncheckedCreateNestedManyWithoutYoutube_videosInput
  }

  export type Youtube_videosCreateOrConnectWithoutYoutube_llm_outputsInput = {
    where: Youtube_videosWhereUniqueInput
    create: XOR<Youtube_videosCreateWithoutYoutube_llm_outputsInput, Youtube_videosUncheckedCreateWithoutYoutube_llm_outputsInput>
  }

  export type Youtube_videosUpsertWithoutYoutube_llm_outputsInput = {
    update: XOR<Youtube_videosUpdateWithoutYoutube_llm_outputsInput, Youtube_videosUncheckedUpdateWithoutYoutube_llm_outputsInput>
    create: XOR<Youtube_videosCreateWithoutYoutube_llm_outputsInput, Youtube_videosUncheckedCreateWithoutYoutube_llm_outputsInput>
  }

  export type Youtube_videosUpdateWithoutYoutube_llm_outputsInput = {
    id?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    provider_url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_height?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail_width?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null
    html?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_basic_summary?: Youtube_basic_summaryUpdateManyWithoutYoutube_videosNestedInput
  }

  export type Youtube_videosUncheckedUpdateWithoutYoutube_llm_outputsInput = {
    id?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    provider_name?: NullableStringFieldUpdateOperationsInput | string | null
    provider_url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail_height?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail_width?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail_url?: NullableStringFieldUpdateOperationsInput | string | null
    html?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_basic_summary?: Youtube_basic_summaryUncheckedUpdateManyWithoutYoutube_videosNestedInput
  }

  export type Youtube_basic_summaryCreateWithoutYoutube_videosInput = {
    id: string
    created_at?: Date | string | null
    hour_summaries?: string | null
  }

  export type Youtube_basic_summaryUncheckedCreateWithoutYoutube_videosInput = {
    id: string
    created_at?: Date | string | null
    hour_summaries?: string | null
  }

  export type Youtube_basic_summaryCreateOrConnectWithoutYoutube_videosInput = {
    where: Youtube_basic_summaryWhereUniqueInput
    create: XOR<Youtube_basic_summaryCreateWithoutYoutube_videosInput, Youtube_basic_summaryUncheckedCreateWithoutYoutube_videosInput>
  }

  export type Youtube_basic_summaryCreateManyYoutube_videosInputEnvelope = {
    data: Enumerable<Youtube_basic_summaryCreateManyYoutube_videosInput>
    skipDuplicates?: boolean
  }

  export type Youtube_llm_outputsCreateWithoutYoutube_videosInput = {
    id: string
    created_at?: Date | string | null
    llm_prompt_type?: string | null
    output?: string | null
  }

  export type Youtube_llm_outputsUncheckedCreateWithoutYoutube_videosInput = {
    id: string
    created_at?: Date | string | null
    llm_prompt_type?: string | null
    output?: string | null
  }

  export type Youtube_llm_outputsCreateOrConnectWithoutYoutube_videosInput = {
    where: Youtube_llm_outputsWhereUniqueInput
    create: XOR<Youtube_llm_outputsCreateWithoutYoutube_videosInput, Youtube_llm_outputsUncheckedCreateWithoutYoutube_videosInput>
  }

  export type Youtube_llm_outputsCreateManyYoutube_videosInputEnvelope = {
    data: Enumerable<Youtube_llm_outputsCreateManyYoutube_videosInput>
    skipDuplicates?: boolean
  }

  export type Youtube_basic_summaryUpsertWithWhereUniqueWithoutYoutube_videosInput = {
    where: Youtube_basic_summaryWhereUniqueInput
    update: XOR<Youtube_basic_summaryUpdateWithoutYoutube_videosInput, Youtube_basic_summaryUncheckedUpdateWithoutYoutube_videosInput>
    create: XOR<Youtube_basic_summaryCreateWithoutYoutube_videosInput, Youtube_basic_summaryUncheckedCreateWithoutYoutube_videosInput>
  }

  export type Youtube_basic_summaryUpdateWithWhereUniqueWithoutYoutube_videosInput = {
    where: Youtube_basic_summaryWhereUniqueInput
    data: XOR<Youtube_basic_summaryUpdateWithoutYoutube_videosInput, Youtube_basic_summaryUncheckedUpdateWithoutYoutube_videosInput>
  }

  export type Youtube_basic_summaryUpdateManyWithWhereWithoutYoutube_videosInput = {
    where: Youtube_basic_summaryScalarWhereInput
    data: XOR<Youtube_basic_summaryUpdateManyMutationInput, Youtube_basic_summaryUncheckedUpdateManyWithoutYoutube_basic_summaryInput>
  }

  export type Youtube_basic_summaryScalarWhereInput = {
    AND?: Enumerable<Youtube_basic_summaryScalarWhereInput>
    OR?: Enumerable<Youtube_basic_summaryScalarWhereInput>
    NOT?: Enumerable<Youtube_basic_summaryScalarWhereInput>
    id?: UuidFilter | string
    youtube_id?: StringNullableFilter | string | null
    created_at?: DateTimeNullableFilter | Date | string | null
    hour_summaries?: StringNullableFilter | string | null
  }

  export type Youtube_llm_outputsUpsertWithWhereUniqueWithoutYoutube_videosInput = {
    where: Youtube_llm_outputsWhereUniqueInput
    update: XOR<Youtube_llm_outputsUpdateWithoutYoutube_videosInput, Youtube_llm_outputsUncheckedUpdateWithoutYoutube_videosInput>
    create: XOR<Youtube_llm_outputsCreateWithoutYoutube_videosInput, Youtube_llm_outputsUncheckedCreateWithoutYoutube_videosInput>
  }

  export type Youtube_llm_outputsUpdateWithWhereUniqueWithoutYoutube_videosInput = {
    where: Youtube_llm_outputsWhereUniqueInput
    data: XOR<Youtube_llm_outputsUpdateWithoutYoutube_videosInput, Youtube_llm_outputsUncheckedUpdateWithoutYoutube_videosInput>
  }

  export type Youtube_llm_outputsUpdateManyWithWhereWithoutYoutube_videosInput = {
    where: Youtube_llm_outputsScalarWhereInput
    data: XOR<Youtube_llm_outputsUpdateManyMutationInput, Youtube_llm_outputsUncheckedUpdateManyWithoutYoutube_llm_outputsInput>
  }

  export type Youtube_llm_outputsScalarWhereInput = {
    AND?: Enumerable<Youtube_llm_outputsScalarWhereInput>
    OR?: Enumerable<Youtube_llm_outputsScalarWhereInput>
    NOT?: Enumerable<Youtube_llm_outputsScalarWhereInput>
    id?: UuidFilter | string
    youtube_id?: StringNullableFilter | string | null
    created_at?: DateTimeNullableFilter | Date | string | null
    llm_prompt_type?: StringNullableFilter | string | null
    output?: StringNullableFilter | string | null
  }

  export type Youtube_basic_summaryCreateManyYoutube_videosInput = {
    id: string
    created_at?: Date | string | null
    hour_summaries?: string | null
  }

  export type Youtube_llm_outputsCreateManyYoutube_videosInput = {
    id: string
    created_at?: Date | string | null
    llm_prompt_type?: string | null
    output?: string | null
  }

  export type Youtube_basic_summaryUpdateWithoutYoutube_videosInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hour_summaries?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Youtube_basic_summaryUncheckedUpdateWithoutYoutube_videosInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hour_summaries?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Youtube_basic_summaryUncheckedUpdateManyWithoutYoutube_basic_summaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hour_summaries?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Youtube_llm_outputsUpdateWithoutYoutube_videosInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    llm_prompt_type?: NullableStringFieldUpdateOperationsInput | string | null
    output?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Youtube_llm_outputsUncheckedUpdateWithoutYoutube_videosInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    llm_prompt_type?: NullableStringFieldUpdateOperationsInput | string | null
    output?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Youtube_llm_outputsUncheckedUpdateManyWithoutYoutube_llm_outputsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    llm_prompt_type?: NullableStringFieldUpdateOperationsInput | string | null
    output?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}

type Buffer = Omit<Uint8Array, 'set'>
