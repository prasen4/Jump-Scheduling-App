
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model SchedulingWindow
 * 
 */
export type SchedulingWindow = $Result.DefaultSelection<Prisma.$SchedulingWindowPayload>
/**
 * Model SchedulingLink
 * 
 */
export type SchedulingLink = $Result.DefaultSelection<Prisma.$SchedulingLinkPayload>
/**
 * Model Meeting
 * 
 */
export type Meeting = $Result.DefaultSelection<Prisma.$MeetingPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.schedulingWindow`: Exposes CRUD operations for the **SchedulingWindow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SchedulingWindows
    * const schedulingWindows = await prisma.schedulingWindow.findMany()
    * ```
    */
  get schedulingWindow(): Prisma.SchedulingWindowDelegate<ExtArgs>;

  /**
   * `prisma.schedulingLink`: Exposes CRUD operations for the **SchedulingLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SchedulingLinks
    * const schedulingLinks = await prisma.schedulingLink.findMany()
    * ```
    */
  get schedulingLink(): Prisma.SchedulingLinkDelegate<ExtArgs>;

  /**
   * `prisma.meeting`: Exposes CRUD operations for the **Meeting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meetings
    * const meetings = await prisma.meeting.findMany()
    * ```
    */
  get meeting(): Prisma.MeetingDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    SchedulingWindow: 'SchedulingWindow',
    SchedulingLink: 'SchedulingLink',
    Meeting: 'Meeting'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "account" | "schedulingWindow" | "schedulingLink" | "meeting"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      SchedulingWindow: {
        payload: Prisma.$SchedulingWindowPayload<ExtArgs>
        fields: Prisma.SchedulingWindowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchedulingWindowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingWindowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchedulingWindowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingWindowPayload>
          }
          findFirst: {
            args: Prisma.SchedulingWindowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingWindowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchedulingWindowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingWindowPayload>
          }
          findMany: {
            args: Prisma.SchedulingWindowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingWindowPayload>[]
          }
          create: {
            args: Prisma.SchedulingWindowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingWindowPayload>
          }
          createMany: {
            args: Prisma.SchedulingWindowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchedulingWindowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingWindowPayload>[]
          }
          delete: {
            args: Prisma.SchedulingWindowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingWindowPayload>
          }
          update: {
            args: Prisma.SchedulingWindowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingWindowPayload>
          }
          deleteMany: {
            args: Prisma.SchedulingWindowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchedulingWindowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SchedulingWindowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingWindowPayload>
          }
          aggregate: {
            args: Prisma.SchedulingWindowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedulingWindow>
          }
          groupBy: {
            args: Prisma.SchedulingWindowGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchedulingWindowGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchedulingWindowCountArgs<ExtArgs>
            result: $Utils.Optional<SchedulingWindowCountAggregateOutputType> | number
          }
        }
      }
      SchedulingLink: {
        payload: Prisma.$SchedulingLinkPayload<ExtArgs>
        fields: Prisma.SchedulingLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchedulingLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchedulingLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingLinkPayload>
          }
          findFirst: {
            args: Prisma.SchedulingLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchedulingLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingLinkPayload>
          }
          findMany: {
            args: Prisma.SchedulingLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingLinkPayload>[]
          }
          create: {
            args: Prisma.SchedulingLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingLinkPayload>
          }
          createMany: {
            args: Prisma.SchedulingLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchedulingLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingLinkPayload>[]
          }
          delete: {
            args: Prisma.SchedulingLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingLinkPayload>
          }
          update: {
            args: Prisma.SchedulingLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingLinkPayload>
          }
          deleteMany: {
            args: Prisma.SchedulingLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchedulingLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SchedulingLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingLinkPayload>
          }
          aggregate: {
            args: Prisma.SchedulingLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedulingLink>
          }
          groupBy: {
            args: Prisma.SchedulingLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchedulingLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchedulingLinkCountArgs<ExtArgs>
            result: $Utils.Optional<SchedulingLinkCountAggregateOutputType> | number
          }
        }
      }
      Meeting: {
        payload: Prisma.$MeetingPayload<ExtArgs>
        fields: Prisma.MeetingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeetingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeetingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          findFirst: {
            args: Prisma.MeetingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeetingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          findMany: {
            args: Prisma.MeetingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          create: {
            args: Prisma.MeetingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          createMany: {
            args: Prisma.MeetingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeetingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          delete: {
            args: Prisma.MeetingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          update: {
            args: Prisma.MeetingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          deleteMany: {
            args: Prisma.MeetingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeetingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MeetingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          aggregate: {
            args: Prisma.MeetingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeeting>
          }
          groupBy: {
            args: Prisma.MeetingGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeetingCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
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
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    schedulingLinks: number
    schedulingWindows: number
    meetings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    schedulingLinks?: boolean | UserCountOutputTypeCountSchedulingLinksArgs
    schedulingWindows?: boolean | UserCountOutputTypeCountSchedulingWindowsArgs
    meetings?: boolean | UserCountOutputTypeCountMeetingsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSchedulingLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchedulingLinkWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSchedulingWindowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchedulingWindowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
  }


  /**
   * Count Type SchedulingLinkCountOutputType
   */

  export type SchedulingLinkCountOutputType = {
    meetings: number
  }

  export type SchedulingLinkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | SchedulingLinkCountOutputTypeCountMeetingsArgs
  }

  // Custom InputTypes
  /**
   * SchedulingLinkCountOutputType without action
   */
  export type SchedulingLinkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingLinkCountOutputType
     */
    select?: SchedulingLinkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchedulingLinkCountOutputType without action
   */
  export type SchedulingLinkCountOutputTypeCountMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    emailVerified: Date | null
    name: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    emailVerified: Date | null
    name: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    emailVerified: number
    name: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    emailVerified: Date | null
    name: string | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    schedulingLinks?: boolean | User$schedulingLinksArgs<ExtArgs>
    schedulingWindows?: boolean | User$schedulingWindowsArgs<ExtArgs>
    meetings?: boolean | User$meetingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    schedulingLinks?: boolean | User$schedulingLinksArgs<ExtArgs>
    schedulingWindows?: boolean | User$schedulingWindowsArgs<ExtArgs>
    meetings?: boolean | User$meetingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      schedulingLinks: Prisma.$SchedulingLinkPayload<ExtArgs>[]
      schedulingWindows: Prisma.$SchedulingWindowPayload<ExtArgs>[]
      meetings: Prisma.$MeetingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      emailVerified: Date | null
      name: string | null
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany"> | Null>
    schedulingLinks<T extends User$schedulingLinksArgs<ExtArgs> = {}>(args?: Subset<T, User$schedulingLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingLinkPayload<ExtArgs>, T, "findMany"> | Null>
    schedulingWindows<T extends User$schedulingWindowsArgs<ExtArgs> = {}>(args?: Subset<T, User$schedulingWindowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingWindowPayload<ExtArgs>, T, "findMany"> | Null>
    meetings<T extends User$meetingsArgs<ExtArgs> = {}>(args?: Subset<T, User$meetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly name: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.schedulingLinks
   */
  export type User$schedulingLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingLink
     */
    select?: SchedulingLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingLinkInclude<ExtArgs> | null
    where?: SchedulingLinkWhereInput
    orderBy?: SchedulingLinkOrderByWithRelationInput | SchedulingLinkOrderByWithRelationInput[]
    cursor?: SchedulingLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchedulingLinkScalarFieldEnum | SchedulingLinkScalarFieldEnum[]
  }

  /**
   * User.schedulingWindows
   */
  export type User$schedulingWindowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingWindow
     */
    select?: SchedulingWindowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingWindowInclude<ExtArgs> | null
    where?: SchedulingWindowWhereInput
    orderBy?: SchedulingWindowOrderByWithRelationInput | SchedulingWindowOrderByWithRelationInput[]
    cursor?: SchedulingWindowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchedulingWindowScalarFieldEnum | SchedulingWindowScalarFieldEnum[]
  }

  /**
   * User.meetings
   */
  export type User$meetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    cursor?: MeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model SchedulingWindow
   */

  export type AggregateSchedulingWindow = {
    _count: SchedulingWindowCountAggregateOutputType | null
    _avg: SchedulingWindowAvgAggregateOutputType | null
    _sum: SchedulingWindowSumAggregateOutputType | null
    _min: SchedulingWindowMinAggregateOutputType | null
    _max: SchedulingWindowMaxAggregateOutputType | null
  }

  export type SchedulingWindowAvgAggregateOutputType = {
    dayOfWeek: number | null
    startHour: number | null
    endHour: number | null
  }

  export type SchedulingWindowSumAggregateOutputType = {
    dayOfWeek: number | null
    startHour: number | null
    endHour: number | null
  }

  export type SchedulingWindowMinAggregateOutputType = {
    id: string | null
    userId: string | null
    dayOfWeek: number | null
    startHour: number | null
    endHour: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchedulingWindowMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    dayOfWeek: number | null
    startHour: number | null
    endHour: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchedulingWindowCountAggregateOutputType = {
    id: number
    userId: number
    dayOfWeek: number
    startHour: number
    endHour: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SchedulingWindowAvgAggregateInputType = {
    dayOfWeek?: true
    startHour?: true
    endHour?: true
  }

  export type SchedulingWindowSumAggregateInputType = {
    dayOfWeek?: true
    startHour?: true
    endHour?: true
  }

  export type SchedulingWindowMinAggregateInputType = {
    id?: true
    userId?: true
    dayOfWeek?: true
    startHour?: true
    endHour?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchedulingWindowMaxAggregateInputType = {
    id?: true
    userId?: true
    dayOfWeek?: true
    startHour?: true
    endHour?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchedulingWindowCountAggregateInputType = {
    id?: true
    userId?: true
    dayOfWeek?: true
    startHour?: true
    endHour?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SchedulingWindowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchedulingWindow to aggregate.
     */
    where?: SchedulingWindowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchedulingWindows to fetch.
     */
    orderBy?: SchedulingWindowOrderByWithRelationInput | SchedulingWindowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchedulingWindowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchedulingWindows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchedulingWindows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SchedulingWindows
    **/
    _count?: true | SchedulingWindowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchedulingWindowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchedulingWindowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchedulingWindowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchedulingWindowMaxAggregateInputType
  }

  export type GetSchedulingWindowAggregateType<T extends SchedulingWindowAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedulingWindow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedulingWindow[P]>
      : GetScalarType<T[P], AggregateSchedulingWindow[P]>
  }




  export type SchedulingWindowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchedulingWindowWhereInput
    orderBy?: SchedulingWindowOrderByWithAggregationInput | SchedulingWindowOrderByWithAggregationInput[]
    by: SchedulingWindowScalarFieldEnum[] | SchedulingWindowScalarFieldEnum
    having?: SchedulingWindowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchedulingWindowCountAggregateInputType | true
    _avg?: SchedulingWindowAvgAggregateInputType
    _sum?: SchedulingWindowSumAggregateInputType
    _min?: SchedulingWindowMinAggregateInputType
    _max?: SchedulingWindowMaxAggregateInputType
  }

  export type SchedulingWindowGroupByOutputType = {
    id: string
    userId: string
    dayOfWeek: number
    startHour: number
    endHour: number
    createdAt: Date
    updatedAt: Date
    _count: SchedulingWindowCountAggregateOutputType | null
    _avg: SchedulingWindowAvgAggregateOutputType | null
    _sum: SchedulingWindowSumAggregateOutputType | null
    _min: SchedulingWindowMinAggregateOutputType | null
    _max: SchedulingWindowMaxAggregateOutputType | null
  }

  type GetSchedulingWindowGroupByPayload<T extends SchedulingWindowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchedulingWindowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchedulingWindowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchedulingWindowGroupByOutputType[P]>
            : GetScalarType<T[P], SchedulingWindowGroupByOutputType[P]>
        }
      >
    >


  export type SchedulingWindowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dayOfWeek?: boolean
    startHour?: boolean
    endHour?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedulingWindow"]>

  export type SchedulingWindowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dayOfWeek?: boolean
    startHour?: boolean
    endHour?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedulingWindow"]>

  export type SchedulingWindowSelectScalar = {
    id?: boolean
    userId?: boolean
    dayOfWeek?: boolean
    startHour?: boolean
    endHour?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SchedulingWindowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SchedulingWindowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SchedulingWindowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SchedulingWindow"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      dayOfWeek: number
      startHour: number
      endHour: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["schedulingWindow"]>
    composites: {}
  }

  type SchedulingWindowGetPayload<S extends boolean | null | undefined | SchedulingWindowDefaultArgs> = $Result.GetResult<Prisma.$SchedulingWindowPayload, S>

  type SchedulingWindowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SchedulingWindowFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SchedulingWindowCountAggregateInputType | true
    }

  export interface SchedulingWindowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SchedulingWindow'], meta: { name: 'SchedulingWindow' } }
    /**
     * Find zero or one SchedulingWindow that matches the filter.
     * @param {SchedulingWindowFindUniqueArgs} args - Arguments to find a SchedulingWindow
     * @example
     * // Get one SchedulingWindow
     * const schedulingWindow = await prisma.schedulingWindow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchedulingWindowFindUniqueArgs>(args: SelectSubset<T, SchedulingWindowFindUniqueArgs<ExtArgs>>): Prisma__SchedulingWindowClient<$Result.GetResult<Prisma.$SchedulingWindowPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SchedulingWindow that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SchedulingWindowFindUniqueOrThrowArgs} args - Arguments to find a SchedulingWindow
     * @example
     * // Get one SchedulingWindow
     * const schedulingWindow = await prisma.schedulingWindow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchedulingWindowFindUniqueOrThrowArgs>(args: SelectSubset<T, SchedulingWindowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchedulingWindowClient<$Result.GetResult<Prisma.$SchedulingWindowPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SchedulingWindow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingWindowFindFirstArgs} args - Arguments to find a SchedulingWindow
     * @example
     * // Get one SchedulingWindow
     * const schedulingWindow = await prisma.schedulingWindow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchedulingWindowFindFirstArgs>(args?: SelectSubset<T, SchedulingWindowFindFirstArgs<ExtArgs>>): Prisma__SchedulingWindowClient<$Result.GetResult<Prisma.$SchedulingWindowPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SchedulingWindow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingWindowFindFirstOrThrowArgs} args - Arguments to find a SchedulingWindow
     * @example
     * // Get one SchedulingWindow
     * const schedulingWindow = await prisma.schedulingWindow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchedulingWindowFindFirstOrThrowArgs>(args?: SelectSubset<T, SchedulingWindowFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchedulingWindowClient<$Result.GetResult<Prisma.$SchedulingWindowPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SchedulingWindows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingWindowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SchedulingWindows
     * const schedulingWindows = await prisma.schedulingWindow.findMany()
     * 
     * // Get first 10 SchedulingWindows
     * const schedulingWindows = await prisma.schedulingWindow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schedulingWindowWithIdOnly = await prisma.schedulingWindow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchedulingWindowFindManyArgs>(args?: SelectSubset<T, SchedulingWindowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingWindowPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SchedulingWindow.
     * @param {SchedulingWindowCreateArgs} args - Arguments to create a SchedulingWindow.
     * @example
     * // Create one SchedulingWindow
     * const SchedulingWindow = await prisma.schedulingWindow.create({
     *   data: {
     *     // ... data to create a SchedulingWindow
     *   }
     * })
     * 
     */
    create<T extends SchedulingWindowCreateArgs>(args: SelectSubset<T, SchedulingWindowCreateArgs<ExtArgs>>): Prisma__SchedulingWindowClient<$Result.GetResult<Prisma.$SchedulingWindowPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SchedulingWindows.
     * @param {SchedulingWindowCreateManyArgs} args - Arguments to create many SchedulingWindows.
     * @example
     * // Create many SchedulingWindows
     * const schedulingWindow = await prisma.schedulingWindow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchedulingWindowCreateManyArgs>(args?: SelectSubset<T, SchedulingWindowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SchedulingWindows and returns the data saved in the database.
     * @param {SchedulingWindowCreateManyAndReturnArgs} args - Arguments to create many SchedulingWindows.
     * @example
     * // Create many SchedulingWindows
     * const schedulingWindow = await prisma.schedulingWindow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SchedulingWindows and only return the `id`
     * const schedulingWindowWithIdOnly = await prisma.schedulingWindow.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchedulingWindowCreateManyAndReturnArgs>(args?: SelectSubset<T, SchedulingWindowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingWindowPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SchedulingWindow.
     * @param {SchedulingWindowDeleteArgs} args - Arguments to delete one SchedulingWindow.
     * @example
     * // Delete one SchedulingWindow
     * const SchedulingWindow = await prisma.schedulingWindow.delete({
     *   where: {
     *     // ... filter to delete one SchedulingWindow
     *   }
     * })
     * 
     */
    delete<T extends SchedulingWindowDeleteArgs>(args: SelectSubset<T, SchedulingWindowDeleteArgs<ExtArgs>>): Prisma__SchedulingWindowClient<$Result.GetResult<Prisma.$SchedulingWindowPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SchedulingWindow.
     * @param {SchedulingWindowUpdateArgs} args - Arguments to update one SchedulingWindow.
     * @example
     * // Update one SchedulingWindow
     * const schedulingWindow = await prisma.schedulingWindow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchedulingWindowUpdateArgs>(args: SelectSubset<T, SchedulingWindowUpdateArgs<ExtArgs>>): Prisma__SchedulingWindowClient<$Result.GetResult<Prisma.$SchedulingWindowPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SchedulingWindows.
     * @param {SchedulingWindowDeleteManyArgs} args - Arguments to filter SchedulingWindows to delete.
     * @example
     * // Delete a few SchedulingWindows
     * const { count } = await prisma.schedulingWindow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchedulingWindowDeleteManyArgs>(args?: SelectSubset<T, SchedulingWindowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SchedulingWindows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingWindowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SchedulingWindows
     * const schedulingWindow = await prisma.schedulingWindow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchedulingWindowUpdateManyArgs>(args: SelectSubset<T, SchedulingWindowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SchedulingWindow.
     * @param {SchedulingWindowUpsertArgs} args - Arguments to update or create a SchedulingWindow.
     * @example
     * // Update or create a SchedulingWindow
     * const schedulingWindow = await prisma.schedulingWindow.upsert({
     *   create: {
     *     // ... data to create a SchedulingWindow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SchedulingWindow we want to update
     *   }
     * })
     */
    upsert<T extends SchedulingWindowUpsertArgs>(args: SelectSubset<T, SchedulingWindowUpsertArgs<ExtArgs>>): Prisma__SchedulingWindowClient<$Result.GetResult<Prisma.$SchedulingWindowPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SchedulingWindows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingWindowCountArgs} args - Arguments to filter SchedulingWindows to count.
     * @example
     * // Count the number of SchedulingWindows
     * const count = await prisma.schedulingWindow.count({
     *   where: {
     *     // ... the filter for the SchedulingWindows we want to count
     *   }
     * })
    **/
    count<T extends SchedulingWindowCountArgs>(
      args?: Subset<T, SchedulingWindowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchedulingWindowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SchedulingWindow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingWindowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchedulingWindowAggregateArgs>(args: Subset<T, SchedulingWindowAggregateArgs>): Prisma.PrismaPromise<GetSchedulingWindowAggregateType<T>>

    /**
     * Group by SchedulingWindow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingWindowGroupByArgs} args - Group by arguments.
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
      T extends SchedulingWindowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchedulingWindowGroupByArgs['orderBy'] }
        : { orderBy?: SchedulingWindowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SchedulingWindowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchedulingWindowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SchedulingWindow model
   */
  readonly fields: SchedulingWindowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SchedulingWindow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchedulingWindowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SchedulingWindow model
   */ 
  interface SchedulingWindowFieldRefs {
    readonly id: FieldRef<"SchedulingWindow", 'String'>
    readonly userId: FieldRef<"SchedulingWindow", 'String'>
    readonly dayOfWeek: FieldRef<"SchedulingWindow", 'Int'>
    readonly startHour: FieldRef<"SchedulingWindow", 'Int'>
    readonly endHour: FieldRef<"SchedulingWindow", 'Int'>
    readonly createdAt: FieldRef<"SchedulingWindow", 'DateTime'>
    readonly updatedAt: FieldRef<"SchedulingWindow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SchedulingWindow findUnique
   */
  export type SchedulingWindowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingWindow
     */
    select?: SchedulingWindowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingWindowInclude<ExtArgs> | null
    /**
     * Filter, which SchedulingWindow to fetch.
     */
    where: SchedulingWindowWhereUniqueInput
  }

  /**
   * SchedulingWindow findUniqueOrThrow
   */
  export type SchedulingWindowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingWindow
     */
    select?: SchedulingWindowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingWindowInclude<ExtArgs> | null
    /**
     * Filter, which SchedulingWindow to fetch.
     */
    where: SchedulingWindowWhereUniqueInput
  }

  /**
   * SchedulingWindow findFirst
   */
  export type SchedulingWindowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingWindow
     */
    select?: SchedulingWindowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingWindowInclude<ExtArgs> | null
    /**
     * Filter, which SchedulingWindow to fetch.
     */
    where?: SchedulingWindowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchedulingWindows to fetch.
     */
    orderBy?: SchedulingWindowOrderByWithRelationInput | SchedulingWindowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchedulingWindows.
     */
    cursor?: SchedulingWindowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchedulingWindows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchedulingWindows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchedulingWindows.
     */
    distinct?: SchedulingWindowScalarFieldEnum | SchedulingWindowScalarFieldEnum[]
  }

  /**
   * SchedulingWindow findFirstOrThrow
   */
  export type SchedulingWindowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingWindow
     */
    select?: SchedulingWindowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingWindowInclude<ExtArgs> | null
    /**
     * Filter, which SchedulingWindow to fetch.
     */
    where?: SchedulingWindowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchedulingWindows to fetch.
     */
    orderBy?: SchedulingWindowOrderByWithRelationInput | SchedulingWindowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchedulingWindows.
     */
    cursor?: SchedulingWindowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchedulingWindows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchedulingWindows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchedulingWindows.
     */
    distinct?: SchedulingWindowScalarFieldEnum | SchedulingWindowScalarFieldEnum[]
  }

  /**
   * SchedulingWindow findMany
   */
  export type SchedulingWindowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingWindow
     */
    select?: SchedulingWindowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingWindowInclude<ExtArgs> | null
    /**
     * Filter, which SchedulingWindows to fetch.
     */
    where?: SchedulingWindowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchedulingWindows to fetch.
     */
    orderBy?: SchedulingWindowOrderByWithRelationInput | SchedulingWindowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SchedulingWindows.
     */
    cursor?: SchedulingWindowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchedulingWindows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchedulingWindows.
     */
    skip?: number
    distinct?: SchedulingWindowScalarFieldEnum | SchedulingWindowScalarFieldEnum[]
  }

  /**
   * SchedulingWindow create
   */
  export type SchedulingWindowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingWindow
     */
    select?: SchedulingWindowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingWindowInclude<ExtArgs> | null
    /**
     * The data needed to create a SchedulingWindow.
     */
    data: XOR<SchedulingWindowCreateInput, SchedulingWindowUncheckedCreateInput>
  }

  /**
   * SchedulingWindow createMany
   */
  export type SchedulingWindowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SchedulingWindows.
     */
    data: SchedulingWindowCreateManyInput | SchedulingWindowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SchedulingWindow createManyAndReturn
   */
  export type SchedulingWindowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingWindow
     */
    select?: SchedulingWindowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SchedulingWindows.
     */
    data: SchedulingWindowCreateManyInput | SchedulingWindowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingWindowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SchedulingWindow update
   */
  export type SchedulingWindowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingWindow
     */
    select?: SchedulingWindowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingWindowInclude<ExtArgs> | null
    /**
     * The data needed to update a SchedulingWindow.
     */
    data: XOR<SchedulingWindowUpdateInput, SchedulingWindowUncheckedUpdateInput>
    /**
     * Choose, which SchedulingWindow to update.
     */
    where: SchedulingWindowWhereUniqueInput
  }

  /**
   * SchedulingWindow updateMany
   */
  export type SchedulingWindowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SchedulingWindows.
     */
    data: XOR<SchedulingWindowUpdateManyMutationInput, SchedulingWindowUncheckedUpdateManyInput>
    /**
     * Filter which SchedulingWindows to update
     */
    where?: SchedulingWindowWhereInput
  }

  /**
   * SchedulingWindow upsert
   */
  export type SchedulingWindowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingWindow
     */
    select?: SchedulingWindowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingWindowInclude<ExtArgs> | null
    /**
     * The filter to search for the SchedulingWindow to update in case it exists.
     */
    where: SchedulingWindowWhereUniqueInput
    /**
     * In case the SchedulingWindow found by the `where` argument doesn't exist, create a new SchedulingWindow with this data.
     */
    create: XOR<SchedulingWindowCreateInput, SchedulingWindowUncheckedCreateInput>
    /**
     * In case the SchedulingWindow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchedulingWindowUpdateInput, SchedulingWindowUncheckedUpdateInput>
  }

  /**
   * SchedulingWindow delete
   */
  export type SchedulingWindowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingWindow
     */
    select?: SchedulingWindowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingWindowInclude<ExtArgs> | null
    /**
     * Filter which SchedulingWindow to delete.
     */
    where: SchedulingWindowWhereUniqueInput
  }

  /**
   * SchedulingWindow deleteMany
   */
  export type SchedulingWindowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchedulingWindows to delete
     */
    where?: SchedulingWindowWhereInput
  }

  /**
   * SchedulingWindow without action
   */
  export type SchedulingWindowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingWindow
     */
    select?: SchedulingWindowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingWindowInclude<ExtArgs> | null
  }


  /**
   * Model SchedulingLink
   */

  export type AggregateSchedulingLink = {
    _count: SchedulingLinkCountAggregateOutputType | null
    _avg: SchedulingLinkAvgAggregateOutputType | null
    _sum: SchedulingLinkSumAggregateOutputType | null
    _min: SchedulingLinkMinAggregateOutputType | null
    _max: SchedulingLinkMaxAggregateOutputType | null
  }

  export type SchedulingLinkAvgAggregateOutputType = {
    maxUses: number | null
    usageCount: number | null
    meetingLength: number | null
    maxDaysInAdvance: number | null
  }

  export type SchedulingLinkSumAggregateOutputType = {
    maxUses: number | null
    usageCount: number | null
    meetingLength: number | null
    maxDaysInAdvance: number | null
  }

  export type SchedulingLinkMinAggregateOutputType = {
    id: string | null
    userId: string | null
    maxUses: number | null
    usageCount: number | null
    expirationDate: Date | null
    meetingLength: number | null
    maxDaysInAdvance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchedulingLinkMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    maxUses: number | null
    usageCount: number | null
    expirationDate: Date | null
    meetingLength: number | null
    maxDaysInAdvance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchedulingLinkCountAggregateOutputType = {
    id: number
    userId: number
    maxUses: number
    usageCount: number
    expirationDate: number
    meetingLength: number
    maxDaysInAdvance: number
    formQuestions: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SchedulingLinkAvgAggregateInputType = {
    maxUses?: true
    usageCount?: true
    meetingLength?: true
    maxDaysInAdvance?: true
  }

  export type SchedulingLinkSumAggregateInputType = {
    maxUses?: true
    usageCount?: true
    meetingLength?: true
    maxDaysInAdvance?: true
  }

  export type SchedulingLinkMinAggregateInputType = {
    id?: true
    userId?: true
    maxUses?: true
    usageCount?: true
    expirationDate?: true
    meetingLength?: true
    maxDaysInAdvance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchedulingLinkMaxAggregateInputType = {
    id?: true
    userId?: true
    maxUses?: true
    usageCount?: true
    expirationDate?: true
    meetingLength?: true
    maxDaysInAdvance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchedulingLinkCountAggregateInputType = {
    id?: true
    userId?: true
    maxUses?: true
    usageCount?: true
    expirationDate?: true
    meetingLength?: true
    maxDaysInAdvance?: true
    formQuestions?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SchedulingLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchedulingLink to aggregate.
     */
    where?: SchedulingLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchedulingLinks to fetch.
     */
    orderBy?: SchedulingLinkOrderByWithRelationInput | SchedulingLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchedulingLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchedulingLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchedulingLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SchedulingLinks
    **/
    _count?: true | SchedulingLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchedulingLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchedulingLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchedulingLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchedulingLinkMaxAggregateInputType
  }

  export type GetSchedulingLinkAggregateType<T extends SchedulingLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedulingLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedulingLink[P]>
      : GetScalarType<T[P], AggregateSchedulingLink[P]>
  }




  export type SchedulingLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchedulingLinkWhereInput
    orderBy?: SchedulingLinkOrderByWithAggregationInput | SchedulingLinkOrderByWithAggregationInput[]
    by: SchedulingLinkScalarFieldEnum[] | SchedulingLinkScalarFieldEnum
    having?: SchedulingLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchedulingLinkCountAggregateInputType | true
    _avg?: SchedulingLinkAvgAggregateInputType
    _sum?: SchedulingLinkSumAggregateInputType
    _min?: SchedulingLinkMinAggregateInputType
    _max?: SchedulingLinkMaxAggregateInputType
  }

  export type SchedulingLinkGroupByOutputType = {
    id: string
    userId: string
    maxUses: number | null
    usageCount: number
    expirationDate: Date | null
    meetingLength: number
    maxDaysInAdvance: number
    formQuestions: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: SchedulingLinkCountAggregateOutputType | null
    _avg: SchedulingLinkAvgAggregateOutputType | null
    _sum: SchedulingLinkSumAggregateOutputType | null
    _min: SchedulingLinkMinAggregateOutputType | null
    _max: SchedulingLinkMaxAggregateOutputType | null
  }

  type GetSchedulingLinkGroupByPayload<T extends SchedulingLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchedulingLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchedulingLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchedulingLinkGroupByOutputType[P]>
            : GetScalarType<T[P], SchedulingLinkGroupByOutputType[P]>
        }
      >
    >


  export type SchedulingLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    maxUses?: boolean
    usageCount?: boolean
    expirationDate?: boolean
    meetingLength?: boolean
    maxDaysInAdvance?: boolean
    formQuestions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meetings?: boolean | SchedulingLink$meetingsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | SchedulingLinkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedulingLink"]>

  export type SchedulingLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    maxUses?: boolean
    usageCount?: boolean
    expirationDate?: boolean
    meetingLength?: boolean
    maxDaysInAdvance?: boolean
    formQuestions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedulingLink"]>

  export type SchedulingLinkSelectScalar = {
    id?: boolean
    userId?: boolean
    maxUses?: boolean
    usageCount?: boolean
    expirationDate?: boolean
    meetingLength?: boolean
    maxDaysInAdvance?: boolean
    formQuestions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SchedulingLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | SchedulingLink$meetingsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | SchedulingLinkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SchedulingLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SchedulingLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SchedulingLink"
    objects: {
      meetings: Prisma.$MeetingPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      maxUses: number | null
      usageCount: number
      expirationDate: Date | null
      meetingLength: number
      maxDaysInAdvance: number
      formQuestions: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["schedulingLink"]>
    composites: {}
  }

  type SchedulingLinkGetPayload<S extends boolean | null | undefined | SchedulingLinkDefaultArgs> = $Result.GetResult<Prisma.$SchedulingLinkPayload, S>

  type SchedulingLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SchedulingLinkFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SchedulingLinkCountAggregateInputType | true
    }

  export interface SchedulingLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SchedulingLink'], meta: { name: 'SchedulingLink' } }
    /**
     * Find zero or one SchedulingLink that matches the filter.
     * @param {SchedulingLinkFindUniqueArgs} args - Arguments to find a SchedulingLink
     * @example
     * // Get one SchedulingLink
     * const schedulingLink = await prisma.schedulingLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchedulingLinkFindUniqueArgs>(args: SelectSubset<T, SchedulingLinkFindUniqueArgs<ExtArgs>>): Prisma__SchedulingLinkClient<$Result.GetResult<Prisma.$SchedulingLinkPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SchedulingLink that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SchedulingLinkFindUniqueOrThrowArgs} args - Arguments to find a SchedulingLink
     * @example
     * // Get one SchedulingLink
     * const schedulingLink = await prisma.schedulingLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchedulingLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, SchedulingLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchedulingLinkClient<$Result.GetResult<Prisma.$SchedulingLinkPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SchedulingLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingLinkFindFirstArgs} args - Arguments to find a SchedulingLink
     * @example
     * // Get one SchedulingLink
     * const schedulingLink = await prisma.schedulingLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchedulingLinkFindFirstArgs>(args?: SelectSubset<T, SchedulingLinkFindFirstArgs<ExtArgs>>): Prisma__SchedulingLinkClient<$Result.GetResult<Prisma.$SchedulingLinkPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SchedulingLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingLinkFindFirstOrThrowArgs} args - Arguments to find a SchedulingLink
     * @example
     * // Get one SchedulingLink
     * const schedulingLink = await prisma.schedulingLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchedulingLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, SchedulingLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchedulingLinkClient<$Result.GetResult<Prisma.$SchedulingLinkPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SchedulingLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SchedulingLinks
     * const schedulingLinks = await prisma.schedulingLink.findMany()
     * 
     * // Get first 10 SchedulingLinks
     * const schedulingLinks = await prisma.schedulingLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schedulingLinkWithIdOnly = await prisma.schedulingLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchedulingLinkFindManyArgs>(args?: SelectSubset<T, SchedulingLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingLinkPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SchedulingLink.
     * @param {SchedulingLinkCreateArgs} args - Arguments to create a SchedulingLink.
     * @example
     * // Create one SchedulingLink
     * const SchedulingLink = await prisma.schedulingLink.create({
     *   data: {
     *     // ... data to create a SchedulingLink
     *   }
     * })
     * 
     */
    create<T extends SchedulingLinkCreateArgs>(args: SelectSubset<T, SchedulingLinkCreateArgs<ExtArgs>>): Prisma__SchedulingLinkClient<$Result.GetResult<Prisma.$SchedulingLinkPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SchedulingLinks.
     * @param {SchedulingLinkCreateManyArgs} args - Arguments to create many SchedulingLinks.
     * @example
     * // Create many SchedulingLinks
     * const schedulingLink = await prisma.schedulingLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchedulingLinkCreateManyArgs>(args?: SelectSubset<T, SchedulingLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SchedulingLinks and returns the data saved in the database.
     * @param {SchedulingLinkCreateManyAndReturnArgs} args - Arguments to create many SchedulingLinks.
     * @example
     * // Create many SchedulingLinks
     * const schedulingLink = await prisma.schedulingLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SchedulingLinks and only return the `id`
     * const schedulingLinkWithIdOnly = await prisma.schedulingLink.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchedulingLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, SchedulingLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingLinkPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SchedulingLink.
     * @param {SchedulingLinkDeleteArgs} args - Arguments to delete one SchedulingLink.
     * @example
     * // Delete one SchedulingLink
     * const SchedulingLink = await prisma.schedulingLink.delete({
     *   where: {
     *     // ... filter to delete one SchedulingLink
     *   }
     * })
     * 
     */
    delete<T extends SchedulingLinkDeleteArgs>(args: SelectSubset<T, SchedulingLinkDeleteArgs<ExtArgs>>): Prisma__SchedulingLinkClient<$Result.GetResult<Prisma.$SchedulingLinkPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SchedulingLink.
     * @param {SchedulingLinkUpdateArgs} args - Arguments to update one SchedulingLink.
     * @example
     * // Update one SchedulingLink
     * const schedulingLink = await prisma.schedulingLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchedulingLinkUpdateArgs>(args: SelectSubset<T, SchedulingLinkUpdateArgs<ExtArgs>>): Prisma__SchedulingLinkClient<$Result.GetResult<Prisma.$SchedulingLinkPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SchedulingLinks.
     * @param {SchedulingLinkDeleteManyArgs} args - Arguments to filter SchedulingLinks to delete.
     * @example
     * // Delete a few SchedulingLinks
     * const { count } = await prisma.schedulingLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchedulingLinkDeleteManyArgs>(args?: SelectSubset<T, SchedulingLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SchedulingLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SchedulingLinks
     * const schedulingLink = await prisma.schedulingLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchedulingLinkUpdateManyArgs>(args: SelectSubset<T, SchedulingLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SchedulingLink.
     * @param {SchedulingLinkUpsertArgs} args - Arguments to update or create a SchedulingLink.
     * @example
     * // Update or create a SchedulingLink
     * const schedulingLink = await prisma.schedulingLink.upsert({
     *   create: {
     *     // ... data to create a SchedulingLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SchedulingLink we want to update
     *   }
     * })
     */
    upsert<T extends SchedulingLinkUpsertArgs>(args: SelectSubset<T, SchedulingLinkUpsertArgs<ExtArgs>>): Prisma__SchedulingLinkClient<$Result.GetResult<Prisma.$SchedulingLinkPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SchedulingLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingLinkCountArgs} args - Arguments to filter SchedulingLinks to count.
     * @example
     * // Count the number of SchedulingLinks
     * const count = await prisma.schedulingLink.count({
     *   where: {
     *     // ... the filter for the SchedulingLinks we want to count
     *   }
     * })
    **/
    count<T extends SchedulingLinkCountArgs>(
      args?: Subset<T, SchedulingLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchedulingLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SchedulingLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchedulingLinkAggregateArgs>(args: Subset<T, SchedulingLinkAggregateArgs>): Prisma.PrismaPromise<GetSchedulingLinkAggregateType<T>>

    /**
     * Group by SchedulingLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingLinkGroupByArgs} args - Group by arguments.
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
      T extends SchedulingLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchedulingLinkGroupByArgs['orderBy'] }
        : { orderBy?: SchedulingLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SchedulingLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchedulingLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SchedulingLink model
   */
  readonly fields: SchedulingLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SchedulingLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchedulingLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meetings<T extends SchedulingLink$meetingsArgs<ExtArgs> = {}>(args?: Subset<T, SchedulingLink$meetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany"> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SchedulingLink model
   */ 
  interface SchedulingLinkFieldRefs {
    readonly id: FieldRef<"SchedulingLink", 'String'>
    readonly userId: FieldRef<"SchedulingLink", 'String'>
    readonly maxUses: FieldRef<"SchedulingLink", 'Int'>
    readonly usageCount: FieldRef<"SchedulingLink", 'Int'>
    readonly expirationDate: FieldRef<"SchedulingLink", 'DateTime'>
    readonly meetingLength: FieldRef<"SchedulingLink", 'Int'>
    readonly maxDaysInAdvance: FieldRef<"SchedulingLink", 'Int'>
    readonly formQuestions: FieldRef<"SchedulingLink", 'Json'>
    readonly createdAt: FieldRef<"SchedulingLink", 'DateTime'>
    readonly updatedAt: FieldRef<"SchedulingLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SchedulingLink findUnique
   */
  export type SchedulingLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingLink
     */
    select?: SchedulingLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingLinkInclude<ExtArgs> | null
    /**
     * Filter, which SchedulingLink to fetch.
     */
    where: SchedulingLinkWhereUniqueInput
  }

  /**
   * SchedulingLink findUniqueOrThrow
   */
  export type SchedulingLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingLink
     */
    select?: SchedulingLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingLinkInclude<ExtArgs> | null
    /**
     * Filter, which SchedulingLink to fetch.
     */
    where: SchedulingLinkWhereUniqueInput
  }

  /**
   * SchedulingLink findFirst
   */
  export type SchedulingLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingLink
     */
    select?: SchedulingLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingLinkInclude<ExtArgs> | null
    /**
     * Filter, which SchedulingLink to fetch.
     */
    where?: SchedulingLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchedulingLinks to fetch.
     */
    orderBy?: SchedulingLinkOrderByWithRelationInput | SchedulingLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchedulingLinks.
     */
    cursor?: SchedulingLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchedulingLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchedulingLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchedulingLinks.
     */
    distinct?: SchedulingLinkScalarFieldEnum | SchedulingLinkScalarFieldEnum[]
  }

  /**
   * SchedulingLink findFirstOrThrow
   */
  export type SchedulingLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingLink
     */
    select?: SchedulingLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingLinkInclude<ExtArgs> | null
    /**
     * Filter, which SchedulingLink to fetch.
     */
    where?: SchedulingLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchedulingLinks to fetch.
     */
    orderBy?: SchedulingLinkOrderByWithRelationInput | SchedulingLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchedulingLinks.
     */
    cursor?: SchedulingLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchedulingLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchedulingLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchedulingLinks.
     */
    distinct?: SchedulingLinkScalarFieldEnum | SchedulingLinkScalarFieldEnum[]
  }

  /**
   * SchedulingLink findMany
   */
  export type SchedulingLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingLink
     */
    select?: SchedulingLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingLinkInclude<ExtArgs> | null
    /**
     * Filter, which SchedulingLinks to fetch.
     */
    where?: SchedulingLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchedulingLinks to fetch.
     */
    orderBy?: SchedulingLinkOrderByWithRelationInput | SchedulingLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SchedulingLinks.
     */
    cursor?: SchedulingLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchedulingLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchedulingLinks.
     */
    skip?: number
    distinct?: SchedulingLinkScalarFieldEnum | SchedulingLinkScalarFieldEnum[]
  }

  /**
   * SchedulingLink create
   */
  export type SchedulingLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingLink
     */
    select?: SchedulingLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a SchedulingLink.
     */
    data: XOR<SchedulingLinkCreateInput, SchedulingLinkUncheckedCreateInput>
  }

  /**
   * SchedulingLink createMany
   */
  export type SchedulingLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SchedulingLinks.
     */
    data: SchedulingLinkCreateManyInput | SchedulingLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SchedulingLink createManyAndReturn
   */
  export type SchedulingLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingLink
     */
    select?: SchedulingLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SchedulingLinks.
     */
    data: SchedulingLinkCreateManyInput | SchedulingLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SchedulingLink update
   */
  export type SchedulingLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingLink
     */
    select?: SchedulingLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a SchedulingLink.
     */
    data: XOR<SchedulingLinkUpdateInput, SchedulingLinkUncheckedUpdateInput>
    /**
     * Choose, which SchedulingLink to update.
     */
    where: SchedulingLinkWhereUniqueInput
  }

  /**
   * SchedulingLink updateMany
   */
  export type SchedulingLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SchedulingLinks.
     */
    data: XOR<SchedulingLinkUpdateManyMutationInput, SchedulingLinkUncheckedUpdateManyInput>
    /**
     * Filter which SchedulingLinks to update
     */
    where?: SchedulingLinkWhereInput
  }

  /**
   * SchedulingLink upsert
   */
  export type SchedulingLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingLink
     */
    select?: SchedulingLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the SchedulingLink to update in case it exists.
     */
    where: SchedulingLinkWhereUniqueInput
    /**
     * In case the SchedulingLink found by the `where` argument doesn't exist, create a new SchedulingLink with this data.
     */
    create: XOR<SchedulingLinkCreateInput, SchedulingLinkUncheckedCreateInput>
    /**
     * In case the SchedulingLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchedulingLinkUpdateInput, SchedulingLinkUncheckedUpdateInput>
  }

  /**
   * SchedulingLink delete
   */
  export type SchedulingLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingLink
     */
    select?: SchedulingLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingLinkInclude<ExtArgs> | null
    /**
     * Filter which SchedulingLink to delete.
     */
    where: SchedulingLinkWhereUniqueInput
  }

  /**
   * SchedulingLink deleteMany
   */
  export type SchedulingLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchedulingLinks to delete
     */
    where?: SchedulingLinkWhereInput
  }

  /**
   * SchedulingLink.meetings
   */
  export type SchedulingLink$meetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    cursor?: MeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * SchedulingLink without action
   */
  export type SchedulingLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulingLink
     */
    select?: SchedulingLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingLinkInclude<ExtArgs> | null
  }


  /**
   * Model Meeting
   */

  export type AggregateMeeting = {
    _count: MeetingCountAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  export type MeetingMinAggregateOutputType = {
    id: string | null
    schedulingLinkId: string | null
    userId: string | null
    attendeeEmail: string | null
    attendeeLinkedIn: string | null
    startTime: Date | null
    endTime: Date | null
    hubspotContext: string | null
    linkedinContext: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeetingMaxAggregateOutputType = {
    id: string | null
    schedulingLinkId: string | null
    userId: string | null
    attendeeEmail: string | null
    attendeeLinkedIn: string | null
    startTime: Date | null
    endTime: Date | null
    hubspotContext: string | null
    linkedinContext: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeetingCountAggregateOutputType = {
    id: number
    schedulingLinkId: number
    userId: number
    attendeeEmail: number
    attendeeLinkedIn: number
    startTime: number
    endTime: number
    answers: number
    hubspotContext: number
    linkedinContext: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MeetingMinAggregateInputType = {
    id?: true
    schedulingLinkId?: true
    userId?: true
    attendeeEmail?: true
    attendeeLinkedIn?: true
    startTime?: true
    endTime?: true
    hubspotContext?: true
    linkedinContext?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeetingMaxAggregateInputType = {
    id?: true
    schedulingLinkId?: true
    userId?: true
    attendeeEmail?: true
    attendeeLinkedIn?: true
    startTime?: true
    endTime?: true
    hubspotContext?: true
    linkedinContext?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeetingCountAggregateInputType = {
    id?: true
    schedulingLinkId?: true
    userId?: true
    attendeeEmail?: true
    attendeeLinkedIn?: true
    startTime?: true
    endTime?: true
    answers?: true
    hubspotContext?: true
    linkedinContext?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MeetingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meeting to aggregate.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meetings
    **/
    _count?: true | MeetingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingMaxAggregateInputType
  }

  export type GetMeetingAggregateType<T extends MeetingAggregateArgs> = {
        [P in keyof T & keyof AggregateMeeting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeeting[P]>
      : GetScalarType<T[P], AggregateMeeting[P]>
  }




  export type MeetingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithAggregationInput | MeetingOrderByWithAggregationInput[]
    by: MeetingScalarFieldEnum[] | MeetingScalarFieldEnum
    having?: MeetingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingCountAggregateInputType | true
    _min?: MeetingMinAggregateInputType
    _max?: MeetingMaxAggregateInputType
  }

  export type MeetingGroupByOutputType = {
    id: string
    schedulingLinkId: string
    userId: string
    attendeeEmail: string
    attendeeLinkedIn: string | null
    startTime: Date
    endTime: Date
    answers: JsonValue
    hubspotContext: string | null
    linkedinContext: string | null
    createdAt: Date
    updatedAt: Date
    _count: MeetingCountAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  type GetMeetingGroupByPayload<T extends MeetingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingGroupByOutputType[P]>
        }
      >
    >


  export type MeetingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schedulingLinkId?: boolean
    userId?: boolean
    attendeeEmail?: boolean
    attendeeLinkedIn?: boolean
    startTime?: boolean
    endTime?: boolean
    answers?: boolean
    hubspotContext?: boolean
    linkedinContext?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schedulingLink?: boolean | SchedulingLinkDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schedulingLinkId?: boolean
    userId?: boolean
    attendeeEmail?: boolean
    attendeeLinkedIn?: boolean
    startTime?: boolean
    endTime?: boolean
    answers?: boolean
    hubspotContext?: boolean
    linkedinContext?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schedulingLink?: boolean | SchedulingLinkDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectScalar = {
    id?: boolean
    schedulingLinkId?: boolean
    userId?: boolean
    attendeeEmail?: boolean
    attendeeLinkedIn?: boolean
    startTime?: boolean
    endTime?: boolean
    answers?: boolean
    hubspotContext?: boolean
    linkedinContext?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MeetingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedulingLink?: boolean | SchedulingLinkDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MeetingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedulingLink?: boolean | SchedulingLinkDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MeetingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meeting"
    objects: {
      schedulingLink: Prisma.$SchedulingLinkPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      schedulingLinkId: string
      userId: string
      attendeeEmail: string
      attendeeLinkedIn: string | null
      startTime: Date
      endTime: Date
      answers: Prisma.JsonValue
      hubspotContext: string | null
      linkedinContext: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["meeting"]>
    composites: {}
  }

  type MeetingGetPayload<S extends boolean | null | undefined | MeetingDefaultArgs> = $Result.GetResult<Prisma.$MeetingPayload, S>

  type MeetingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MeetingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MeetingCountAggregateInputType | true
    }

  export interface MeetingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meeting'], meta: { name: 'Meeting' } }
    /**
     * Find zero or one Meeting that matches the filter.
     * @param {MeetingFindUniqueArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeetingFindUniqueArgs>(args: SelectSubset<T, MeetingFindUniqueArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Meeting that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MeetingFindUniqueOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeetingFindUniqueOrThrowArgs>(args: SelectSubset<T, MeetingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Meeting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeetingFindFirstArgs>(args?: SelectSubset<T, MeetingFindFirstArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Meeting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeetingFindFirstOrThrowArgs>(args?: SelectSubset<T, MeetingFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Meetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meetings
     * const meetings = await prisma.meeting.findMany()
     * 
     * // Get first 10 Meetings
     * const meetings = await prisma.meeting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meetingWithIdOnly = await prisma.meeting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeetingFindManyArgs>(args?: SelectSubset<T, MeetingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Meeting.
     * @param {MeetingCreateArgs} args - Arguments to create a Meeting.
     * @example
     * // Create one Meeting
     * const Meeting = await prisma.meeting.create({
     *   data: {
     *     // ... data to create a Meeting
     *   }
     * })
     * 
     */
    create<T extends MeetingCreateArgs>(args: SelectSubset<T, MeetingCreateArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Meetings.
     * @param {MeetingCreateManyArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeetingCreateManyArgs>(args?: SelectSubset<T, MeetingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meetings and returns the data saved in the database.
     * @param {MeetingCreateManyAndReturnArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meetings and only return the `id`
     * const meetingWithIdOnly = await prisma.meeting.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeetingCreateManyAndReturnArgs>(args?: SelectSubset<T, MeetingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Meeting.
     * @param {MeetingDeleteArgs} args - Arguments to delete one Meeting.
     * @example
     * // Delete one Meeting
     * const Meeting = await prisma.meeting.delete({
     *   where: {
     *     // ... filter to delete one Meeting
     *   }
     * })
     * 
     */
    delete<T extends MeetingDeleteArgs>(args: SelectSubset<T, MeetingDeleteArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Meeting.
     * @param {MeetingUpdateArgs} args - Arguments to update one Meeting.
     * @example
     * // Update one Meeting
     * const meeting = await prisma.meeting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeetingUpdateArgs>(args: SelectSubset<T, MeetingUpdateArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Meetings.
     * @param {MeetingDeleteManyArgs} args - Arguments to filter Meetings to delete.
     * @example
     * // Delete a few Meetings
     * const { count } = await prisma.meeting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeetingDeleteManyArgs>(args?: SelectSubset<T, MeetingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meetings
     * const meeting = await prisma.meeting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeetingUpdateManyArgs>(args: SelectSubset<T, MeetingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Meeting.
     * @param {MeetingUpsertArgs} args - Arguments to update or create a Meeting.
     * @example
     * // Update or create a Meeting
     * const meeting = await prisma.meeting.upsert({
     *   create: {
     *     // ... data to create a Meeting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meeting we want to update
     *   }
     * })
     */
    upsert<T extends MeetingUpsertArgs>(args: SelectSubset<T, MeetingUpsertArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingCountArgs} args - Arguments to filter Meetings to count.
     * @example
     * // Count the number of Meetings
     * const count = await prisma.meeting.count({
     *   where: {
     *     // ... the filter for the Meetings we want to count
     *   }
     * })
    **/
    count<T extends MeetingCountArgs>(
      args?: Subset<T, MeetingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MeetingAggregateArgs>(args: Subset<T, MeetingAggregateArgs>): Prisma.PrismaPromise<GetMeetingAggregateType<T>>

    /**
     * Group by Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingGroupByArgs} args - Group by arguments.
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
      T extends MeetingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeetingGroupByArgs['orderBy'] }
        : { orderBy?: MeetingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MeetingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meeting model
   */
  readonly fields: MeetingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meeting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeetingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedulingLink<T extends SchedulingLinkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchedulingLinkDefaultArgs<ExtArgs>>): Prisma__SchedulingLinkClient<$Result.GetResult<Prisma.$SchedulingLinkPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Meeting model
   */ 
  interface MeetingFieldRefs {
    readonly id: FieldRef<"Meeting", 'String'>
    readonly schedulingLinkId: FieldRef<"Meeting", 'String'>
    readonly userId: FieldRef<"Meeting", 'String'>
    readonly attendeeEmail: FieldRef<"Meeting", 'String'>
    readonly attendeeLinkedIn: FieldRef<"Meeting", 'String'>
    readonly startTime: FieldRef<"Meeting", 'DateTime'>
    readonly endTime: FieldRef<"Meeting", 'DateTime'>
    readonly answers: FieldRef<"Meeting", 'Json'>
    readonly hubspotContext: FieldRef<"Meeting", 'String'>
    readonly linkedinContext: FieldRef<"Meeting", 'String'>
    readonly createdAt: FieldRef<"Meeting", 'DateTime'>
    readonly updatedAt: FieldRef<"Meeting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meeting findUnique
   */
  export type MeetingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting findUniqueOrThrow
   */
  export type MeetingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting findFirst
   */
  export type MeetingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting findFirstOrThrow
   */
  export type MeetingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting findMany
   */
  export type MeetingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meetings to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting create
   */
  export type MeetingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The data needed to create a Meeting.
     */
    data: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
  }

  /**
   * Meeting createMany
   */
  export type MeetingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meetings.
     */
    data: MeetingCreateManyInput | MeetingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meeting createManyAndReturn
   */
  export type MeetingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Meetings.
     */
    data: MeetingCreateManyInput | MeetingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meeting update
   */
  export type MeetingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The data needed to update a Meeting.
     */
    data: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
    /**
     * Choose, which Meeting to update.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting updateMany
   */
  export type MeetingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meetings.
     */
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyInput>
    /**
     * Filter which Meetings to update
     */
    where?: MeetingWhereInput
  }

  /**
   * Meeting upsert
   */
  export type MeetingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The filter to search for the Meeting to update in case it exists.
     */
    where: MeetingWhereUniqueInput
    /**
     * In case the Meeting found by the `where` argument doesn't exist, create a new Meeting with this data.
     */
    create: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
    /**
     * In case the Meeting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
  }

  /**
   * Meeting delete
   */
  export type MeetingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter which Meeting to delete.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting deleteMany
   */
  export type MeetingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meetings to delete
     */
    where?: MeetingWhereInput
  }

  /**
   * Meeting without action
   */
  export type MeetingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    emailVerified: 'emailVerified',
    name: 'name',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SchedulingWindowScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    dayOfWeek: 'dayOfWeek',
    startHour: 'startHour',
    endHour: 'endHour',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SchedulingWindowScalarFieldEnum = (typeof SchedulingWindowScalarFieldEnum)[keyof typeof SchedulingWindowScalarFieldEnum]


  export const SchedulingLinkScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    maxUses: 'maxUses',
    usageCount: 'usageCount',
    expirationDate: 'expirationDate',
    meetingLength: 'meetingLength',
    maxDaysInAdvance: 'maxDaysInAdvance',
    formQuestions: 'formQuestions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SchedulingLinkScalarFieldEnum = (typeof SchedulingLinkScalarFieldEnum)[keyof typeof SchedulingLinkScalarFieldEnum]


  export const MeetingScalarFieldEnum: {
    id: 'id',
    schedulingLinkId: 'schedulingLinkId',
    userId: 'userId',
    attendeeEmail: 'attendeeEmail',
    attendeeLinkedIn: 'attendeeLinkedIn',
    startTime: 'startTime',
    endTime: 'endTime',
    answers: 'answers',
    hubspotContext: 'hubspotContext',
    linkedinContext: 'linkedinContext',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MeetingScalarFieldEnum = (typeof MeetingScalarFieldEnum)[keyof typeof MeetingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    schedulingLinks?: SchedulingLinkListRelationFilter
    schedulingWindows?: SchedulingWindowListRelationFilter
    meetings?: MeetingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    schedulingLinks?: SchedulingLinkOrderByRelationAggregateInput
    schedulingWindows?: SchedulingWindowOrderByRelationAggregateInput
    meetings?: MeetingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    schedulingLinks?: SchedulingLinkListRelationFilter
    schedulingWindows?: SchedulingWindowListRelationFilter
    meetings?: MeetingListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SchedulingWindowWhereInput = {
    AND?: SchedulingWindowWhereInput | SchedulingWindowWhereInput[]
    OR?: SchedulingWindowWhereInput[]
    NOT?: SchedulingWindowWhereInput | SchedulingWindowWhereInput[]
    id?: StringFilter<"SchedulingWindow"> | string
    userId?: StringFilter<"SchedulingWindow"> | string
    dayOfWeek?: IntFilter<"SchedulingWindow"> | number
    startHour?: IntFilter<"SchedulingWindow"> | number
    endHour?: IntFilter<"SchedulingWindow"> | number
    createdAt?: DateTimeFilter<"SchedulingWindow"> | Date | string
    updatedAt?: DateTimeFilter<"SchedulingWindow"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SchedulingWindowOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    dayOfWeek?: SortOrder
    startHour?: SortOrder
    endHour?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SchedulingWindowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SchedulingWindowWhereInput | SchedulingWindowWhereInput[]
    OR?: SchedulingWindowWhereInput[]
    NOT?: SchedulingWindowWhereInput | SchedulingWindowWhereInput[]
    userId?: StringFilter<"SchedulingWindow"> | string
    dayOfWeek?: IntFilter<"SchedulingWindow"> | number
    startHour?: IntFilter<"SchedulingWindow"> | number
    endHour?: IntFilter<"SchedulingWindow"> | number
    createdAt?: DateTimeFilter<"SchedulingWindow"> | Date | string
    updatedAt?: DateTimeFilter<"SchedulingWindow"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type SchedulingWindowOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    dayOfWeek?: SortOrder
    startHour?: SortOrder
    endHour?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SchedulingWindowCountOrderByAggregateInput
    _avg?: SchedulingWindowAvgOrderByAggregateInput
    _max?: SchedulingWindowMaxOrderByAggregateInput
    _min?: SchedulingWindowMinOrderByAggregateInput
    _sum?: SchedulingWindowSumOrderByAggregateInput
  }

  export type SchedulingWindowScalarWhereWithAggregatesInput = {
    AND?: SchedulingWindowScalarWhereWithAggregatesInput | SchedulingWindowScalarWhereWithAggregatesInput[]
    OR?: SchedulingWindowScalarWhereWithAggregatesInput[]
    NOT?: SchedulingWindowScalarWhereWithAggregatesInput | SchedulingWindowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SchedulingWindow"> | string
    userId?: StringWithAggregatesFilter<"SchedulingWindow"> | string
    dayOfWeek?: IntWithAggregatesFilter<"SchedulingWindow"> | number
    startHour?: IntWithAggregatesFilter<"SchedulingWindow"> | number
    endHour?: IntWithAggregatesFilter<"SchedulingWindow"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SchedulingWindow"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SchedulingWindow"> | Date | string
  }

  export type SchedulingLinkWhereInput = {
    AND?: SchedulingLinkWhereInput | SchedulingLinkWhereInput[]
    OR?: SchedulingLinkWhereInput[]
    NOT?: SchedulingLinkWhereInput | SchedulingLinkWhereInput[]
    id?: StringFilter<"SchedulingLink"> | string
    userId?: StringFilter<"SchedulingLink"> | string
    maxUses?: IntNullableFilter<"SchedulingLink"> | number | null
    usageCount?: IntFilter<"SchedulingLink"> | number
    expirationDate?: DateTimeNullableFilter<"SchedulingLink"> | Date | string | null
    meetingLength?: IntFilter<"SchedulingLink"> | number
    maxDaysInAdvance?: IntFilter<"SchedulingLink"> | number
    formQuestions?: JsonFilter<"SchedulingLink">
    createdAt?: DateTimeFilter<"SchedulingLink"> | Date | string
    updatedAt?: DateTimeFilter<"SchedulingLink"> | Date | string
    meetings?: MeetingListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SchedulingLinkOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    maxUses?: SortOrderInput | SortOrder
    usageCount?: SortOrder
    expirationDate?: SortOrderInput | SortOrder
    meetingLength?: SortOrder
    maxDaysInAdvance?: SortOrder
    formQuestions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meetings?: MeetingOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type SchedulingLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SchedulingLinkWhereInput | SchedulingLinkWhereInput[]
    OR?: SchedulingLinkWhereInput[]
    NOT?: SchedulingLinkWhereInput | SchedulingLinkWhereInput[]
    userId?: StringFilter<"SchedulingLink"> | string
    maxUses?: IntNullableFilter<"SchedulingLink"> | number | null
    usageCount?: IntFilter<"SchedulingLink"> | number
    expirationDate?: DateTimeNullableFilter<"SchedulingLink"> | Date | string | null
    meetingLength?: IntFilter<"SchedulingLink"> | number
    maxDaysInAdvance?: IntFilter<"SchedulingLink"> | number
    formQuestions?: JsonFilter<"SchedulingLink">
    createdAt?: DateTimeFilter<"SchedulingLink"> | Date | string
    updatedAt?: DateTimeFilter<"SchedulingLink"> | Date | string
    meetings?: MeetingListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type SchedulingLinkOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    maxUses?: SortOrderInput | SortOrder
    usageCount?: SortOrder
    expirationDate?: SortOrderInput | SortOrder
    meetingLength?: SortOrder
    maxDaysInAdvance?: SortOrder
    formQuestions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SchedulingLinkCountOrderByAggregateInput
    _avg?: SchedulingLinkAvgOrderByAggregateInput
    _max?: SchedulingLinkMaxOrderByAggregateInput
    _min?: SchedulingLinkMinOrderByAggregateInput
    _sum?: SchedulingLinkSumOrderByAggregateInput
  }

  export type SchedulingLinkScalarWhereWithAggregatesInput = {
    AND?: SchedulingLinkScalarWhereWithAggregatesInput | SchedulingLinkScalarWhereWithAggregatesInput[]
    OR?: SchedulingLinkScalarWhereWithAggregatesInput[]
    NOT?: SchedulingLinkScalarWhereWithAggregatesInput | SchedulingLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SchedulingLink"> | string
    userId?: StringWithAggregatesFilter<"SchedulingLink"> | string
    maxUses?: IntNullableWithAggregatesFilter<"SchedulingLink"> | number | null
    usageCount?: IntWithAggregatesFilter<"SchedulingLink"> | number
    expirationDate?: DateTimeNullableWithAggregatesFilter<"SchedulingLink"> | Date | string | null
    meetingLength?: IntWithAggregatesFilter<"SchedulingLink"> | number
    maxDaysInAdvance?: IntWithAggregatesFilter<"SchedulingLink"> | number
    formQuestions?: JsonWithAggregatesFilter<"SchedulingLink">
    createdAt?: DateTimeWithAggregatesFilter<"SchedulingLink"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SchedulingLink"> | Date | string
  }

  export type MeetingWhereInput = {
    AND?: MeetingWhereInput | MeetingWhereInput[]
    OR?: MeetingWhereInput[]
    NOT?: MeetingWhereInput | MeetingWhereInput[]
    id?: StringFilter<"Meeting"> | string
    schedulingLinkId?: StringFilter<"Meeting"> | string
    userId?: StringFilter<"Meeting"> | string
    attendeeEmail?: StringFilter<"Meeting"> | string
    attendeeLinkedIn?: StringNullableFilter<"Meeting"> | string | null
    startTime?: DateTimeFilter<"Meeting"> | Date | string
    endTime?: DateTimeFilter<"Meeting"> | Date | string
    answers?: JsonFilter<"Meeting">
    hubspotContext?: StringNullableFilter<"Meeting"> | string | null
    linkedinContext?: StringNullableFilter<"Meeting"> | string | null
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
    schedulingLink?: XOR<SchedulingLinkRelationFilter, SchedulingLinkWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type MeetingOrderByWithRelationInput = {
    id?: SortOrder
    schedulingLinkId?: SortOrder
    userId?: SortOrder
    attendeeEmail?: SortOrder
    attendeeLinkedIn?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    answers?: SortOrder
    hubspotContext?: SortOrderInput | SortOrder
    linkedinContext?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schedulingLink?: SchedulingLinkOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MeetingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MeetingWhereInput | MeetingWhereInput[]
    OR?: MeetingWhereInput[]
    NOT?: MeetingWhereInput | MeetingWhereInput[]
    schedulingLinkId?: StringFilter<"Meeting"> | string
    userId?: StringFilter<"Meeting"> | string
    attendeeEmail?: StringFilter<"Meeting"> | string
    attendeeLinkedIn?: StringNullableFilter<"Meeting"> | string | null
    startTime?: DateTimeFilter<"Meeting"> | Date | string
    endTime?: DateTimeFilter<"Meeting"> | Date | string
    answers?: JsonFilter<"Meeting">
    hubspotContext?: StringNullableFilter<"Meeting"> | string | null
    linkedinContext?: StringNullableFilter<"Meeting"> | string | null
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
    schedulingLink?: XOR<SchedulingLinkRelationFilter, SchedulingLinkWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type MeetingOrderByWithAggregationInput = {
    id?: SortOrder
    schedulingLinkId?: SortOrder
    userId?: SortOrder
    attendeeEmail?: SortOrder
    attendeeLinkedIn?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    answers?: SortOrder
    hubspotContext?: SortOrderInput | SortOrder
    linkedinContext?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MeetingCountOrderByAggregateInput
    _max?: MeetingMaxOrderByAggregateInput
    _min?: MeetingMinOrderByAggregateInput
  }

  export type MeetingScalarWhereWithAggregatesInput = {
    AND?: MeetingScalarWhereWithAggregatesInput | MeetingScalarWhereWithAggregatesInput[]
    OR?: MeetingScalarWhereWithAggregatesInput[]
    NOT?: MeetingScalarWhereWithAggregatesInput | MeetingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Meeting"> | string
    schedulingLinkId?: StringWithAggregatesFilter<"Meeting"> | string
    userId?: StringWithAggregatesFilter<"Meeting"> | string
    attendeeEmail?: StringWithAggregatesFilter<"Meeting"> | string
    attendeeLinkedIn?: StringNullableWithAggregatesFilter<"Meeting"> | string | null
    startTime?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    answers?: JsonWithAggregatesFilter<"Meeting">
    hubspotContext?: StringNullableWithAggregatesFilter<"Meeting"> | string | null
    linkedinContext?: StringNullableWithAggregatesFilter<"Meeting"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    schedulingLinks?: SchedulingLinkCreateNestedManyWithoutUserInput
    schedulingWindows?: SchedulingWindowCreateNestedManyWithoutUserInput
    meetings?: MeetingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    schedulingLinks?: SchedulingLinkUncheckedCreateNestedManyWithoutUserInput
    schedulingWindows?: SchedulingWindowUncheckedCreateNestedManyWithoutUserInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    schedulingLinks?: SchedulingLinkUpdateManyWithoutUserNestedInput
    schedulingWindows?: SchedulingWindowUpdateManyWithoutUserNestedInput
    meetings?: MeetingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    schedulingLinks?: SchedulingLinkUncheckedUpdateManyWithoutUserNestedInput
    schedulingWindows?: SchedulingWindowUncheckedUpdateManyWithoutUserNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SchedulingWindowCreateInput = {
    id?: string
    dayOfWeek: number
    startHour: number
    endHour: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSchedulingWindowsInput
  }

  export type SchedulingWindowUncheckedCreateInput = {
    id?: string
    userId: string
    dayOfWeek: number
    startHour: number
    endHour: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchedulingWindowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startHour?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSchedulingWindowsNestedInput
  }

  export type SchedulingWindowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startHour?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchedulingWindowCreateManyInput = {
    id?: string
    userId: string
    dayOfWeek: number
    startHour: number
    endHour: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchedulingWindowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startHour?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchedulingWindowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startHour?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchedulingLinkCreateInput = {
    id?: string
    maxUses?: number | null
    usageCount?: number
    expirationDate?: Date | string | null
    meetingLength: number
    maxDaysInAdvance: number
    formQuestions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    meetings?: MeetingCreateNestedManyWithoutSchedulingLinkInput
    user: UserCreateNestedOneWithoutSchedulingLinksInput
  }

  export type SchedulingLinkUncheckedCreateInput = {
    id?: string
    userId: string
    maxUses?: number | null
    usageCount?: number
    expirationDate?: Date | string | null
    meetingLength: number
    maxDaysInAdvance: number
    formQuestions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    meetings?: MeetingUncheckedCreateNestedManyWithoutSchedulingLinkInput
  }

  export type SchedulingLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usageCount?: IntFieldUpdateOperationsInput | number
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingLength?: IntFieldUpdateOperationsInput | number
    maxDaysInAdvance?: IntFieldUpdateOperationsInput | number
    formQuestions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetings?: MeetingUpdateManyWithoutSchedulingLinkNestedInput
    user?: UserUpdateOneRequiredWithoutSchedulingLinksNestedInput
  }

  export type SchedulingLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usageCount?: IntFieldUpdateOperationsInput | number
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingLength?: IntFieldUpdateOperationsInput | number
    maxDaysInAdvance?: IntFieldUpdateOperationsInput | number
    formQuestions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetings?: MeetingUncheckedUpdateManyWithoutSchedulingLinkNestedInput
  }

  export type SchedulingLinkCreateManyInput = {
    id?: string
    userId: string
    maxUses?: number | null
    usageCount?: number
    expirationDate?: Date | string | null
    meetingLength: number
    maxDaysInAdvance: number
    formQuestions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchedulingLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usageCount?: IntFieldUpdateOperationsInput | number
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingLength?: IntFieldUpdateOperationsInput | number
    maxDaysInAdvance?: IntFieldUpdateOperationsInput | number
    formQuestions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchedulingLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usageCount?: IntFieldUpdateOperationsInput | number
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingLength?: IntFieldUpdateOperationsInput | number
    maxDaysInAdvance?: IntFieldUpdateOperationsInput | number
    formQuestions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingCreateInput = {
    id?: string
    attendeeEmail: string
    attendeeLinkedIn?: string | null
    startTime: Date | string
    endTime: Date | string
    answers: JsonNullValueInput | InputJsonValue
    hubspotContext?: string | null
    linkedinContext?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schedulingLink: SchedulingLinkCreateNestedOneWithoutMeetingsInput
    user: UserCreateNestedOneWithoutMeetingsInput
  }

  export type MeetingUncheckedCreateInput = {
    id?: string
    schedulingLinkId: string
    userId: string
    attendeeEmail: string
    attendeeLinkedIn?: string | null
    startTime: Date | string
    endTime: Date | string
    answers: JsonNullValueInput | InputJsonValue
    hubspotContext?: string | null
    linkedinContext?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendeeEmail?: StringFieldUpdateOperationsInput | string
    attendeeLinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: JsonNullValueInput | InputJsonValue
    hubspotContext?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinContext?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedulingLink?: SchedulingLinkUpdateOneRequiredWithoutMeetingsNestedInput
    user?: UserUpdateOneRequiredWithoutMeetingsNestedInput
  }

  export type MeetingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schedulingLinkId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attendeeEmail?: StringFieldUpdateOperationsInput | string
    attendeeLinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: JsonNullValueInput | InputJsonValue
    hubspotContext?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinContext?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingCreateManyInput = {
    id?: string
    schedulingLinkId: string
    userId: string
    attendeeEmail: string
    attendeeLinkedIn?: string | null
    startTime: Date | string
    endTime: Date | string
    answers: JsonNullValueInput | InputJsonValue
    hubspotContext?: string | null
    linkedinContext?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendeeEmail?: StringFieldUpdateOperationsInput | string
    attendeeLinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: JsonNullValueInput | InputJsonValue
    hubspotContext?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinContext?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    schedulingLinkId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attendeeEmail?: StringFieldUpdateOperationsInput | string
    attendeeLinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: JsonNullValueInput | InputJsonValue
    hubspotContext?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinContext?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SchedulingLinkListRelationFilter = {
    every?: SchedulingLinkWhereInput
    some?: SchedulingLinkWhereInput
    none?: SchedulingLinkWhereInput
  }

  export type SchedulingWindowListRelationFilter = {
    every?: SchedulingWindowWhereInput
    some?: SchedulingWindowWhereInput
    none?: SchedulingWindowWhereInput
  }

  export type MeetingListRelationFilter = {
    every?: MeetingWhereInput
    some?: MeetingWhereInput
    none?: MeetingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchedulingLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchedulingWindowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeetingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SchedulingWindowCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dayOfWeek?: SortOrder
    startHour?: SortOrder
    endHour?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchedulingWindowAvgOrderByAggregateInput = {
    dayOfWeek?: SortOrder
    startHour?: SortOrder
    endHour?: SortOrder
  }

  export type SchedulingWindowMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dayOfWeek?: SortOrder
    startHour?: SortOrder
    endHour?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchedulingWindowMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dayOfWeek?: SortOrder
    startHour?: SortOrder
    endHour?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchedulingWindowSumOrderByAggregateInput = {
    dayOfWeek?: SortOrder
    startHour?: SortOrder
    endHour?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SchedulingLinkCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    maxUses?: SortOrder
    usageCount?: SortOrder
    expirationDate?: SortOrder
    meetingLength?: SortOrder
    maxDaysInAdvance?: SortOrder
    formQuestions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchedulingLinkAvgOrderByAggregateInput = {
    maxUses?: SortOrder
    usageCount?: SortOrder
    meetingLength?: SortOrder
    maxDaysInAdvance?: SortOrder
  }

  export type SchedulingLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    maxUses?: SortOrder
    usageCount?: SortOrder
    expirationDate?: SortOrder
    meetingLength?: SortOrder
    maxDaysInAdvance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchedulingLinkMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    maxUses?: SortOrder
    usageCount?: SortOrder
    expirationDate?: SortOrder
    meetingLength?: SortOrder
    maxDaysInAdvance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchedulingLinkSumOrderByAggregateInput = {
    maxUses?: SortOrder
    usageCount?: SortOrder
    meetingLength?: SortOrder
    maxDaysInAdvance?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type SchedulingLinkRelationFilter = {
    is?: SchedulingLinkWhereInput
    isNot?: SchedulingLinkWhereInput
  }

  export type MeetingCountOrderByAggregateInput = {
    id?: SortOrder
    schedulingLinkId?: SortOrder
    userId?: SortOrder
    attendeeEmail?: SortOrder
    attendeeLinkedIn?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    answers?: SortOrder
    hubspotContext?: SortOrder
    linkedinContext?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeetingMaxOrderByAggregateInput = {
    id?: SortOrder
    schedulingLinkId?: SortOrder
    userId?: SortOrder
    attendeeEmail?: SortOrder
    attendeeLinkedIn?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    hubspotContext?: SortOrder
    linkedinContext?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeetingMinOrderByAggregateInput = {
    id?: SortOrder
    schedulingLinkId?: SortOrder
    userId?: SortOrder
    attendeeEmail?: SortOrder
    attendeeLinkedIn?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    hubspotContext?: SortOrder
    linkedinContext?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SchedulingLinkCreateNestedManyWithoutUserInput = {
    create?: XOR<SchedulingLinkCreateWithoutUserInput, SchedulingLinkUncheckedCreateWithoutUserInput> | SchedulingLinkCreateWithoutUserInput[] | SchedulingLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SchedulingLinkCreateOrConnectWithoutUserInput | SchedulingLinkCreateOrConnectWithoutUserInput[]
    createMany?: SchedulingLinkCreateManyUserInputEnvelope
    connect?: SchedulingLinkWhereUniqueInput | SchedulingLinkWhereUniqueInput[]
  }

  export type SchedulingWindowCreateNestedManyWithoutUserInput = {
    create?: XOR<SchedulingWindowCreateWithoutUserInput, SchedulingWindowUncheckedCreateWithoutUserInput> | SchedulingWindowCreateWithoutUserInput[] | SchedulingWindowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SchedulingWindowCreateOrConnectWithoutUserInput | SchedulingWindowCreateOrConnectWithoutUserInput[]
    createMany?: SchedulingWindowCreateManyUserInputEnvelope
    connect?: SchedulingWindowWhereUniqueInput | SchedulingWindowWhereUniqueInput[]
  }

  export type MeetingCreateNestedManyWithoutUserInput = {
    create?: XOR<MeetingCreateWithoutUserInput, MeetingUncheckedCreateWithoutUserInput> | MeetingCreateWithoutUserInput[] | MeetingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutUserInput | MeetingCreateOrConnectWithoutUserInput[]
    createMany?: MeetingCreateManyUserInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SchedulingLinkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SchedulingLinkCreateWithoutUserInput, SchedulingLinkUncheckedCreateWithoutUserInput> | SchedulingLinkCreateWithoutUserInput[] | SchedulingLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SchedulingLinkCreateOrConnectWithoutUserInput | SchedulingLinkCreateOrConnectWithoutUserInput[]
    createMany?: SchedulingLinkCreateManyUserInputEnvelope
    connect?: SchedulingLinkWhereUniqueInput | SchedulingLinkWhereUniqueInput[]
  }

  export type SchedulingWindowUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SchedulingWindowCreateWithoutUserInput, SchedulingWindowUncheckedCreateWithoutUserInput> | SchedulingWindowCreateWithoutUserInput[] | SchedulingWindowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SchedulingWindowCreateOrConnectWithoutUserInput | SchedulingWindowCreateOrConnectWithoutUserInput[]
    createMany?: SchedulingWindowCreateManyUserInputEnvelope
    connect?: SchedulingWindowWhereUniqueInput | SchedulingWindowWhereUniqueInput[]
  }

  export type MeetingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MeetingCreateWithoutUserInput, MeetingUncheckedCreateWithoutUserInput> | MeetingCreateWithoutUserInput[] | MeetingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutUserInput | MeetingCreateOrConnectWithoutUserInput[]
    createMany?: MeetingCreateManyUserInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SchedulingLinkUpdateManyWithoutUserNestedInput = {
    create?: XOR<SchedulingLinkCreateWithoutUserInput, SchedulingLinkUncheckedCreateWithoutUserInput> | SchedulingLinkCreateWithoutUserInput[] | SchedulingLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SchedulingLinkCreateOrConnectWithoutUserInput | SchedulingLinkCreateOrConnectWithoutUserInput[]
    upsert?: SchedulingLinkUpsertWithWhereUniqueWithoutUserInput | SchedulingLinkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SchedulingLinkCreateManyUserInputEnvelope
    set?: SchedulingLinkWhereUniqueInput | SchedulingLinkWhereUniqueInput[]
    disconnect?: SchedulingLinkWhereUniqueInput | SchedulingLinkWhereUniqueInput[]
    delete?: SchedulingLinkWhereUniqueInput | SchedulingLinkWhereUniqueInput[]
    connect?: SchedulingLinkWhereUniqueInput | SchedulingLinkWhereUniqueInput[]
    update?: SchedulingLinkUpdateWithWhereUniqueWithoutUserInput | SchedulingLinkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SchedulingLinkUpdateManyWithWhereWithoutUserInput | SchedulingLinkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SchedulingLinkScalarWhereInput | SchedulingLinkScalarWhereInput[]
  }

  export type SchedulingWindowUpdateManyWithoutUserNestedInput = {
    create?: XOR<SchedulingWindowCreateWithoutUserInput, SchedulingWindowUncheckedCreateWithoutUserInput> | SchedulingWindowCreateWithoutUserInput[] | SchedulingWindowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SchedulingWindowCreateOrConnectWithoutUserInput | SchedulingWindowCreateOrConnectWithoutUserInput[]
    upsert?: SchedulingWindowUpsertWithWhereUniqueWithoutUserInput | SchedulingWindowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SchedulingWindowCreateManyUserInputEnvelope
    set?: SchedulingWindowWhereUniqueInput | SchedulingWindowWhereUniqueInput[]
    disconnect?: SchedulingWindowWhereUniqueInput | SchedulingWindowWhereUniqueInput[]
    delete?: SchedulingWindowWhereUniqueInput | SchedulingWindowWhereUniqueInput[]
    connect?: SchedulingWindowWhereUniqueInput | SchedulingWindowWhereUniqueInput[]
    update?: SchedulingWindowUpdateWithWhereUniqueWithoutUserInput | SchedulingWindowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SchedulingWindowUpdateManyWithWhereWithoutUserInput | SchedulingWindowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SchedulingWindowScalarWhereInput | SchedulingWindowScalarWhereInput[]
  }

  export type MeetingUpdateManyWithoutUserNestedInput = {
    create?: XOR<MeetingCreateWithoutUserInput, MeetingUncheckedCreateWithoutUserInput> | MeetingCreateWithoutUserInput[] | MeetingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutUserInput | MeetingCreateOrConnectWithoutUserInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutUserInput | MeetingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MeetingCreateManyUserInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutUserInput | MeetingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutUserInput | MeetingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SchedulingLinkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SchedulingLinkCreateWithoutUserInput, SchedulingLinkUncheckedCreateWithoutUserInput> | SchedulingLinkCreateWithoutUserInput[] | SchedulingLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SchedulingLinkCreateOrConnectWithoutUserInput | SchedulingLinkCreateOrConnectWithoutUserInput[]
    upsert?: SchedulingLinkUpsertWithWhereUniqueWithoutUserInput | SchedulingLinkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SchedulingLinkCreateManyUserInputEnvelope
    set?: SchedulingLinkWhereUniqueInput | SchedulingLinkWhereUniqueInput[]
    disconnect?: SchedulingLinkWhereUniqueInput | SchedulingLinkWhereUniqueInput[]
    delete?: SchedulingLinkWhereUniqueInput | SchedulingLinkWhereUniqueInput[]
    connect?: SchedulingLinkWhereUniqueInput | SchedulingLinkWhereUniqueInput[]
    update?: SchedulingLinkUpdateWithWhereUniqueWithoutUserInput | SchedulingLinkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SchedulingLinkUpdateManyWithWhereWithoutUserInput | SchedulingLinkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SchedulingLinkScalarWhereInput | SchedulingLinkScalarWhereInput[]
  }

  export type SchedulingWindowUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SchedulingWindowCreateWithoutUserInput, SchedulingWindowUncheckedCreateWithoutUserInput> | SchedulingWindowCreateWithoutUserInput[] | SchedulingWindowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SchedulingWindowCreateOrConnectWithoutUserInput | SchedulingWindowCreateOrConnectWithoutUserInput[]
    upsert?: SchedulingWindowUpsertWithWhereUniqueWithoutUserInput | SchedulingWindowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SchedulingWindowCreateManyUserInputEnvelope
    set?: SchedulingWindowWhereUniqueInput | SchedulingWindowWhereUniqueInput[]
    disconnect?: SchedulingWindowWhereUniqueInput | SchedulingWindowWhereUniqueInput[]
    delete?: SchedulingWindowWhereUniqueInput | SchedulingWindowWhereUniqueInput[]
    connect?: SchedulingWindowWhereUniqueInput | SchedulingWindowWhereUniqueInput[]
    update?: SchedulingWindowUpdateWithWhereUniqueWithoutUserInput | SchedulingWindowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SchedulingWindowUpdateManyWithWhereWithoutUserInput | SchedulingWindowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SchedulingWindowScalarWhereInput | SchedulingWindowScalarWhereInput[]
  }

  export type MeetingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MeetingCreateWithoutUserInput, MeetingUncheckedCreateWithoutUserInput> | MeetingCreateWithoutUserInput[] | MeetingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutUserInput | MeetingCreateOrConnectWithoutUserInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutUserInput | MeetingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MeetingCreateManyUserInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutUserInput | MeetingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutUserInput | MeetingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSchedulingWindowsInput = {
    create?: XOR<UserCreateWithoutSchedulingWindowsInput, UserUncheckedCreateWithoutSchedulingWindowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSchedulingWindowsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSchedulingWindowsNestedInput = {
    create?: XOR<UserCreateWithoutSchedulingWindowsInput, UserUncheckedCreateWithoutSchedulingWindowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSchedulingWindowsInput
    upsert?: UserUpsertWithoutSchedulingWindowsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSchedulingWindowsInput, UserUpdateWithoutSchedulingWindowsInput>, UserUncheckedUpdateWithoutSchedulingWindowsInput>
  }

  export type MeetingCreateNestedManyWithoutSchedulingLinkInput = {
    create?: XOR<MeetingCreateWithoutSchedulingLinkInput, MeetingUncheckedCreateWithoutSchedulingLinkInput> | MeetingCreateWithoutSchedulingLinkInput[] | MeetingUncheckedCreateWithoutSchedulingLinkInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutSchedulingLinkInput | MeetingCreateOrConnectWithoutSchedulingLinkInput[]
    createMany?: MeetingCreateManySchedulingLinkInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutSchedulingLinksInput = {
    create?: XOR<UserCreateWithoutSchedulingLinksInput, UserUncheckedCreateWithoutSchedulingLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutSchedulingLinksInput
    connect?: UserWhereUniqueInput
  }

  export type MeetingUncheckedCreateNestedManyWithoutSchedulingLinkInput = {
    create?: XOR<MeetingCreateWithoutSchedulingLinkInput, MeetingUncheckedCreateWithoutSchedulingLinkInput> | MeetingCreateWithoutSchedulingLinkInput[] | MeetingUncheckedCreateWithoutSchedulingLinkInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutSchedulingLinkInput | MeetingCreateOrConnectWithoutSchedulingLinkInput[]
    createMany?: MeetingCreateManySchedulingLinkInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type MeetingUpdateManyWithoutSchedulingLinkNestedInput = {
    create?: XOR<MeetingCreateWithoutSchedulingLinkInput, MeetingUncheckedCreateWithoutSchedulingLinkInput> | MeetingCreateWithoutSchedulingLinkInput[] | MeetingUncheckedCreateWithoutSchedulingLinkInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutSchedulingLinkInput | MeetingCreateOrConnectWithoutSchedulingLinkInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutSchedulingLinkInput | MeetingUpsertWithWhereUniqueWithoutSchedulingLinkInput[]
    createMany?: MeetingCreateManySchedulingLinkInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutSchedulingLinkInput | MeetingUpdateWithWhereUniqueWithoutSchedulingLinkInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutSchedulingLinkInput | MeetingUpdateManyWithWhereWithoutSchedulingLinkInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutSchedulingLinksNestedInput = {
    create?: XOR<UserCreateWithoutSchedulingLinksInput, UserUncheckedCreateWithoutSchedulingLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutSchedulingLinksInput
    upsert?: UserUpsertWithoutSchedulingLinksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSchedulingLinksInput, UserUpdateWithoutSchedulingLinksInput>, UserUncheckedUpdateWithoutSchedulingLinksInput>
  }

  export type MeetingUncheckedUpdateManyWithoutSchedulingLinkNestedInput = {
    create?: XOR<MeetingCreateWithoutSchedulingLinkInput, MeetingUncheckedCreateWithoutSchedulingLinkInput> | MeetingCreateWithoutSchedulingLinkInput[] | MeetingUncheckedCreateWithoutSchedulingLinkInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutSchedulingLinkInput | MeetingCreateOrConnectWithoutSchedulingLinkInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutSchedulingLinkInput | MeetingUpsertWithWhereUniqueWithoutSchedulingLinkInput[]
    createMany?: MeetingCreateManySchedulingLinkInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutSchedulingLinkInput | MeetingUpdateWithWhereUniqueWithoutSchedulingLinkInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutSchedulingLinkInput | MeetingUpdateManyWithWhereWithoutSchedulingLinkInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type SchedulingLinkCreateNestedOneWithoutMeetingsInput = {
    create?: XOR<SchedulingLinkCreateWithoutMeetingsInput, SchedulingLinkUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: SchedulingLinkCreateOrConnectWithoutMeetingsInput
    connect?: SchedulingLinkWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMeetingsInput = {
    create?: XOR<UserCreateWithoutMeetingsInput, UserUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeetingsInput
    connect?: UserWhereUniqueInput
  }

  export type SchedulingLinkUpdateOneRequiredWithoutMeetingsNestedInput = {
    create?: XOR<SchedulingLinkCreateWithoutMeetingsInput, SchedulingLinkUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: SchedulingLinkCreateOrConnectWithoutMeetingsInput
    upsert?: SchedulingLinkUpsertWithoutMeetingsInput
    connect?: SchedulingLinkWhereUniqueInput
    update?: XOR<XOR<SchedulingLinkUpdateToOneWithWhereWithoutMeetingsInput, SchedulingLinkUpdateWithoutMeetingsInput>, SchedulingLinkUncheckedUpdateWithoutMeetingsInput>
  }

  export type UserUpdateOneRequiredWithoutMeetingsNestedInput = {
    create?: XOR<UserCreateWithoutMeetingsInput, UserUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeetingsInput
    upsert?: UserUpsertWithoutMeetingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMeetingsInput, UserUpdateWithoutMeetingsInput>, UserUncheckedUpdateWithoutMeetingsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SchedulingLinkCreateWithoutUserInput = {
    id?: string
    maxUses?: number | null
    usageCount?: number
    expirationDate?: Date | string | null
    meetingLength: number
    maxDaysInAdvance: number
    formQuestions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    meetings?: MeetingCreateNestedManyWithoutSchedulingLinkInput
  }

  export type SchedulingLinkUncheckedCreateWithoutUserInput = {
    id?: string
    maxUses?: number | null
    usageCount?: number
    expirationDate?: Date | string | null
    meetingLength: number
    maxDaysInAdvance: number
    formQuestions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    meetings?: MeetingUncheckedCreateNestedManyWithoutSchedulingLinkInput
  }

  export type SchedulingLinkCreateOrConnectWithoutUserInput = {
    where: SchedulingLinkWhereUniqueInput
    create: XOR<SchedulingLinkCreateWithoutUserInput, SchedulingLinkUncheckedCreateWithoutUserInput>
  }

  export type SchedulingLinkCreateManyUserInputEnvelope = {
    data: SchedulingLinkCreateManyUserInput | SchedulingLinkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SchedulingWindowCreateWithoutUserInput = {
    id?: string
    dayOfWeek: number
    startHour: number
    endHour: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchedulingWindowUncheckedCreateWithoutUserInput = {
    id?: string
    dayOfWeek: number
    startHour: number
    endHour: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchedulingWindowCreateOrConnectWithoutUserInput = {
    where: SchedulingWindowWhereUniqueInput
    create: XOR<SchedulingWindowCreateWithoutUserInput, SchedulingWindowUncheckedCreateWithoutUserInput>
  }

  export type SchedulingWindowCreateManyUserInputEnvelope = {
    data: SchedulingWindowCreateManyUserInput | SchedulingWindowCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MeetingCreateWithoutUserInput = {
    id?: string
    attendeeEmail: string
    attendeeLinkedIn?: string | null
    startTime: Date | string
    endTime: Date | string
    answers: JsonNullValueInput | InputJsonValue
    hubspotContext?: string | null
    linkedinContext?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schedulingLink: SchedulingLinkCreateNestedOneWithoutMeetingsInput
  }

  export type MeetingUncheckedCreateWithoutUserInput = {
    id?: string
    schedulingLinkId: string
    attendeeEmail: string
    attendeeLinkedIn?: string | null
    startTime: Date | string
    endTime: Date | string
    answers: JsonNullValueInput | InputJsonValue
    hubspotContext?: string | null
    linkedinContext?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingCreateOrConnectWithoutUserInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutUserInput, MeetingUncheckedCreateWithoutUserInput>
  }

  export type MeetingCreateManyUserInputEnvelope = {
    data: MeetingCreateManyUserInput | MeetingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SchedulingLinkUpsertWithWhereUniqueWithoutUserInput = {
    where: SchedulingLinkWhereUniqueInput
    update: XOR<SchedulingLinkUpdateWithoutUserInput, SchedulingLinkUncheckedUpdateWithoutUserInput>
    create: XOR<SchedulingLinkCreateWithoutUserInput, SchedulingLinkUncheckedCreateWithoutUserInput>
  }

  export type SchedulingLinkUpdateWithWhereUniqueWithoutUserInput = {
    where: SchedulingLinkWhereUniqueInput
    data: XOR<SchedulingLinkUpdateWithoutUserInput, SchedulingLinkUncheckedUpdateWithoutUserInput>
  }

  export type SchedulingLinkUpdateManyWithWhereWithoutUserInput = {
    where: SchedulingLinkScalarWhereInput
    data: XOR<SchedulingLinkUpdateManyMutationInput, SchedulingLinkUncheckedUpdateManyWithoutUserInput>
  }

  export type SchedulingLinkScalarWhereInput = {
    AND?: SchedulingLinkScalarWhereInput | SchedulingLinkScalarWhereInput[]
    OR?: SchedulingLinkScalarWhereInput[]
    NOT?: SchedulingLinkScalarWhereInput | SchedulingLinkScalarWhereInput[]
    id?: StringFilter<"SchedulingLink"> | string
    userId?: StringFilter<"SchedulingLink"> | string
    maxUses?: IntNullableFilter<"SchedulingLink"> | number | null
    usageCount?: IntFilter<"SchedulingLink"> | number
    expirationDate?: DateTimeNullableFilter<"SchedulingLink"> | Date | string | null
    meetingLength?: IntFilter<"SchedulingLink"> | number
    maxDaysInAdvance?: IntFilter<"SchedulingLink"> | number
    formQuestions?: JsonFilter<"SchedulingLink">
    createdAt?: DateTimeFilter<"SchedulingLink"> | Date | string
    updatedAt?: DateTimeFilter<"SchedulingLink"> | Date | string
  }

  export type SchedulingWindowUpsertWithWhereUniqueWithoutUserInput = {
    where: SchedulingWindowWhereUniqueInput
    update: XOR<SchedulingWindowUpdateWithoutUserInput, SchedulingWindowUncheckedUpdateWithoutUserInput>
    create: XOR<SchedulingWindowCreateWithoutUserInput, SchedulingWindowUncheckedCreateWithoutUserInput>
  }

  export type SchedulingWindowUpdateWithWhereUniqueWithoutUserInput = {
    where: SchedulingWindowWhereUniqueInput
    data: XOR<SchedulingWindowUpdateWithoutUserInput, SchedulingWindowUncheckedUpdateWithoutUserInput>
  }

  export type SchedulingWindowUpdateManyWithWhereWithoutUserInput = {
    where: SchedulingWindowScalarWhereInput
    data: XOR<SchedulingWindowUpdateManyMutationInput, SchedulingWindowUncheckedUpdateManyWithoutUserInput>
  }

  export type SchedulingWindowScalarWhereInput = {
    AND?: SchedulingWindowScalarWhereInput | SchedulingWindowScalarWhereInput[]
    OR?: SchedulingWindowScalarWhereInput[]
    NOT?: SchedulingWindowScalarWhereInput | SchedulingWindowScalarWhereInput[]
    id?: StringFilter<"SchedulingWindow"> | string
    userId?: StringFilter<"SchedulingWindow"> | string
    dayOfWeek?: IntFilter<"SchedulingWindow"> | number
    startHour?: IntFilter<"SchedulingWindow"> | number
    endHour?: IntFilter<"SchedulingWindow"> | number
    createdAt?: DateTimeFilter<"SchedulingWindow"> | Date | string
    updatedAt?: DateTimeFilter<"SchedulingWindow"> | Date | string
  }

  export type MeetingUpsertWithWhereUniqueWithoutUserInput = {
    where: MeetingWhereUniqueInput
    update: XOR<MeetingUpdateWithoutUserInput, MeetingUncheckedUpdateWithoutUserInput>
    create: XOR<MeetingCreateWithoutUserInput, MeetingUncheckedCreateWithoutUserInput>
  }

  export type MeetingUpdateWithWhereUniqueWithoutUserInput = {
    where: MeetingWhereUniqueInput
    data: XOR<MeetingUpdateWithoutUserInput, MeetingUncheckedUpdateWithoutUserInput>
  }

  export type MeetingUpdateManyWithWhereWithoutUserInput = {
    where: MeetingScalarWhereInput
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyWithoutUserInput>
  }

  export type MeetingScalarWhereInput = {
    AND?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
    OR?: MeetingScalarWhereInput[]
    NOT?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
    id?: StringFilter<"Meeting"> | string
    schedulingLinkId?: StringFilter<"Meeting"> | string
    userId?: StringFilter<"Meeting"> | string
    attendeeEmail?: StringFilter<"Meeting"> | string
    attendeeLinkedIn?: StringNullableFilter<"Meeting"> | string | null
    startTime?: DateTimeFilter<"Meeting"> | Date | string
    endTime?: DateTimeFilter<"Meeting"> | Date | string
    answers?: JsonFilter<"Meeting">
    hubspotContext?: StringNullableFilter<"Meeting"> | string | null
    linkedinContext?: StringNullableFilter<"Meeting"> | string | null
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schedulingLinks?: SchedulingLinkCreateNestedManyWithoutUserInput
    schedulingWindows?: SchedulingWindowCreateNestedManyWithoutUserInput
    meetings?: MeetingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schedulingLinks?: SchedulingLinkUncheckedCreateNestedManyWithoutUserInput
    schedulingWindows?: SchedulingWindowUncheckedCreateNestedManyWithoutUserInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedulingLinks?: SchedulingLinkUpdateManyWithoutUserNestedInput
    schedulingWindows?: SchedulingWindowUpdateManyWithoutUserNestedInput
    meetings?: MeetingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedulingLinks?: SchedulingLinkUncheckedUpdateManyWithoutUserNestedInput
    schedulingWindows?: SchedulingWindowUncheckedUpdateManyWithoutUserNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSchedulingWindowsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    schedulingLinks?: SchedulingLinkCreateNestedManyWithoutUserInput
    meetings?: MeetingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSchedulingWindowsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    schedulingLinks?: SchedulingLinkUncheckedCreateNestedManyWithoutUserInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSchedulingWindowsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSchedulingWindowsInput, UserUncheckedCreateWithoutSchedulingWindowsInput>
  }

  export type UserUpsertWithoutSchedulingWindowsInput = {
    update: XOR<UserUpdateWithoutSchedulingWindowsInput, UserUncheckedUpdateWithoutSchedulingWindowsInput>
    create: XOR<UserCreateWithoutSchedulingWindowsInput, UserUncheckedCreateWithoutSchedulingWindowsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSchedulingWindowsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSchedulingWindowsInput, UserUncheckedUpdateWithoutSchedulingWindowsInput>
  }

  export type UserUpdateWithoutSchedulingWindowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    schedulingLinks?: SchedulingLinkUpdateManyWithoutUserNestedInput
    meetings?: MeetingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSchedulingWindowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    schedulingLinks?: SchedulingLinkUncheckedUpdateManyWithoutUserNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MeetingCreateWithoutSchedulingLinkInput = {
    id?: string
    attendeeEmail: string
    attendeeLinkedIn?: string | null
    startTime: Date | string
    endTime: Date | string
    answers: JsonNullValueInput | InputJsonValue
    hubspotContext?: string | null
    linkedinContext?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMeetingsInput
  }

  export type MeetingUncheckedCreateWithoutSchedulingLinkInput = {
    id?: string
    userId: string
    attendeeEmail: string
    attendeeLinkedIn?: string | null
    startTime: Date | string
    endTime: Date | string
    answers: JsonNullValueInput | InputJsonValue
    hubspotContext?: string | null
    linkedinContext?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingCreateOrConnectWithoutSchedulingLinkInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutSchedulingLinkInput, MeetingUncheckedCreateWithoutSchedulingLinkInput>
  }

  export type MeetingCreateManySchedulingLinkInputEnvelope = {
    data: MeetingCreateManySchedulingLinkInput | MeetingCreateManySchedulingLinkInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutSchedulingLinksInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    schedulingWindows?: SchedulingWindowCreateNestedManyWithoutUserInput
    meetings?: MeetingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSchedulingLinksInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    schedulingWindows?: SchedulingWindowUncheckedCreateNestedManyWithoutUserInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSchedulingLinksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSchedulingLinksInput, UserUncheckedCreateWithoutSchedulingLinksInput>
  }

  export type MeetingUpsertWithWhereUniqueWithoutSchedulingLinkInput = {
    where: MeetingWhereUniqueInput
    update: XOR<MeetingUpdateWithoutSchedulingLinkInput, MeetingUncheckedUpdateWithoutSchedulingLinkInput>
    create: XOR<MeetingCreateWithoutSchedulingLinkInput, MeetingUncheckedCreateWithoutSchedulingLinkInput>
  }

  export type MeetingUpdateWithWhereUniqueWithoutSchedulingLinkInput = {
    where: MeetingWhereUniqueInput
    data: XOR<MeetingUpdateWithoutSchedulingLinkInput, MeetingUncheckedUpdateWithoutSchedulingLinkInput>
  }

  export type MeetingUpdateManyWithWhereWithoutSchedulingLinkInput = {
    where: MeetingScalarWhereInput
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyWithoutSchedulingLinkInput>
  }

  export type UserUpsertWithoutSchedulingLinksInput = {
    update: XOR<UserUpdateWithoutSchedulingLinksInput, UserUncheckedUpdateWithoutSchedulingLinksInput>
    create: XOR<UserCreateWithoutSchedulingLinksInput, UserUncheckedCreateWithoutSchedulingLinksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSchedulingLinksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSchedulingLinksInput, UserUncheckedUpdateWithoutSchedulingLinksInput>
  }

  export type UserUpdateWithoutSchedulingLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    schedulingWindows?: SchedulingWindowUpdateManyWithoutUserNestedInput
    meetings?: MeetingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSchedulingLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    schedulingWindows?: SchedulingWindowUncheckedUpdateManyWithoutUserNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SchedulingLinkCreateWithoutMeetingsInput = {
    id?: string
    maxUses?: number | null
    usageCount?: number
    expirationDate?: Date | string | null
    meetingLength: number
    maxDaysInAdvance: number
    formQuestions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSchedulingLinksInput
  }

  export type SchedulingLinkUncheckedCreateWithoutMeetingsInput = {
    id?: string
    userId: string
    maxUses?: number | null
    usageCount?: number
    expirationDate?: Date | string | null
    meetingLength: number
    maxDaysInAdvance: number
    formQuestions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchedulingLinkCreateOrConnectWithoutMeetingsInput = {
    where: SchedulingLinkWhereUniqueInput
    create: XOR<SchedulingLinkCreateWithoutMeetingsInput, SchedulingLinkUncheckedCreateWithoutMeetingsInput>
  }

  export type UserCreateWithoutMeetingsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    schedulingLinks?: SchedulingLinkCreateNestedManyWithoutUserInput
    schedulingWindows?: SchedulingWindowCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMeetingsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    schedulingLinks?: SchedulingLinkUncheckedCreateNestedManyWithoutUserInput
    schedulingWindows?: SchedulingWindowUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMeetingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMeetingsInput, UserUncheckedCreateWithoutMeetingsInput>
  }

  export type SchedulingLinkUpsertWithoutMeetingsInput = {
    update: XOR<SchedulingLinkUpdateWithoutMeetingsInput, SchedulingLinkUncheckedUpdateWithoutMeetingsInput>
    create: XOR<SchedulingLinkCreateWithoutMeetingsInput, SchedulingLinkUncheckedCreateWithoutMeetingsInput>
    where?: SchedulingLinkWhereInput
  }

  export type SchedulingLinkUpdateToOneWithWhereWithoutMeetingsInput = {
    where?: SchedulingLinkWhereInput
    data: XOR<SchedulingLinkUpdateWithoutMeetingsInput, SchedulingLinkUncheckedUpdateWithoutMeetingsInput>
  }

  export type SchedulingLinkUpdateWithoutMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usageCount?: IntFieldUpdateOperationsInput | number
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingLength?: IntFieldUpdateOperationsInput | number
    maxDaysInAdvance?: IntFieldUpdateOperationsInput | number
    formQuestions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSchedulingLinksNestedInput
  }

  export type SchedulingLinkUncheckedUpdateWithoutMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usageCount?: IntFieldUpdateOperationsInput | number
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingLength?: IntFieldUpdateOperationsInput | number
    maxDaysInAdvance?: IntFieldUpdateOperationsInput | number
    formQuestions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutMeetingsInput = {
    update: XOR<UserUpdateWithoutMeetingsInput, UserUncheckedUpdateWithoutMeetingsInput>
    create: XOR<UserCreateWithoutMeetingsInput, UserUncheckedCreateWithoutMeetingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMeetingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMeetingsInput, UserUncheckedUpdateWithoutMeetingsInput>
  }

  export type UserUpdateWithoutMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    schedulingLinks?: SchedulingLinkUpdateManyWithoutUserNestedInput
    schedulingWindows?: SchedulingWindowUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    schedulingLinks?: SchedulingLinkUncheckedUpdateManyWithoutUserNestedInput
    schedulingWindows?: SchedulingWindowUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SchedulingLinkCreateManyUserInput = {
    id?: string
    maxUses?: number | null
    usageCount?: number
    expirationDate?: Date | string | null
    meetingLength: number
    maxDaysInAdvance: number
    formQuestions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchedulingWindowCreateManyUserInput = {
    id?: string
    dayOfWeek: number
    startHour: number
    endHour: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingCreateManyUserInput = {
    id?: string
    schedulingLinkId: string
    attendeeEmail: string
    attendeeLinkedIn?: string | null
    startTime: Date | string
    endTime: Date | string
    answers: JsonNullValueInput | InputJsonValue
    hubspotContext?: string | null
    linkedinContext?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SchedulingLinkUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usageCount?: IntFieldUpdateOperationsInput | number
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingLength?: IntFieldUpdateOperationsInput | number
    maxDaysInAdvance?: IntFieldUpdateOperationsInput | number
    formQuestions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetings?: MeetingUpdateManyWithoutSchedulingLinkNestedInput
  }

  export type SchedulingLinkUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usageCount?: IntFieldUpdateOperationsInput | number
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingLength?: IntFieldUpdateOperationsInput | number
    maxDaysInAdvance?: IntFieldUpdateOperationsInput | number
    formQuestions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetings?: MeetingUncheckedUpdateManyWithoutSchedulingLinkNestedInput
  }

  export type SchedulingLinkUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usageCount?: IntFieldUpdateOperationsInput | number
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingLength?: IntFieldUpdateOperationsInput | number
    maxDaysInAdvance?: IntFieldUpdateOperationsInput | number
    formQuestions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchedulingWindowUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startHour?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchedulingWindowUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startHour?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchedulingWindowUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startHour?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendeeEmail?: StringFieldUpdateOperationsInput | string
    attendeeLinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: JsonNullValueInput | InputJsonValue
    hubspotContext?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinContext?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedulingLink?: SchedulingLinkUpdateOneRequiredWithoutMeetingsNestedInput
  }

  export type MeetingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    schedulingLinkId?: StringFieldUpdateOperationsInput | string
    attendeeEmail?: StringFieldUpdateOperationsInput | string
    attendeeLinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: JsonNullValueInput | InputJsonValue
    hubspotContext?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinContext?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    schedulingLinkId?: StringFieldUpdateOperationsInput | string
    attendeeEmail?: StringFieldUpdateOperationsInput | string
    attendeeLinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: JsonNullValueInput | InputJsonValue
    hubspotContext?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinContext?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingCreateManySchedulingLinkInput = {
    id?: string
    userId: string
    attendeeEmail: string
    attendeeLinkedIn?: string | null
    startTime: Date | string
    endTime: Date | string
    answers: JsonNullValueInput | InputJsonValue
    hubspotContext?: string | null
    linkedinContext?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingUpdateWithoutSchedulingLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendeeEmail?: StringFieldUpdateOperationsInput | string
    attendeeLinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: JsonNullValueInput | InputJsonValue
    hubspotContext?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinContext?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMeetingsNestedInput
  }

  export type MeetingUncheckedUpdateWithoutSchedulingLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attendeeEmail?: StringFieldUpdateOperationsInput | string
    attendeeLinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: JsonNullValueInput | InputJsonValue
    hubspotContext?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinContext?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingUncheckedUpdateManyWithoutSchedulingLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attendeeEmail?: StringFieldUpdateOperationsInput | string
    attendeeLinkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: JsonNullValueInput | InputJsonValue
    hubspotContext?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinContext?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SchedulingLinkCountOutputTypeDefaultArgs instead
     */
    export type SchedulingLinkCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SchedulingLinkCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SchedulingWindowDefaultArgs instead
     */
    export type SchedulingWindowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SchedulingWindowDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SchedulingLinkDefaultArgs instead
     */
    export type SchedulingLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SchedulingLinkDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MeetingDefaultArgs instead
     */
    export type MeetingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MeetingDefaultArgs<ExtArgs>

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