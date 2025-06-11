
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
 * Model categorias
 * 
 */
export type categorias = $Result.DefaultSelection<Prisma.$categoriasPayload>
/**
 * Model receitas
 * 
 */
export type receitas = $Result.DefaultSelection<Prisma.$receitasPayload>
/**
 * Model usuarios
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categorias
 * const categorias = await prisma.categorias.findMany()
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
   * // Fetch zero or more Categorias
   * const categorias = await prisma.categorias.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.categorias`: Exposes CRUD operations for the **categorias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categorias.findMany()
    * ```
    */
  get categorias(): Prisma.categoriasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receitas`: Exposes CRUD operations for the **receitas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Receitas
    * const receitas = await prisma.receitas.findMany()
    * ```
    */
  get receitas(): Prisma.receitasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    categorias: 'categorias',
    receitas: 'receitas',
    usuarios: 'usuarios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "categorias" | "receitas" | "usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      categorias: {
        payload: Prisma.$categoriasPayload<ExtArgs>
        fields: Prisma.categoriasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          findFirst: {
            args: Prisma.categoriasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          findMany: {
            args: Prisma.categoriasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>[]
          }
          create: {
            args: Prisma.categoriasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          createMany: {
            args: Prisma.categoriasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.categoriasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          update: {
            args: Prisma.categoriasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          deleteMany: {
            args: Prisma.categoriasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoriasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          aggregate: {
            args: Prisma.CategoriasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorias>
          }
          groupBy: {
            args: Prisma.categoriasGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriasGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriasCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriasCountAggregateOutputType> | number
          }
        }
      }
      receitas: {
        payload: Prisma.$receitasPayload<ExtArgs>
        fields: Prisma.receitasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.receitasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receitasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.receitasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receitasPayload>
          }
          findFirst: {
            args: Prisma.receitasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receitasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.receitasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receitasPayload>
          }
          findMany: {
            args: Prisma.receitasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receitasPayload>[]
          }
          create: {
            args: Prisma.receitasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receitasPayload>
          }
          createMany: {
            args: Prisma.receitasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.receitasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receitasPayload>
          }
          update: {
            args: Prisma.receitasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receitasPayload>
          }
          deleteMany: {
            args: Prisma.receitasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.receitasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.receitasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$receitasPayload>
          }
          aggregate: {
            args: Prisma.ReceitasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceitas>
          }
          groupBy: {
            args: Prisma.receitasGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceitasGroupByOutputType>[]
          }
          count: {
            args: Prisma.receitasCountArgs<ExtArgs>
            result: $Utils.Optional<ReceitasCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    categorias?: categoriasOmit
    receitas?: receitasOmit
    usuarios?: usuariosOmit
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
    | 'updateManyAndReturn'
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
   * Count Type CategoriasCountOutputType
   */

  export type CategoriasCountOutputType = {
    receitas: number
  }

  export type CategoriasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receitas?: boolean | CategoriasCountOutputTypeCountReceitasArgs
  }

  // Custom InputTypes
  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriasCountOutputType
     */
    select?: CategoriasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeCountReceitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receitasWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    receitas: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receitas?: boolean | UsuariosCountOutputTypeCountReceitasArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountReceitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receitasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model categorias
   */

  export type AggregateCategorias = {
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  export type CategoriasAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriasSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriasMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type CategoriasMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type CategoriasCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type CategoriasAvgAggregateInputType = {
    id?: true
  }

  export type CategoriasSumAggregateInputType = {
    id?: true
  }

  export type CategoriasMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type CategoriasMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type CategoriasCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type CategoriasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to aggregate.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categorias
    **/
    _count?: true | CategoriasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriasMaxAggregateInputType
  }

  export type GetCategoriasAggregateType<T extends CategoriasAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorias[P]>
      : GetScalarType<T[P], AggregateCategorias[P]>
  }




  export type categoriasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriasWhereInput
    orderBy?: categoriasOrderByWithAggregationInput | categoriasOrderByWithAggregationInput[]
    by: CategoriasScalarFieldEnum[] | CategoriasScalarFieldEnum
    having?: categoriasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriasCountAggregateInputType | true
    _avg?: CategoriasAvgAggregateInputType
    _sum?: CategoriasSumAggregateInputType
    _min?: CategoriasMinAggregateInputType
    _max?: CategoriasMaxAggregateInputType
  }

  export type CategoriasGroupByOutputType = {
    id: number
    nome: string | null
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  type GetCategoriasGroupByPayload<T extends categoriasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
        }
      >
    >


  export type categoriasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    receitas?: boolean | categorias$receitasArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorias"]>



  export type categoriasSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type categoriasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["categorias"]>
  export type categoriasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receitas?: boolean | categorias$receitasArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $categoriasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categorias"
    objects: {
      receitas: Prisma.$receitasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string | null
    }, ExtArgs["result"]["categorias"]>
    composites: {}
  }

  type categoriasGetPayload<S extends boolean | null | undefined | categoriasDefaultArgs> = $Result.GetResult<Prisma.$categoriasPayload, S>

  type categoriasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriasCountAggregateInputType | true
    }

  export interface categoriasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categorias'], meta: { name: 'categorias' } }
    /**
     * Find zero or one Categorias that matches the filter.
     * @param {categoriasFindUniqueArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriasFindUniqueArgs>(args: SelectSubset<T, categoriasFindUniqueArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriasFindUniqueOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriasFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindFirstArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriasFindFirstArgs>(args?: SelectSubset<T, categoriasFindFirstArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindFirstOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriasFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriasFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categorias.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categorias.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriasWithIdOnly = await prisma.categorias.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriasFindManyArgs>(args?: SelectSubset<T, categoriasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorias.
     * @param {categoriasCreateArgs} args - Arguments to create a Categorias.
     * @example
     * // Create one Categorias
     * const Categorias = await prisma.categorias.create({
     *   data: {
     *     // ... data to create a Categorias
     *   }
     * })
     * 
     */
    create<T extends categoriasCreateArgs>(args: SelectSubset<T, categoriasCreateArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {categoriasCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categorias = await prisma.categorias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriasCreateManyArgs>(args?: SelectSubset<T, categoriasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categorias.
     * @param {categoriasDeleteArgs} args - Arguments to delete one Categorias.
     * @example
     * // Delete one Categorias
     * const Categorias = await prisma.categorias.delete({
     *   where: {
     *     // ... filter to delete one Categorias
     *   }
     * })
     * 
     */
    delete<T extends categoriasDeleteArgs>(args: SelectSubset<T, categoriasDeleteArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorias.
     * @param {categoriasUpdateArgs} args - Arguments to update one Categorias.
     * @example
     * // Update one Categorias
     * const categorias = await prisma.categorias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriasUpdateArgs>(args: SelectSubset<T, categoriasUpdateArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {categoriasDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categorias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriasDeleteManyArgs>(args?: SelectSubset<T, categoriasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categorias = await prisma.categorias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriasUpdateManyArgs>(args: SelectSubset<T, categoriasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categorias.
     * @param {categoriasUpsertArgs} args - Arguments to update or create a Categorias.
     * @example
     * // Update or create a Categorias
     * const categorias = await prisma.categorias.upsert({
     *   create: {
     *     // ... data to create a Categorias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorias we want to update
     *   }
     * })
     */
    upsert<T extends categoriasUpsertArgs>(args: SelectSubset<T, categoriasUpsertArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categorias.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends categoriasCountArgs>(
      args?: Subset<T, categoriasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriasAggregateArgs>(args: Subset<T, CategoriasAggregateArgs>): Prisma.PrismaPromise<GetCategoriasAggregateType<T>>

    /**
     * Group by Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasGroupByArgs} args - Group by arguments.
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
      T extends categoriasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriasGroupByArgs['orderBy'] }
        : { orderBy?: categoriasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categorias model
   */
  readonly fields: categoriasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categorias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receitas<T extends categorias$receitasArgs<ExtArgs> = {}>(args?: Subset<T, categorias$receitasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receitasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the categorias model
   */
  interface categoriasFieldRefs {
    readonly id: FieldRef<"categorias", 'Int'>
    readonly nome: FieldRef<"categorias", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categorias findUnique
   */
  export type categoriasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias findUniqueOrThrow
   */
  export type categoriasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias findFirst
   */
  export type categoriasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias findFirstOrThrow
   */
  export type categoriasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias findMany
   */
  export type categoriasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias create
   */
  export type categoriasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The data needed to create a categorias.
     */
    data?: XOR<categoriasCreateInput, categoriasUncheckedCreateInput>
  }

  /**
   * categorias createMany
   */
  export type categoriasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categorias.
     */
    data: categoriasCreateManyInput | categoriasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categorias update
   */
  export type categoriasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The data needed to update a categorias.
     */
    data: XOR<categoriasUpdateInput, categoriasUncheckedUpdateInput>
    /**
     * Choose, which categorias to update.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias updateMany
   */
  export type categoriasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriasUpdateManyMutationInput, categoriasUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriasWhereInput
    /**
     * Limit how many categorias to update.
     */
    limit?: number
  }

  /**
   * categorias upsert
   */
  export type categoriasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The filter to search for the categorias to update in case it exists.
     */
    where: categoriasWhereUniqueInput
    /**
     * In case the categorias found by the `where` argument doesn't exist, create a new categorias with this data.
     */
    create: XOR<categoriasCreateInput, categoriasUncheckedCreateInput>
    /**
     * In case the categorias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriasUpdateInput, categoriasUncheckedUpdateInput>
  }

  /**
   * categorias delete
   */
  export type categoriasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter which categorias to delete.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias deleteMany
   */
  export type categoriasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to delete
     */
    where?: categoriasWhereInput
    /**
     * Limit how many categorias to delete.
     */
    limit?: number
  }

  /**
   * categorias.receitas
   */
  export type categorias$receitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receitas
     */
    select?: receitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receitas
     */
    omit?: receitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receitasInclude<ExtArgs> | null
    where?: receitasWhereInput
    orderBy?: receitasOrderByWithRelationInput | receitasOrderByWithRelationInput[]
    cursor?: receitasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceitasScalarFieldEnum | ReceitasScalarFieldEnum[]
  }

  /**
   * categorias without action
   */
  export type categoriasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
  }


  /**
   * Model receitas
   */

  export type AggregateReceitas = {
    _count: ReceitasCountAggregateOutputType | null
    _avg: ReceitasAvgAggregateOutputType | null
    _sum: ReceitasSumAggregateOutputType | null
    _min: ReceitasMinAggregateOutputType | null
    _max: ReceitasMaxAggregateOutputType | null
  }

  export type ReceitasAvgAggregateOutputType = {
    id: number | null
    id_usuarios: number | null
    id_categorias: number | null
    tempo_preparo_minutos: number | null
    porcoes: number | null
  }

  export type ReceitasSumAggregateOutputType = {
    id: number | null
    id_usuarios: number | null
    id_categorias: number | null
    tempo_preparo_minutos: number | null
    porcoes: number | null
  }

  export type ReceitasMinAggregateOutputType = {
    id: number | null
    id_usuarios: number | null
    id_categorias: number | null
    nome: string | null
    tempo_preparo_minutos: number | null
    porcoes: number | null
    modo_preparo: string | null
    ingredientes: string | null
    criado_em: Date | null
    alterado_em: Date | null
  }

  export type ReceitasMaxAggregateOutputType = {
    id: number | null
    id_usuarios: number | null
    id_categorias: number | null
    nome: string | null
    tempo_preparo_minutos: number | null
    porcoes: number | null
    modo_preparo: string | null
    ingredientes: string | null
    criado_em: Date | null
    alterado_em: Date | null
  }

  export type ReceitasCountAggregateOutputType = {
    id: number
    id_usuarios: number
    id_categorias: number
    nome: number
    tempo_preparo_minutos: number
    porcoes: number
    modo_preparo: number
    ingredientes: number
    criado_em: number
    alterado_em: number
    _all: number
  }


  export type ReceitasAvgAggregateInputType = {
    id?: true
    id_usuarios?: true
    id_categorias?: true
    tempo_preparo_minutos?: true
    porcoes?: true
  }

  export type ReceitasSumAggregateInputType = {
    id?: true
    id_usuarios?: true
    id_categorias?: true
    tempo_preparo_minutos?: true
    porcoes?: true
  }

  export type ReceitasMinAggregateInputType = {
    id?: true
    id_usuarios?: true
    id_categorias?: true
    nome?: true
    tempo_preparo_minutos?: true
    porcoes?: true
    modo_preparo?: true
    ingredientes?: true
    criado_em?: true
    alterado_em?: true
  }

  export type ReceitasMaxAggregateInputType = {
    id?: true
    id_usuarios?: true
    id_categorias?: true
    nome?: true
    tempo_preparo_minutos?: true
    porcoes?: true
    modo_preparo?: true
    ingredientes?: true
    criado_em?: true
    alterado_em?: true
  }

  export type ReceitasCountAggregateInputType = {
    id?: true
    id_usuarios?: true
    id_categorias?: true
    nome?: true
    tempo_preparo_minutos?: true
    porcoes?: true
    modo_preparo?: true
    ingredientes?: true
    criado_em?: true
    alterado_em?: true
    _all?: true
  }

  export type ReceitasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which receitas to aggregate.
     */
    where?: receitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receitas to fetch.
     */
    orderBy?: receitasOrderByWithRelationInput | receitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: receitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned receitas
    **/
    _count?: true | ReceitasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceitasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceitasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceitasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceitasMaxAggregateInputType
  }

  export type GetReceitasAggregateType<T extends ReceitasAggregateArgs> = {
        [P in keyof T & keyof AggregateReceitas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceitas[P]>
      : GetScalarType<T[P], AggregateReceitas[P]>
  }




  export type receitasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: receitasWhereInput
    orderBy?: receitasOrderByWithAggregationInput | receitasOrderByWithAggregationInput[]
    by: ReceitasScalarFieldEnum[] | ReceitasScalarFieldEnum
    having?: receitasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceitasCountAggregateInputType | true
    _avg?: ReceitasAvgAggregateInputType
    _sum?: ReceitasSumAggregateInputType
    _min?: ReceitasMinAggregateInputType
    _max?: ReceitasMaxAggregateInputType
  }

  export type ReceitasGroupByOutputType = {
    id: number
    id_usuarios: number
    id_categorias: number | null
    nome: string | null
    tempo_preparo_minutos: number | null
    porcoes: number | null
    modo_preparo: string
    ingredientes: string | null
    criado_em: Date
    alterado_em: Date
    _count: ReceitasCountAggregateOutputType | null
    _avg: ReceitasAvgAggregateOutputType | null
    _sum: ReceitasSumAggregateOutputType | null
    _min: ReceitasMinAggregateOutputType | null
    _max: ReceitasMaxAggregateOutputType | null
  }

  type GetReceitasGroupByPayload<T extends receitasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceitasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceitasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceitasGroupByOutputType[P]>
            : GetScalarType<T[P], ReceitasGroupByOutputType[P]>
        }
      >
    >


  export type receitasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_usuarios?: boolean
    id_categorias?: boolean
    nome?: boolean
    tempo_preparo_minutos?: boolean
    porcoes?: boolean
    modo_preparo?: boolean
    ingredientes?: boolean
    criado_em?: boolean
    alterado_em?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    categorias?: boolean | receitas$categoriasArgs<ExtArgs>
  }, ExtArgs["result"]["receitas"]>



  export type receitasSelectScalar = {
    id?: boolean
    id_usuarios?: boolean
    id_categorias?: boolean
    nome?: boolean
    tempo_preparo_minutos?: boolean
    porcoes?: boolean
    modo_preparo?: boolean
    ingredientes?: boolean
    criado_em?: boolean
    alterado_em?: boolean
  }

  export type receitasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_usuarios" | "id_categorias" | "nome" | "tempo_preparo_minutos" | "porcoes" | "modo_preparo" | "ingredientes" | "criado_em" | "alterado_em", ExtArgs["result"]["receitas"]>
  export type receitasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    categorias?: boolean | receitas$categoriasArgs<ExtArgs>
  }

  export type $receitasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "receitas"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs>
      categorias: Prisma.$categoriasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_usuarios: number
      id_categorias: number | null
      nome: string | null
      tempo_preparo_minutos: number | null
      porcoes: number | null
      modo_preparo: string
      ingredientes: string | null
      criado_em: Date
      alterado_em: Date
    }, ExtArgs["result"]["receitas"]>
    composites: {}
  }

  type receitasGetPayload<S extends boolean | null | undefined | receitasDefaultArgs> = $Result.GetResult<Prisma.$receitasPayload, S>

  type receitasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<receitasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceitasCountAggregateInputType | true
    }

  export interface receitasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['receitas'], meta: { name: 'receitas' } }
    /**
     * Find zero or one Receitas that matches the filter.
     * @param {receitasFindUniqueArgs} args - Arguments to find a Receitas
     * @example
     * // Get one Receitas
     * const receitas = await prisma.receitas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends receitasFindUniqueArgs>(args: SelectSubset<T, receitasFindUniqueArgs<ExtArgs>>): Prisma__receitasClient<$Result.GetResult<Prisma.$receitasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Receitas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {receitasFindUniqueOrThrowArgs} args - Arguments to find a Receitas
     * @example
     * // Get one Receitas
     * const receitas = await prisma.receitas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends receitasFindUniqueOrThrowArgs>(args: SelectSubset<T, receitasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__receitasClient<$Result.GetResult<Prisma.$receitasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receitas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receitasFindFirstArgs} args - Arguments to find a Receitas
     * @example
     * // Get one Receitas
     * const receitas = await prisma.receitas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends receitasFindFirstArgs>(args?: SelectSubset<T, receitasFindFirstArgs<ExtArgs>>): Prisma__receitasClient<$Result.GetResult<Prisma.$receitasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receitas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receitasFindFirstOrThrowArgs} args - Arguments to find a Receitas
     * @example
     * // Get one Receitas
     * const receitas = await prisma.receitas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends receitasFindFirstOrThrowArgs>(args?: SelectSubset<T, receitasFindFirstOrThrowArgs<ExtArgs>>): Prisma__receitasClient<$Result.GetResult<Prisma.$receitasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Receitas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receitasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Receitas
     * const receitas = await prisma.receitas.findMany()
     * 
     * // Get first 10 Receitas
     * const receitas = await prisma.receitas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receitasWithIdOnly = await prisma.receitas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends receitasFindManyArgs>(args?: SelectSubset<T, receitasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receitasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Receitas.
     * @param {receitasCreateArgs} args - Arguments to create a Receitas.
     * @example
     * // Create one Receitas
     * const Receitas = await prisma.receitas.create({
     *   data: {
     *     // ... data to create a Receitas
     *   }
     * })
     * 
     */
    create<T extends receitasCreateArgs>(args: SelectSubset<T, receitasCreateArgs<ExtArgs>>): Prisma__receitasClient<$Result.GetResult<Prisma.$receitasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Receitas.
     * @param {receitasCreateManyArgs} args - Arguments to create many Receitas.
     * @example
     * // Create many Receitas
     * const receitas = await prisma.receitas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends receitasCreateManyArgs>(args?: SelectSubset<T, receitasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Receitas.
     * @param {receitasDeleteArgs} args - Arguments to delete one Receitas.
     * @example
     * // Delete one Receitas
     * const Receitas = await prisma.receitas.delete({
     *   where: {
     *     // ... filter to delete one Receitas
     *   }
     * })
     * 
     */
    delete<T extends receitasDeleteArgs>(args: SelectSubset<T, receitasDeleteArgs<ExtArgs>>): Prisma__receitasClient<$Result.GetResult<Prisma.$receitasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Receitas.
     * @param {receitasUpdateArgs} args - Arguments to update one Receitas.
     * @example
     * // Update one Receitas
     * const receitas = await prisma.receitas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends receitasUpdateArgs>(args: SelectSubset<T, receitasUpdateArgs<ExtArgs>>): Prisma__receitasClient<$Result.GetResult<Prisma.$receitasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Receitas.
     * @param {receitasDeleteManyArgs} args - Arguments to filter Receitas to delete.
     * @example
     * // Delete a few Receitas
     * const { count } = await prisma.receitas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends receitasDeleteManyArgs>(args?: SelectSubset<T, receitasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receitasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Receitas
     * const receitas = await prisma.receitas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends receitasUpdateManyArgs>(args: SelectSubset<T, receitasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Receitas.
     * @param {receitasUpsertArgs} args - Arguments to update or create a Receitas.
     * @example
     * // Update or create a Receitas
     * const receitas = await prisma.receitas.upsert({
     *   create: {
     *     // ... data to create a Receitas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Receitas we want to update
     *   }
     * })
     */
    upsert<T extends receitasUpsertArgs>(args: SelectSubset<T, receitasUpsertArgs<ExtArgs>>): Prisma__receitasClient<$Result.GetResult<Prisma.$receitasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Receitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receitasCountArgs} args - Arguments to filter Receitas to count.
     * @example
     * // Count the number of Receitas
     * const count = await prisma.receitas.count({
     *   where: {
     *     // ... the filter for the Receitas we want to count
     *   }
     * })
    **/
    count<T extends receitasCountArgs>(
      args?: Subset<T, receitasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceitasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Receitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReceitasAggregateArgs>(args: Subset<T, ReceitasAggregateArgs>): Prisma.PrismaPromise<GetReceitasAggregateType<T>>

    /**
     * Group by Receitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {receitasGroupByArgs} args - Group by arguments.
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
      T extends receitasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: receitasGroupByArgs['orderBy'] }
        : { orderBy?: receitasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, receitasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceitasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the receitas model
   */
  readonly fields: receitasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for receitas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__receitasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categorias<T extends receitas$categoriasArgs<ExtArgs> = {}>(args?: Subset<T, receitas$categoriasArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the receitas model
   */
  interface receitasFieldRefs {
    readonly id: FieldRef<"receitas", 'Int'>
    readonly id_usuarios: FieldRef<"receitas", 'Int'>
    readonly id_categorias: FieldRef<"receitas", 'Int'>
    readonly nome: FieldRef<"receitas", 'String'>
    readonly tempo_preparo_minutos: FieldRef<"receitas", 'Int'>
    readonly porcoes: FieldRef<"receitas", 'Int'>
    readonly modo_preparo: FieldRef<"receitas", 'String'>
    readonly ingredientes: FieldRef<"receitas", 'String'>
    readonly criado_em: FieldRef<"receitas", 'DateTime'>
    readonly alterado_em: FieldRef<"receitas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * receitas findUnique
   */
  export type receitasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receitas
     */
    select?: receitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receitas
     */
    omit?: receitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receitasInclude<ExtArgs> | null
    /**
     * Filter, which receitas to fetch.
     */
    where: receitasWhereUniqueInput
  }

  /**
   * receitas findUniqueOrThrow
   */
  export type receitasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receitas
     */
    select?: receitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receitas
     */
    omit?: receitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receitasInclude<ExtArgs> | null
    /**
     * Filter, which receitas to fetch.
     */
    where: receitasWhereUniqueInput
  }

  /**
   * receitas findFirst
   */
  export type receitasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receitas
     */
    select?: receitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receitas
     */
    omit?: receitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receitasInclude<ExtArgs> | null
    /**
     * Filter, which receitas to fetch.
     */
    where?: receitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receitas to fetch.
     */
    orderBy?: receitasOrderByWithRelationInput | receitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for receitas.
     */
    cursor?: receitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of receitas.
     */
    distinct?: ReceitasScalarFieldEnum | ReceitasScalarFieldEnum[]
  }

  /**
   * receitas findFirstOrThrow
   */
  export type receitasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receitas
     */
    select?: receitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receitas
     */
    omit?: receitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receitasInclude<ExtArgs> | null
    /**
     * Filter, which receitas to fetch.
     */
    where?: receitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receitas to fetch.
     */
    orderBy?: receitasOrderByWithRelationInput | receitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for receitas.
     */
    cursor?: receitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of receitas.
     */
    distinct?: ReceitasScalarFieldEnum | ReceitasScalarFieldEnum[]
  }

  /**
   * receitas findMany
   */
  export type receitasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receitas
     */
    select?: receitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receitas
     */
    omit?: receitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receitasInclude<ExtArgs> | null
    /**
     * Filter, which receitas to fetch.
     */
    where?: receitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of receitas to fetch.
     */
    orderBy?: receitasOrderByWithRelationInput | receitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing receitas.
     */
    cursor?: receitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` receitas.
     */
    skip?: number
    distinct?: ReceitasScalarFieldEnum | ReceitasScalarFieldEnum[]
  }

  /**
   * receitas create
   */
  export type receitasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receitas
     */
    select?: receitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receitas
     */
    omit?: receitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receitasInclude<ExtArgs> | null
    /**
     * The data needed to create a receitas.
     */
    data: XOR<receitasCreateInput, receitasUncheckedCreateInput>
  }

  /**
   * receitas createMany
   */
  export type receitasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many receitas.
     */
    data: receitasCreateManyInput | receitasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * receitas update
   */
  export type receitasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receitas
     */
    select?: receitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receitas
     */
    omit?: receitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receitasInclude<ExtArgs> | null
    /**
     * The data needed to update a receitas.
     */
    data: XOR<receitasUpdateInput, receitasUncheckedUpdateInput>
    /**
     * Choose, which receitas to update.
     */
    where: receitasWhereUniqueInput
  }

  /**
   * receitas updateMany
   */
  export type receitasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update receitas.
     */
    data: XOR<receitasUpdateManyMutationInput, receitasUncheckedUpdateManyInput>
    /**
     * Filter which receitas to update
     */
    where?: receitasWhereInput
    /**
     * Limit how many receitas to update.
     */
    limit?: number
  }

  /**
   * receitas upsert
   */
  export type receitasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receitas
     */
    select?: receitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receitas
     */
    omit?: receitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receitasInclude<ExtArgs> | null
    /**
     * The filter to search for the receitas to update in case it exists.
     */
    where: receitasWhereUniqueInput
    /**
     * In case the receitas found by the `where` argument doesn't exist, create a new receitas with this data.
     */
    create: XOR<receitasCreateInput, receitasUncheckedCreateInput>
    /**
     * In case the receitas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<receitasUpdateInput, receitasUncheckedUpdateInput>
  }

  /**
   * receitas delete
   */
  export type receitasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receitas
     */
    select?: receitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receitas
     */
    omit?: receitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receitasInclude<ExtArgs> | null
    /**
     * Filter which receitas to delete.
     */
    where: receitasWhereUniqueInput
  }

  /**
   * receitas deleteMany
   */
  export type receitasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which receitas to delete
     */
    where?: receitasWhereInput
    /**
     * Limit how many receitas to delete.
     */
    limit?: number
  }

  /**
   * receitas.categorias
   */
  export type receitas$categoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    where?: categoriasWhereInput
  }

  /**
   * receitas without action
   */
  export type receitasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receitas
     */
    select?: receitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receitas
     */
    omit?: receitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receitasInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: number | null
    nome: string | null
    login: string | null
    senha: string | null
    criado_em: Date | null
    alterado_em: Date | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    login: string | null
    senha: string | null
    criado_em: Date | null
    alterado_em: Date | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    nome: number
    login: number
    senha: number
    criado_em: number
    alterado_em: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id?: true
  }

  export type UsuariosSumAggregateInputType = {
    id?: true
  }

  export type UsuariosMinAggregateInputType = {
    id?: true
    nome?: true
    login?: true
    senha?: true
    criado_em?: true
    alterado_em?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    nome?: true
    login?: true
    senha?: true
    criado_em?: true
    alterado_em?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    nome?: true
    login?: true
    senha?: true
    criado_em?: true
    alterado_em?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: number
    nome: string | null
    login: string
    senha: string
    criado_em: Date
    alterado_em: Date
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    login?: boolean
    senha?: boolean
    criado_em?: boolean
    alterado_em?: boolean
    receitas?: boolean | usuarios$receitasArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>



  export type usuariosSelectScalar = {
    id?: boolean
    nome?: boolean
    login?: boolean
    senha?: boolean
    criado_em?: boolean
    alterado_em?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "login" | "senha" | "criado_em" | "alterado_em", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receitas?: boolean | usuarios$receitasArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      receitas: Prisma.$receitasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string | null
      login: string
      senha: string
      criado_em: Date
      alterado_em: Date
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
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
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receitas<T extends usuarios$receitasArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$receitasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$receitasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id: FieldRef<"usuarios", 'Int'>
    readonly nome: FieldRef<"usuarios", 'String'>
    readonly login: FieldRef<"usuarios", 'String'>
    readonly senha: FieldRef<"usuarios", 'String'>
    readonly criado_em: FieldRef<"usuarios", 'DateTime'>
    readonly alterado_em: FieldRef<"usuarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.receitas
   */
  export type usuarios$receitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the receitas
     */
    select?: receitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the receitas
     */
    omit?: receitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: receitasInclude<ExtArgs> | null
    where?: receitasWhereInput
    orderBy?: receitasOrderByWithRelationInput | receitasOrderByWithRelationInput[]
    cursor?: receitasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceitasScalarFieldEnum | ReceitasScalarFieldEnum[]
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
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


  export const CategoriasScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type CategoriasScalarFieldEnum = (typeof CategoriasScalarFieldEnum)[keyof typeof CategoriasScalarFieldEnum]


  export const ReceitasScalarFieldEnum: {
    id: 'id',
    id_usuarios: 'id_usuarios',
    id_categorias: 'id_categorias',
    nome: 'nome',
    tempo_preparo_minutos: 'tempo_preparo_minutos',
    porcoes: 'porcoes',
    modo_preparo: 'modo_preparo',
    ingredientes: 'ingredientes',
    criado_em: 'criado_em',
    alterado_em: 'alterado_em'
  };

  export type ReceitasScalarFieldEnum = (typeof ReceitasScalarFieldEnum)[keyof typeof ReceitasScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    login: 'login',
    senha: 'senha',
    criado_em: 'criado_em',
    alterado_em: 'alterado_em'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const categoriasOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type categoriasOrderByRelevanceFieldEnum = (typeof categoriasOrderByRelevanceFieldEnum)[keyof typeof categoriasOrderByRelevanceFieldEnum]


  export const receitasOrderByRelevanceFieldEnum: {
    nome: 'nome',
    modo_preparo: 'modo_preparo',
    ingredientes: 'ingredientes'
  };

  export type receitasOrderByRelevanceFieldEnum = (typeof receitasOrderByRelevanceFieldEnum)[keyof typeof receitasOrderByRelevanceFieldEnum]


  export const usuariosOrderByRelevanceFieldEnum: {
    nome: 'nome',
    login: 'login',
    senha: 'senha'
  };

  export type usuariosOrderByRelevanceFieldEnum = (typeof usuariosOrderByRelevanceFieldEnum)[keyof typeof usuariosOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type categoriasWhereInput = {
    AND?: categoriasWhereInput | categoriasWhereInput[]
    OR?: categoriasWhereInput[]
    NOT?: categoriasWhereInput | categoriasWhereInput[]
    id?: IntFilter<"categorias"> | number
    nome?: StringNullableFilter<"categorias"> | string | null
    receitas?: ReceitasListRelationFilter
  }

  export type categoriasOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    receitas?: receitasOrderByRelationAggregateInput
    _relevance?: categoriasOrderByRelevanceInput
  }

  export type categoriasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: categoriasWhereInput | categoriasWhereInput[]
    OR?: categoriasWhereInput[]
    NOT?: categoriasWhereInput | categoriasWhereInput[]
    receitas?: ReceitasListRelationFilter
  }, "id" | "nome">

  export type categoriasOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    _count?: categoriasCountOrderByAggregateInput
    _avg?: categoriasAvgOrderByAggregateInput
    _max?: categoriasMaxOrderByAggregateInput
    _min?: categoriasMinOrderByAggregateInput
    _sum?: categoriasSumOrderByAggregateInput
  }

  export type categoriasScalarWhereWithAggregatesInput = {
    AND?: categoriasScalarWhereWithAggregatesInput | categoriasScalarWhereWithAggregatesInput[]
    OR?: categoriasScalarWhereWithAggregatesInput[]
    NOT?: categoriasScalarWhereWithAggregatesInput | categoriasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categorias"> | number
    nome?: StringNullableWithAggregatesFilter<"categorias"> | string | null
  }

  export type receitasWhereInput = {
    AND?: receitasWhereInput | receitasWhereInput[]
    OR?: receitasWhereInput[]
    NOT?: receitasWhereInput | receitasWhereInput[]
    id?: IntFilter<"receitas"> | number
    id_usuarios?: IntFilter<"receitas"> | number
    id_categorias?: IntNullableFilter<"receitas"> | number | null
    nome?: StringNullableFilter<"receitas"> | string | null
    tempo_preparo_minutos?: IntNullableFilter<"receitas"> | number | null
    porcoes?: IntNullableFilter<"receitas"> | number | null
    modo_preparo?: StringFilter<"receitas"> | string
    ingredientes?: StringNullableFilter<"receitas"> | string | null
    criado_em?: DateTimeFilter<"receitas"> | Date | string
    alterado_em?: DateTimeFilter<"receitas"> | Date | string
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    categorias?: XOR<CategoriasNullableScalarRelationFilter, categoriasWhereInput> | null
  }

  export type receitasOrderByWithRelationInput = {
    id?: SortOrder
    id_usuarios?: SortOrder
    id_categorias?: SortOrderInput | SortOrder
    nome?: SortOrderInput | SortOrder
    tempo_preparo_minutos?: SortOrderInput | SortOrder
    porcoes?: SortOrderInput | SortOrder
    modo_preparo?: SortOrder
    ingredientes?: SortOrderInput | SortOrder
    criado_em?: SortOrder
    alterado_em?: SortOrder
    usuarios?: usuariosOrderByWithRelationInput
    categorias?: categoriasOrderByWithRelationInput
    _relevance?: receitasOrderByRelevanceInput
  }

  export type receitasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: receitasWhereInput | receitasWhereInput[]
    OR?: receitasWhereInput[]
    NOT?: receitasWhereInput | receitasWhereInput[]
    id_usuarios?: IntFilter<"receitas"> | number
    id_categorias?: IntNullableFilter<"receitas"> | number | null
    nome?: StringNullableFilter<"receitas"> | string | null
    tempo_preparo_minutos?: IntNullableFilter<"receitas"> | number | null
    porcoes?: IntNullableFilter<"receitas"> | number | null
    modo_preparo?: StringFilter<"receitas"> | string
    ingredientes?: StringNullableFilter<"receitas"> | string | null
    criado_em?: DateTimeFilter<"receitas"> | Date | string
    alterado_em?: DateTimeFilter<"receitas"> | Date | string
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    categorias?: XOR<CategoriasNullableScalarRelationFilter, categoriasWhereInput> | null
  }, "id">

  export type receitasOrderByWithAggregationInput = {
    id?: SortOrder
    id_usuarios?: SortOrder
    id_categorias?: SortOrderInput | SortOrder
    nome?: SortOrderInput | SortOrder
    tempo_preparo_minutos?: SortOrderInput | SortOrder
    porcoes?: SortOrderInput | SortOrder
    modo_preparo?: SortOrder
    ingredientes?: SortOrderInput | SortOrder
    criado_em?: SortOrder
    alterado_em?: SortOrder
    _count?: receitasCountOrderByAggregateInput
    _avg?: receitasAvgOrderByAggregateInput
    _max?: receitasMaxOrderByAggregateInput
    _min?: receitasMinOrderByAggregateInput
    _sum?: receitasSumOrderByAggregateInput
  }

  export type receitasScalarWhereWithAggregatesInput = {
    AND?: receitasScalarWhereWithAggregatesInput | receitasScalarWhereWithAggregatesInput[]
    OR?: receitasScalarWhereWithAggregatesInput[]
    NOT?: receitasScalarWhereWithAggregatesInput | receitasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"receitas"> | number
    id_usuarios?: IntWithAggregatesFilter<"receitas"> | number
    id_categorias?: IntNullableWithAggregatesFilter<"receitas"> | number | null
    nome?: StringNullableWithAggregatesFilter<"receitas"> | string | null
    tempo_preparo_minutos?: IntNullableWithAggregatesFilter<"receitas"> | number | null
    porcoes?: IntNullableWithAggregatesFilter<"receitas"> | number | null
    modo_preparo?: StringWithAggregatesFilter<"receitas"> | string
    ingredientes?: StringNullableWithAggregatesFilter<"receitas"> | string | null
    criado_em?: DateTimeWithAggregatesFilter<"receitas"> | Date | string
    alterado_em?: DateTimeWithAggregatesFilter<"receitas"> | Date | string
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id?: IntFilter<"usuarios"> | number
    nome?: StringNullableFilter<"usuarios"> | string | null
    login?: StringFilter<"usuarios"> | string
    senha?: StringFilter<"usuarios"> | string
    criado_em?: DateTimeFilter<"usuarios"> | Date | string
    alterado_em?: DateTimeFilter<"usuarios"> | Date | string
    receitas?: ReceitasListRelationFilter
  }

  export type usuariosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    login?: SortOrder
    senha?: SortOrder
    criado_em?: SortOrder
    alterado_em?: SortOrder
    receitas?: receitasOrderByRelationAggregateInput
    _relevance?: usuariosOrderByRelevanceInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    login?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nome?: StringNullableFilter<"usuarios"> | string | null
    senha?: StringFilter<"usuarios"> | string
    criado_em?: DateTimeFilter<"usuarios"> | Date | string
    alterado_em?: DateTimeFilter<"usuarios"> | Date | string
    receitas?: ReceitasListRelationFilter
  }, "id" | "login">

  export type usuariosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    login?: SortOrder
    senha?: SortOrder
    criado_em?: SortOrder
    alterado_em?: SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuarios"> | number
    nome?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    login?: StringWithAggregatesFilter<"usuarios"> | string
    senha?: StringWithAggregatesFilter<"usuarios"> | string
    criado_em?: DateTimeWithAggregatesFilter<"usuarios"> | Date | string
    alterado_em?: DateTimeWithAggregatesFilter<"usuarios"> | Date | string
  }

  export type categoriasCreateInput = {
    nome?: string | null
    receitas?: receitasCreateNestedManyWithoutCategoriasInput
  }

  export type categoriasUncheckedCreateInput = {
    id?: number
    nome?: string | null
    receitas?: receitasUncheckedCreateNestedManyWithoutCategoriasInput
  }

  export type categoriasUpdateInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    receitas?: receitasUpdateManyWithoutCategoriasNestedInput
  }

  export type categoriasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    receitas?: receitasUncheckedUpdateManyWithoutCategoriasNestedInput
  }

  export type categoriasCreateManyInput = {
    id?: number
    nome?: string | null
  }

  export type categoriasUpdateManyMutationInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type receitasCreateInput = {
    nome?: string | null
    tempo_preparo_minutos?: number | null
    porcoes?: number | null
    modo_preparo: string
    ingredientes?: string | null
    criado_em: Date | string
    alterado_em: Date | string
    usuarios: usuariosCreateNestedOneWithoutReceitasInput
    categorias?: categoriasCreateNestedOneWithoutReceitasInput
  }

  export type receitasUncheckedCreateInput = {
    id?: number
    id_usuarios: number
    id_categorias?: number | null
    nome?: string | null
    tempo_preparo_minutos?: number | null
    porcoes?: number | null
    modo_preparo: string
    ingredientes?: string | null
    criado_em: Date | string
    alterado_em: Date | string
  }

  export type receitasUpdateInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    tempo_preparo_minutos?: NullableIntFieldUpdateOperationsInput | number | null
    porcoes?: NullableIntFieldUpdateOperationsInput | number | null
    modo_preparo?: StringFieldUpdateOperationsInput | string
    ingredientes?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    alterado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: usuariosUpdateOneRequiredWithoutReceitasNestedInput
    categorias?: categoriasUpdateOneWithoutReceitasNestedInput
  }

  export type receitasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuarios?: IntFieldUpdateOperationsInput | number
    id_categorias?: NullableIntFieldUpdateOperationsInput | number | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    tempo_preparo_minutos?: NullableIntFieldUpdateOperationsInput | number | null
    porcoes?: NullableIntFieldUpdateOperationsInput | number | null
    modo_preparo?: StringFieldUpdateOperationsInput | string
    ingredientes?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    alterado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type receitasCreateManyInput = {
    id?: number
    id_usuarios: number
    id_categorias?: number | null
    nome?: string | null
    tempo_preparo_minutos?: number | null
    porcoes?: number | null
    modo_preparo: string
    ingredientes?: string | null
    criado_em: Date | string
    alterado_em: Date | string
  }

  export type receitasUpdateManyMutationInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    tempo_preparo_minutos?: NullableIntFieldUpdateOperationsInput | number | null
    porcoes?: NullableIntFieldUpdateOperationsInput | number | null
    modo_preparo?: StringFieldUpdateOperationsInput | string
    ingredientes?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    alterado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type receitasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuarios?: IntFieldUpdateOperationsInput | number
    id_categorias?: NullableIntFieldUpdateOperationsInput | number | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    tempo_preparo_minutos?: NullableIntFieldUpdateOperationsInput | number | null
    porcoes?: NullableIntFieldUpdateOperationsInput | number | null
    modo_preparo?: StringFieldUpdateOperationsInput | string
    ingredientes?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    alterado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosCreateInput = {
    nome?: string | null
    login: string
    senha: string
    criado_em: Date | string
    alterado_em: Date | string
    receitas?: receitasCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    id?: number
    nome?: string | null
    login: string
    senha: string
    criado_em: Date | string
    alterado_em: Date | string
    receitas?: receitasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUpdateInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    alterado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    receitas?: receitasUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    alterado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    receitas?: receitasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateManyInput = {
    id?: number
    nome?: string | null
    login: string
    senha: string
    criado_em: Date | string
    alterado_em: Date | string
  }

  export type usuariosUpdateManyMutationInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    alterado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    alterado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ReceitasListRelationFilter = {
    every?: receitasWhereInput
    some?: receitasWhereInput
    none?: receitasWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type receitasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriasOrderByRelevanceInput = {
    fields: categoriasOrderByRelevanceFieldEnum | categoriasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type categoriasCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type categoriasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriasMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type categoriasMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type categoriasSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsuariosScalarRelationFilter = {
    is?: usuariosWhereInput
    isNot?: usuariosWhereInput
  }

  export type CategoriasNullableScalarRelationFilter = {
    is?: categoriasWhereInput | null
    isNot?: categoriasWhereInput | null
  }

  export type receitasOrderByRelevanceInput = {
    fields: receitasOrderByRelevanceFieldEnum | receitasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type receitasCountOrderByAggregateInput = {
    id?: SortOrder
    id_usuarios?: SortOrder
    id_categorias?: SortOrder
    nome?: SortOrder
    tempo_preparo_minutos?: SortOrder
    porcoes?: SortOrder
    modo_preparo?: SortOrder
    ingredientes?: SortOrder
    criado_em?: SortOrder
    alterado_em?: SortOrder
  }

  export type receitasAvgOrderByAggregateInput = {
    id?: SortOrder
    id_usuarios?: SortOrder
    id_categorias?: SortOrder
    tempo_preparo_minutos?: SortOrder
    porcoes?: SortOrder
  }

  export type receitasMaxOrderByAggregateInput = {
    id?: SortOrder
    id_usuarios?: SortOrder
    id_categorias?: SortOrder
    nome?: SortOrder
    tempo_preparo_minutos?: SortOrder
    porcoes?: SortOrder
    modo_preparo?: SortOrder
    ingredientes?: SortOrder
    criado_em?: SortOrder
    alterado_em?: SortOrder
  }

  export type receitasMinOrderByAggregateInput = {
    id?: SortOrder
    id_usuarios?: SortOrder
    id_categorias?: SortOrder
    nome?: SortOrder
    tempo_preparo_minutos?: SortOrder
    porcoes?: SortOrder
    modo_preparo?: SortOrder
    ingredientes?: SortOrder
    criado_em?: SortOrder
    alterado_em?: SortOrder
  }

  export type receitasSumOrderByAggregateInput = {
    id?: SortOrder
    id_usuarios?: SortOrder
    id_categorias?: SortOrder
    tempo_preparo_minutos?: SortOrder
    porcoes?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type usuariosOrderByRelevanceInput = {
    fields: usuariosOrderByRelevanceFieldEnum | usuariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usuariosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    login?: SortOrder
    senha?: SortOrder
    criado_em?: SortOrder
    alterado_em?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    login?: SortOrder
    senha?: SortOrder
    criado_em?: SortOrder
    alterado_em?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    login?: SortOrder
    senha?: SortOrder
    criado_em?: SortOrder
    alterado_em?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type receitasCreateNestedManyWithoutCategoriasInput = {
    create?: XOR<receitasCreateWithoutCategoriasInput, receitasUncheckedCreateWithoutCategoriasInput> | receitasCreateWithoutCategoriasInput[] | receitasUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: receitasCreateOrConnectWithoutCategoriasInput | receitasCreateOrConnectWithoutCategoriasInput[]
    createMany?: receitasCreateManyCategoriasInputEnvelope
    connect?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
  }

  export type receitasUncheckedCreateNestedManyWithoutCategoriasInput = {
    create?: XOR<receitasCreateWithoutCategoriasInput, receitasUncheckedCreateWithoutCategoriasInput> | receitasCreateWithoutCategoriasInput[] | receitasUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: receitasCreateOrConnectWithoutCategoriasInput | receitasCreateOrConnectWithoutCategoriasInput[]
    createMany?: receitasCreateManyCategoriasInputEnvelope
    connect?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type receitasUpdateManyWithoutCategoriasNestedInput = {
    create?: XOR<receitasCreateWithoutCategoriasInput, receitasUncheckedCreateWithoutCategoriasInput> | receitasCreateWithoutCategoriasInput[] | receitasUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: receitasCreateOrConnectWithoutCategoriasInput | receitasCreateOrConnectWithoutCategoriasInput[]
    upsert?: receitasUpsertWithWhereUniqueWithoutCategoriasInput | receitasUpsertWithWhereUniqueWithoutCategoriasInput[]
    createMany?: receitasCreateManyCategoriasInputEnvelope
    set?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
    disconnect?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
    delete?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
    connect?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
    update?: receitasUpdateWithWhereUniqueWithoutCategoriasInput | receitasUpdateWithWhereUniqueWithoutCategoriasInput[]
    updateMany?: receitasUpdateManyWithWhereWithoutCategoriasInput | receitasUpdateManyWithWhereWithoutCategoriasInput[]
    deleteMany?: receitasScalarWhereInput | receitasScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type receitasUncheckedUpdateManyWithoutCategoriasNestedInput = {
    create?: XOR<receitasCreateWithoutCategoriasInput, receitasUncheckedCreateWithoutCategoriasInput> | receitasCreateWithoutCategoriasInput[] | receitasUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: receitasCreateOrConnectWithoutCategoriasInput | receitasCreateOrConnectWithoutCategoriasInput[]
    upsert?: receitasUpsertWithWhereUniqueWithoutCategoriasInput | receitasUpsertWithWhereUniqueWithoutCategoriasInput[]
    createMany?: receitasCreateManyCategoriasInputEnvelope
    set?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
    disconnect?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
    delete?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
    connect?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
    update?: receitasUpdateWithWhereUniqueWithoutCategoriasInput | receitasUpdateWithWhereUniqueWithoutCategoriasInput[]
    updateMany?: receitasUpdateManyWithWhereWithoutCategoriasInput | receitasUpdateManyWithWhereWithoutCategoriasInput[]
    deleteMany?: receitasScalarWhereInput | receitasScalarWhereInput[]
  }

  export type usuariosCreateNestedOneWithoutReceitasInput = {
    create?: XOR<usuariosCreateWithoutReceitasInput, usuariosUncheckedCreateWithoutReceitasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutReceitasInput
    connect?: usuariosWhereUniqueInput
  }

  export type categoriasCreateNestedOneWithoutReceitasInput = {
    create?: XOR<categoriasCreateWithoutReceitasInput, categoriasUncheckedCreateWithoutReceitasInput>
    connectOrCreate?: categoriasCreateOrConnectWithoutReceitasInput
    connect?: categoriasWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usuariosUpdateOneRequiredWithoutReceitasNestedInput = {
    create?: XOR<usuariosCreateWithoutReceitasInput, usuariosUncheckedCreateWithoutReceitasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutReceitasInput
    upsert?: usuariosUpsertWithoutReceitasInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutReceitasInput, usuariosUpdateWithoutReceitasInput>, usuariosUncheckedUpdateWithoutReceitasInput>
  }

  export type categoriasUpdateOneWithoutReceitasNestedInput = {
    create?: XOR<categoriasCreateWithoutReceitasInput, categoriasUncheckedCreateWithoutReceitasInput>
    connectOrCreate?: categoriasCreateOrConnectWithoutReceitasInput
    upsert?: categoriasUpsertWithoutReceitasInput
    disconnect?: categoriasWhereInput | boolean
    delete?: categoriasWhereInput | boolean
    connect?: categoriasWhereUniqueInput
    update?: XOR<XOR<categoriasUpdateToOneWithWhereWithoutReceitasInput, categoriasUpdateWithoutReceitasInput>, categoriasUncheckedUpdateWithoutReceitasInput>
  }

  export type receitasCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<receitasCreateWithoutUsuariosInput, receitasUncheckedCreateWithoutUsuariosInput> | receitasCreateWithoutUsuariosInput[] | receitasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: receitasCreateOrConnectWithoutUsuariosInput | receitasCreateOrConnectWithoutUsuariosInput[]
    createMany?: receitasCreateManyUsuariosInputEnvelope
    connect?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
  }

  export type receitasUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<receitasCreateWithoutUsuariosInput, receitasUncheckedCreateWithoutUsuariosInput> | receitasCreateWithoutUsuariosInput[] | receitasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: receitasCreateOrConnectWithoutUsuariosInput | receitasCreateOrConnectWithoutUsuariosInput[]
    createMany?: receitasCreateManyUsuariosInputEnvelope
    connect?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
  }

  export type receitasUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<receitasCreateWithoutUsuariosInput, receitasUncheckedCreateWithoutUsuariosInput> | receitasCreateWithoutUsuariosInput[] | receitasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: receitasCreateOrConnectWithoutUsuariosInput | receitasCreateOrConnectWithoutUsuariosInput[]
    upsert?: receitasUpsertWithWhereUniqueWithoutUsuariosInput | receitasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: receitasCreateManyUsuariosInputEnvelope
    set?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
    disconnect?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
    delete?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
    connect?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
    update?: receitasUpdateWithWhereUniqueWithoutUsuariosInput | receitasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: receitasUpdateManyWithWhereWithoutUsuariosInput | receitasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: receitasScalarWhereInput | receitasScalarWhereInput[]
  }

  export type receitasUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<receitasCreateWithoutUsuariosInput, receitasUncheckedCreateWithoutUsuariosInput> | receitasCreateWithoutUsuariosInput[] | receitasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: receitasCreateOrConnectWithoutUsuariosInput | receitasCreateOrConnectWithoutUsuariosInput[]
    upsert?: receitasUpsertWithWhereUniqueWithoutUsuariosInput | receitasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: receitasCreateManyUsuariosInputEnvelope
    set?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
    disconnect?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
    delete?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
    connect?: receitasWhereUniqueInput | receitasWhereUniqueInput[]
    update?: receitasUpdateWithWhereUniqueWithoutUsuariosInput | receitasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: receitasUpdateManyWithWhereWithoutUsuariosInput | receitasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: receitasScalarWhereInput | receitasScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type receitasCreateWithoutCategoriasInput = {
    nome?: string | null
    tempo_preparo_minutos?: number | null
    porcoes?: number | null
    modo_preparo: string
    ingredientes?: string | null
    criado_em: Date | string
    alterado_em: Date | string
    usuarios: usuariosCreateNestedOneWithoutReceitasInput
  }

  export type receitasUncheckedCreateWithoutCategoriasInput = {
    id?: number
    id_usuarios: number
    nome?: string | null
    tempo_preparo_minutos?: number | null
    porcoes?: number | null
    modo_preparo: string
    ingredientes?: string | null
    criado_em: Date | string
    alterado_em: Date | string
  }

  export type receitasCreateOrConnectWithoutCategoriasInput = {
    where: receitasWhereUniqueInput
    create: XOR<receitasCreateWithoutCategoriasInput, receitasUncheckedCreateWithoutCategoriasInput>
  }

  export type receitasCreateManyCategoriasInputEnvelope = {
    data: receitasCreateManyCategoriasInput | receitasCreateManyCategoriasInput[]
    skipDuplicates?: boolean
  }

  export type receitasUpsertWithWhereUniqueWithoutCategoriasInput = {
    where: receitasWhereUniqueInput
    update: XOR<receitasUpdateWithoutCategoriasInput, receitasUncheckedUpdateWithoutCategoriasInput>
    create: XOR<receitasCreateWithoutCategoriasInput, receitasUncheckedCreateWithoutCategoriasInput>
  }

  export type receitasUpdateWithWhereUniqueWithoutCategoriasInput = {
    where: receitasWhereUniqueInput
    data: XOR<receitasUpdateWithoutCategoriasInput, receitasUncheckedUpdateWithoutCategoriasInput>
  }

  export type receitasUpdateManyWithWhereWithoutCategoriasInput = {
    where: receitasScalarWhereInput
    data: XOR<receitasUpdateManyMutationInput, receitasUncheckedUpdateManyWithoutCategoriasInput>
  }

  export type receitasScalarWhereInput = {
    AND?: receitasScalarWhereInput | receitasScalarWhereInput[]
    OR?: receitasScalarWhereInput[]
    NOT?: receitasScalarWhereInput | receitasScalarWhereInput[]
    id?: IntFilter<"receitas"> | number
    id_usuarios?: IntFilter<"receitas"> | number
    id_categorias?: IntNullableFilter<"receitas"> | number | null
    nome?: StringNullableFilter<"receitas"> | string | null
    tempo_preparo_minutos?: IntNullableFilter<"receitas"> | number | null
    porcoes?: IntNullableFilter<"receitas"> | number | null
    modo_preparo?: StringFilter<"receitas"> | string
    ingredientes?: StringNullableFilter<"receitas"> | string | null
    criado_em?: DateTimeFilter<"receitas"> | Date | string
    alterado_em?: DateTimeFilter<"receitas"> | Date | string
  }

  export type usuariosCreateWithoutReceitasInput = {
    nome?: string | null
    login: string
    senha: string
    criado_em: Date | string
    alterado_em: Date | string
  }

  export type usuariosUncheckedCreateWithoutReceitasInput = {
    id?: number
    nome?: string | null
    login: string
    senha: string
    criado_em: Date | string
    alterado_em: Date | string
  }

  export type usuariosCreateOrConnectWithoutReceitasInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutReceitasInput, usuariosUncheckedCreateWithoutReceitasInput>
  }

  export type categoriasCreateWithoutReceitasInput = {
    nome?: string | null
  }

  export type categoriasUncheckedCreateWithoutReceitasInput = {
    id?: number
    nome?: string | null
  }

  export type categoriasCreateOrConnectWithoutReceitasInput = {
    where: categoriasWhereUniqueInput
    create: XOR<categoriasCreateWithoutReceitasInput, categoriasUncheckedCreateWithoutReceitasInput>
  }

  export type usuariosUpsertWithoutReceitasInput = {
    update: XOR<usuariosUpdateWithoutReceitasInput, usuariosUncheckedUpdateWithoutReceitasInput>
    create: XOR<usuariosCreateWithoutReceitasInput, usuariosUncheckedCreateWithoutReceitasInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutReceitasInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutReceitasInput, usuariosUncheckedUpdateWithoutReceitasInput>
  }

  export type usuariosUpdateWithoutReceitasInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    alterado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosUncheckedUpdateWithoutReceitasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    alterado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriasUpsertWithoutReceitasInput = {
    update: XOR<categoriasUpdateWithoutReceitasInput, categoriasUncheckedUpdateWithoutReceitasInput>
    create: XOR<categoriasCreateWithoutReceitasInput, categoriasUncheckedCreateWithoutReceitasInput>
    where?: categoriasWhereInput
  }

  export type categoriasUpdateToOneWithWhereWithoutReceitasInput = {
    where?: categoriasWhereInput
    data: XOR<categoriasUpdateWithoutReceitasInput, categoriasUncheckedUpdateWithoutReceitasInput>
  }

  export type categoriasUpdateWithoutReceitasInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriasUncheckedUpdateWithoutReceitasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type receitasCreateWithoutUsuariosInput = {
    nome?: string | null
    tempo_preparo_minutos?: number | null
    porcoes?: number | null
    modo_preparo: string
    ingredientes?: string | null
    criado_em: Date | string
    alterado_em: Date | string
    categorias?: categoriasCreateNestedOneWithoutReceitasInput
  }

  export type receitasUncheckedCreateWithoutUsuariosInput = {
    id?: number
    id_categorias?: number | null
    nome?: string | null
    tempo_preparo_minutos?: number | null
    porcoes?: number | null
    modo_preparo: string
    ingredientes?: string | null
    criado_em: Date | string
    alterado_em: Date | string
  }

  export type receitasCreateOrConnectWithoutUsuariosInput = {
    where: receitasWhereUniqueInput
    create: XOR<receitasCreateWithoutUsuariosInput, receitasUncheckedCreateWithoutUsuariosInput>
  }

  export type receitasCreateManyUsuariosInputEnvelope = {
    data: receitasCreateManyUsuariosInput | receitasCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type receitasUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: receitasWhereUniqueInput
    update: XOR<receitasUpdateWithoutUsuariosInput, receitasUncheckedUpdateWithoutUsuariosInput>
    create: XOR<receitasCreateWithoutUsuariosInput, receitasUncheckedCreateWithoutUsuariosInput>
  }

  export type receitasUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: receitasWhereUniqueInput
    data: XOR<receitasUpdateWithoutUsuariosInput, receitasUncheckedUpdateWithoutUsuariosInput>
  }

  export type receitasUpdateManyWithWhereWithoutUsuariosInput = {
    where: receitasScalarWhereInput
    data: XOR<receitasUpdateManyMutationInput, receitasUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type receitasCreateManyCategoriasInput = {
    id?: number
    id_usuarios: number
    nome?: string | null
    tempo_preparo_minutos?: number | null
    porcoes?: number | null
    modo_preparo: string
    ingredientes?: string | null
    criado_em: Date | string
    alterado_em: Date | string
  }

  export type receitasUpdateWithoutCategoriasInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    tempo_preparo_minutos?: NullableIntFieldUpdateOperationsInput | number | null
    porcoes?: NullableIntFieldUpdateOperationsInput | number | null
    modo_preparo?: StringFieldUpdateOperationsInput | string
    ingredientes?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    alterado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: usuariosUpdateOneRequiredWithoutReceitasNestedInput
  }

  export type receitasUncheckedUpdateWithoutCategoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuarios?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    tempo_preparo_minutos?: NullableIntFieldUpdateOperationsInput | number | null
    porcoes?: NullableIntFieldUpdateOperationsInput | number | null
    modo_preparo?: StringFieldUpdateOperationsInput | string
    ingredientes?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    alterado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type receitasUncheckedUpdateManyWithoutCategoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuarios?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    tempo_preparo_minutos?: NullableIntFieldUpdateOperationsInput | number | null
    porcoes?: NullableIntFieldUpdateOperationsInput | number | null
    modo_preparo?: StringFieldUpdateOperationsInput | string
    ingredientes?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    alterado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type receitasCreateManyUsuariosInput = {
    id?: number
    id_categorias?: number | null
    nome?: string | null
    tempo_preparo_minutos?: number | null
    porcoes?: number | null
    modo_preparo: string
    ingredientes?: string | null
    criado_em: Date | string
    alterado_em: Date | string
  }

  export type receitasUpdateWithoutUsuariosInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    tempo_preparo_minutos?: NullableIntFieldUpdateOperationsInput | number | null
    porcoes?: NullableIntFieldUpdateOperationsInput | number | null
    modo_preparo?: StringFieldUpdateOperationsInput | string
    ingredientes?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    alterado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    categorias?: categoriasUpdateOneWithoutReceitasNestedInput
  }

  export type receitasUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_categorias?: NullableIntFieldUpdateOperationsInput | number | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    tempo_preparo_minutos?: NullableIntFieldUpdateOperationsInput | number | null
    porcoes?: NullableIntFieldUpdateOperationsInput | number | null
    modo_preparo?: StringFieldUpdateOperationsInput | string
    ingredientes?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    alterado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type receitasUncheckedUpdateManyWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_categorias?: NullableIntFieldUpdateOperationsInput | number | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    tempo_preparo_minutos?: NullableIntFieldUpdateOperationsInput | number | null
    porcoes?: NullableIntFieldUpdateOperationsInput | number | null
    modo_preparo?: StringFieldUpdateOperationsInput | string
    ingredientes?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    alterado_em?: DateTimeFieldUpdateOperationsInput | Date | string
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