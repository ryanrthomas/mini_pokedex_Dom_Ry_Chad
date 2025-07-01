
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
 * Model Hero
 * 
 */
export type Hero = $Result.DefaultSelection<Prisma.$HeroPayload>
/**
 * Model Weapon
 * 
 */
export type Weapon = $Result.DefaultSelection<Prisma.$WeaponPayload>
/**
 * Model WeaponStats
 * 
 */
export type WeaponStats = $Result.DefaultSelection<Prisma.$WeaponStatsPayload>
/**
 * Model Backpack
 * 
 */
export type Backpack = $Result.DefaultSelection<Prisma.$BackpackPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Rarity: {
  COMMON: 'COMMON',
  UNCOMMON: 'UNCOMMON',
  RARE: 'RARE',
  HEROIC: 'HEROIC',
  LEGENDARY: 'LEGENDARY',
  MYTHICAL: 'MYTHICAL'
};

export type Rarity = (typeof Rarity)[keyof typeof Rarity]


export const Role: {
  TANK: 'TANK',
  ASSASSIN: 'ASSASSIN',
  MAGE: 'MAGE',
  FOUNTAIN_GUARD: 'FOUNTAIN_GUARD'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Rarity = $Enums.Rarity

export const Rarity: typeof $Enums.Rarity

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Heroes
 * const heroes = await prisma.hero.findMany()
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
   * // Fetch zero or more Heroes
   * const heroes = await prisma.hero.findMany()
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
   * `prisma.hero`: Exposes CRUD operations for the **Hero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Heroes
    * const heroes = await prisma.hero.findMany()
    * ```
    */
  get hero(): Prisma.HeroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weapon`: Exposes CRUD operations for the **Weapon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Weapons
    * const weapons = await prisma.weapon.findMany()
    * ```
    */
  get weapon(): Prisma.WeaponDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weaponStats`: Exposes CRUD operations for the **WeaponStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeaponStats
    * const weaponStats = await prisma.weaponStats.findMany()
    * ```
    */
  get weaponStats(): Prisma.WeaponStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.backpack`: Exposes CRUD operations for the **Backpack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Backpacks
    * const backpacks = await prisma.backpack.findMany()
    * ```
    */
  get backpack(): Prisma.BackpackDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Hero: 'Hero',
    Weapon: 'Weapon',
    WeaponStats: 'WeaponStats',
    Backpack: 'Backpack'
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
      modelProps: "hero" | "weapon" | "weaponStats" | "backpack"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Hero: {
        payload: Prisma.$HeroPayload<ExtArgs>
        fields: Prisma.HeroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HeroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HeroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          findFirst: {
            args: Prisma.HeroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HeroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          findMany: {
            args: Prisma.HeroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>[]
          }
          create: {
            args: Prisma.HeroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          createMany: {
            args: Prisma.HeroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HeroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>[]
          }
          delete: {
            args: Prisma.HeroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          update: {
            args: Prisma.HeroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          deleteMany: {
            args: Prisma.HeroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HeroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HeroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>[]
          }
          upsert: {
            args: Prisma.HeroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          aggregate: {
            args: Prisma.HeroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHero>
          }
          groupBy: {
            args: Prisma.HeroGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeroGroupByOutputType>[]
          }
          count: {
            args: Prisma.HeroCountArgs<ExtArgs>
            result: $Utils.Optional<HeroCountAggregateOutputType> | number
          }
        }
      }
      Weapon: {
        payload: Prisma.$WeaponPayload<ExtArgs>
        fields: Prisma.WeaponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeaponFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeaponFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>
          }
          findFirst: {
            args: Prisma.WeaponFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeaponFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>
          }
          findMany: {
            args: Prisma.WeaponFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>[]
          }
          create: {
            args: Prisma.WeaponCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>
          }
          createMany: {
            args: Prisma.WeaponCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeaponCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>[]
          }
          delete: {
            args: Prisma.WeaponDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>
          }
          update: {
            args: Prisma.WeaponUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>
          }
          deleteMany: {
            args: Prisma.WeaponDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeaponUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeaponUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>[]
          }
          upsert: {
            args: Prisma.WeaponUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponPayload>
          }
          aggregate: {
            args: Prisma.WeaponAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeapon>
          }
          groupBy: {
            args: Prisma.WeaponGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeaponGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeaponCountArgs<ExtArgs>
            result: $Utils.Optional<WeaponCountAggregateOutputType> | number
          }
        }
      }
      WeaponStats: {
        payload: Prisma.$WeaponStatsPayload<ExtArgs>
        fields: Prisma.WeaponStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeaponStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeaponStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponStatsPayload>
          }
          findFirst: {
            args: Prisma.WeaponStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeaponStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponStatsPayload>
          }
          findMany: {
            args: Prisma.WeaponStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponStatsPayload>[]
          }
          create: {
            args: Prisma.WeaponStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponStatsPayload>
          }
          createMany: {
            args: Prisma.WeaponStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeaponStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponStatsPayload>[]
          }
          delete: {
            args: Prisma.WeaponStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponStatsPayload>
          }
          update: {
            args: Prisma.WeaponStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponStatsPayload>
          }
          deleteMany: {
            args: Prisma.WeaponStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeaponStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeaponStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponStatsPayload>[]
          }
          upsert: {
            args: Prisma.WeaponStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaponStatsPayload>
          }
          aggregate: {
            args: Prisma.WeaponStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeaponStats>
          }
          groupBy: {
            args: Prisma.WeaponStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeaponStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeaponStatsCountArgs<ExtArgs>
            result: $Utils.Optional<WeaponStatsCountAggregateOutputType> | number
          }
        }
      }
      Backpack: {
        payload: Prisma.$BackpackPayload<ExtArgs>
        fields: Prisma.BackpackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BackpackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackpackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BackpackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackpackPayload>
          }
          findFirst: {
            args: Prisma.BackpackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackpackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BackpackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackpackPayload>
          }
          findMany: {
            args: Prisma.BackpackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackpackPayload>[]
          }
          create: {
            args: Prisma.BackpackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackpackPayload>
          }
          createMany: {
            args: Prisma.BackpackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BackpackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackpackPayload>[]
          }
          delete: {
            args: Prisma.BackpackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackpackPayload>
          }
          update: {
            args: Prisma.BackpackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackpackPayload>
          }
          deleteMany: {
            args: Prisma.BackpackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BackpackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BackpackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackpackPayload>[]
          }
          upsert: {
            args: Prisma.BackpackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackpackPayload>
          }
          aggregate: {
            args: Prisma.BackpackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBackpack>
          }
          groupBy: {
            args: Prisma.BackpackGroupByArgs<ExtArgs>
            result: $Utils.Optional<BackpackGroupByOutputType>[]
          }
          count: {
            args: Prisma.BackpackCountArgs<ExtArgs>
            result: $Utils.Optional<BackpackCountAggregateOutputType> | number
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
    hero?: HeroOmit
    weapon?: WeaponOmit
    weaponStats?: WeaponStatsOmit
    backpack?: BackpackOmit
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
   * Count Type HeroCountOutputType
   */

  export type HeroCountOutputType = {
    weapon: number
  }

  export type HeroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weapon?: boolean | HeroCountOutputTypeCountWeaponArgs
  }

  // Custom InputTypes
  /**
   * HeroCountOutputType without action
   */
  export type HeroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroCountOutputType
     */
    select?: HeroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HeroCountOutputType without action
   */
  export type HeroCountOutputTypeCountWeaponArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeaponWhereInput
  }


  /**
   * Count Type WeaponCountOutputType
   */

  export type WeaponCountOutputType = {
    weapon_stats: number
  }

  export type WeaponCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weapon_stats?: boolean | WeaponCountOutputTypeCountWeapon_statsArgs
  }

  // Custom InputTypes
  /**
   * WeaponCountOutputType without action
   */
  export type WeaponCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponCountOutputType
     */
    select?: WeaponCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WeaponCountOutputType without action
   */
  export type WeaponCountOutputTypeCountWeapon_statsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeaponStatsWhereInput
  }


  /**
   * Count Type BackpackCountOutputType
   */

  export type BackpackCountOutputType = {
    weapon: number
  }

  export type BackpackCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weapon?: boolean | BackpackCountOutputTypeCountWeaponArgs
  }

  // Custom InputTypes
  /**
   * BackpackCountOutputType without action
   */
  export type BackpackCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackpackCountOutputType
     */
    select?: BackpackCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BackpackCountOutputType without action
   */
  export type BackpackCountOutputTypeCountWeaponArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeaponWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Hero
   */

  export type AggregateHero = {
    _count: HeroCountAggregateOutputType | null
    _avg: HeroAvgAggregateOutputType | null
    _sum: HeroSumAggregateOutputType | null
    _min: HeroMinAggregateOutputType | null
    _max: HeroMaxAggregateOutputType | null
  }

  export type HeroAvgAggregateOutputType = {
    id: number | null
    level: number | null
  }

  export type HeroSumAggregateOutputType = {
    id: number | null
    level: number | null
  }

  export type HeroMinAggregateOutputType = {
    id: number | null
    name: string | null
    class: $Enums.Role | null
    level: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HeroMaxAggregateOutputType = {
    id: number | null
    name: string | null
    class: $Enums.Role | null
    level: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HeroCountAggregateOutputType = {
    id: number
    name: number
    class: number
    level: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HeroAvgAggregateInputType = {
    id?: true
    level?: true
  }

  export type HeroSumAggregateInputType = {
    id?: true
    level?: true
  }

  export type HeroMinAggregateInputType = {
    id?: true
    name?: true
    class?: true
    level?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HeroMaxAggregateInputType = {
    id?: true
    name?: true
    class?: true
    level?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HeroCountAggregateInputType = {
    id?: true
    name?: true
    class?: true
    level?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HeroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hero to aggregate.
     */
    where?: HeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heroes to fetch.
     */
    orderBy?: HeroOrderByWithRelationInput | HeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Heroes
    **/
    _count?: true | HeroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HeroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HeroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeroMaxAggregateInputType
  }

  export type GetHeroAggregateType<T extends HeroAggregateArgs> = {
        [P in keyof T & keyof AggregateHero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHero[P]>
      : GetScalarType<T[P], AggregateHero[P]>
  }




  export type HeroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeroWhereInput
    orderBy?: HeroOrderByWithAggregationInput | HeroOrderByWithAggregationInput[]
    by: HeroScalarFieldEnum[] | HeroScalarFieldEnum
    having?: HeroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeroCountAggregateInputType | true
    _avg?: HeroAvgAggregateInputType
    _sum?: HeroSumAggregateInputType
    _min?: HeroMinAggregateInputType
    _max?: HeroMaxAggregateInputType
  }

  export type HeroGroupByOutputType = {
    id: number
    name: string
    class: $Enums.Role
    level: number
    createdAt: Date
    updatedAt: Date
    _count: HeroCountAggregateOutputType | null
    _avg: HeroAvgAggregateOutputType | null
    _sum: HeroSumAggregateOutputType | null
    _min: HeroMinAggregateOutputType | null
    _max: HeroMaxAggregateOutputType | null
  }

  type GetHeroGroupByPayload<T extends HeroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeroGroupByOutputType[P]>
            : GetScalarType<T[P], HeroGroupByOutputType[P]>
        }
      >
    >


  export type HeroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    class?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    weapon?: boolean | Hero$weaponArgs<ExtArgs>
    backpack?: boolean | Hero$backpackArgs<ExtArgs>
    _count?: boolean | HeroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hero"]>

  export type HeroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    class?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hero"]>

  export type HeroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    class?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hero"]>

  export type HeroSelectScalar = {
    id?: boolean
    name?: boolean
    class?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HeroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "class" | "level" | "createdAt" | "updatedAt", ExtArgs["result"]["hero"]>
  export type HeroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weapon?: boolean | Hero$weaponArgs<ExtArgs>
    backpack?: boolean | Hero$backpackArgs<ExtArgs>
    _count?: boolean | HeroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HeroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HeroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HeroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hero"
    objects: {
      weapon: Prisma.$WeaponPayload<ExtArgs>[]
      backpack: Prisma.$BackpackPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      class: $Enums.Role
      level: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hero"]>
    composites: {}
  }

  type HeroGetPayload<S extends boolean | null | undefined | HeroDefaultArgs> = $Result.GetResult<Prisma.$HeroPayload, S>

  type HeroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HeroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HeroCountAggregateInputType | true
    }

  export interface HeroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hero'], meta: { name: 'Hero' } }
    /**
     * Find zero or one Hero that matches the filter.
     * @param {HeroFindUniqueArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HeroFindUniqueArgs>(args: SelectSubset<T, HeroFindUniqueArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HeroFindUniqueOrThrowArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HeroFindUniqueOrThrowArgs>(args: SelectSubset<T, HeroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroFindFirstArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HeroFindFirstArgs>(args?: SelectSubset<T, HeroFindFirstArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroFindFirstOrThrowArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HeroFindFirstOrThrowArgs>(args?: SelectSubset<T, HeroFindFirstOrThrowArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Heroes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Heroes
     * const heroes = await prisma.hero.findMany()
     * 
     * // Get first 10 Heroes
     * const heroes = await prisma.hero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const heroWithIdOnly = await prisma.hero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HeroFindManyArgs>(args?: SelectSubset<T, HeroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hero.
     * @param {HeroCreateArgs} args - Arguments to create a Hero.
     * @example
     * // Create one Hero
     * const Hero = await prisma.hero.create({
     *   data: {
     *     // ... data to create a Hero
     *   }
     * })
     * 
     */
    create<T extends HeroCreateArgs>(args: SelectSubset<T, HeroCreateArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Heroes.
     * @param {HeroCreateManyArgs} args - Arguments to create many Heroes.
     * @example
     * // Create many Heroes
     * const hero = await prisma.hero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HeroCreateManyArgs>(args?: SelectSubset<T, HeroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Heroes and returns the data saved in the database.
     * @param {HeroCreateManyAndReturnArgs} args - Arguments to create many Heroes.
     * @example
     * // Create many Heroes
     * const hero = await prisma.hero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Heroes and only return the `id`
     * const heroWithIdOnly = await prisma.hero.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HeroCreateManyAndReturnArgs>(args?: SelectSubset<T, HeroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hero.
     * @param {HeroDeleteArgs} args - Arguments to delete one Hero.
     * @example
     * // Delete one Hero
     * const Hero = await prisma.hero.delete({
     *   where: {
     *     // ... filter to delete one Hero
     *   }
     * })
     * 
     */
    delete<T extends HeroDeleteArgs>(args: SelectSubset<T, HeroDeleteArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hero.
     * @param {HeroUpdateArgs} args - Arguments to update one Hero.
     * @example
     * // Update one Hero
     * const hero = await prisma.hero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HeroUpdateArgs>(args: SelectSubset<T, HeroUpdateArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Heroes.
     * @param {HeroDeleteManyArgs} args - Arguments to filter Heroes to delete.
     * @example
     * // Delete a few Heroes
     * const { count } = await prisma.hero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HeroDeleteManyArgs>(args?: SelectSubset<T, HeroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Heroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Heroes
     * const hero = await prisma.hero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HeroUpdateManyArgs>(args: SelectSubset<T, HeroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Heroes and returns the data updated in the database.
     * @param {HeroUpdateManyAndReturnArgs} args - Arguments to update many Heroes.
     * @example
     * // Update many Heroes
     * const hero = await prisma.hero.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Heroes and only return the `id`
     * const heroWithIdOnly = await prisma.hero.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HeroUpdateManyAndReturnArgs>(args: SelectSubset<T, HeroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hero.
     * @param {HeroUpsertArgs} args - Arguments to update or create a Hero.
     * @example
     * // Update or create a Hero
     * const hero = await prisma.hero.upsert({
     *   create: {
     *     // ... data to create a Hero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hero we want to update
     *   }
     * })
     */
    upsert<T extends HeroUpsertArgs>(args: SelectSubset<T, HeroUpsertArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Heroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroCountArgs} args - Arguments to filter Heroes to count.
     * @example
     * // Count the number of Heroes
     * const count = await prisma.hero.count({
     *   where: {
     *     // ... the filter for the Heroes we want to count
     *   }
     * })
    **/
    count<T extends HeroCountArgs>(
      args?: Subset<T, HeroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HeroAggregateArgs>(args: Subset<T, HeroAggregateArgs>): Prisma.PrismaPromise<GetHeroAggregateType<T>>

    /**
     * Group by Hero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroGroupByArgs} args - Group by arguments.
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
      T extends HeroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeroGroupByArgs['orderBy'] }
        : { orderBy?: HeroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HeroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hero model
   */
  readonly fields: HeroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HeroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    weapon<T extends Hero$weaponArgs<ExtArgs> = {}>(args?: Subset<T, Hero$weaponArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    backpack<T extends Hero$backpackArgs<ExtArgs> = {}>(args?: Subset<T, Hero$backpackArgs<ExtArgs>>): Prisma__BackpackClient<$Result.GetResult<Prisma.$BackpackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Hero model
   */
  interface HeroFieldRefs {
    readonly id: FieldRef<"Hero", 'Int'>
    readonly name: FieldRef<"Hero", 'String'>
    readonly class: FieldRef<"Hero", 'Role'>
    readonly level: FieldRef<"Hero", 'Int'>
    readonly createdAt: FieldRef<"Hero", 'DateTime'>
    readonly updatedAt: FieldRef<"Hero", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hero findUnique
   */
  export type HeroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * Filter, which Hero to fetch.
     */
    where: HeroWhereUniqueInput
  }

  /**
   * Hero findUniqueOrThrow
   */
  export type HeroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * Filter, which Hero to fetch.
     */
    where: HeroWhereUniqueInput
  }

  /**
   * Hero findFirst
   */
  export type HeroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * Filter, which Hero to fetch.
     */
    where?: HeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heroes to fetch.
     */
    orderBy?: HeroOrderByWithRelationInput | HeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Heroes.
     */
    cursor?: HeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Heroes.
     */
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[]
  }

  /**
   * Hero findFirstOrThrow
   */
  export type HeroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * Filter, which Hero to fetch.
     */
    where?: HeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heroes to fetch.
     */
    orderBy?: HeroOrderByWithRelationInput | HeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Heroes.
     */
    cursor?: HeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Heroes.
     */
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[]
  }

  /**
   * Hero findMany
   */
  export type HeroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * Filter, which Heroes to fetch.
     */
    where?: HeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heroes to fetch.
     */
    orderBy?: HeroOrderByWithRelationInput | HeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Heroes.
     */
    cursor?: HeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heroes.
     */
    skip?: number
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[]
  }

  /**
   * Hero create
   */
  export type HeroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * The data needed to create a Hero.
     */
    data: XOR<HeroCreateInput, HeroUncheckedCreateInput>
  }

  /**
   * Hero createMany
   */
  export type HeroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Heroes.
     */
    data: HeroCreateManyInput | HeroCreateManyInput[]
  }

  /**
   * Hero createManyAndReturn
   */
  export type HeroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * The data used to create many Heroes.
     */
    data: HeroCreateManyInput | HeroCreateManyInput[]
  }

  /**
   * Hero update
   */
  export type HeroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * The data needed to update a Hero.
     */
    data: XOR<HeroUpdateInput, HeroUncheckedUpdateInput>
    /**
     * Choose, which Hero to update.
     */
    where: HeroWhereUniqueInput
  }

  /**
   * Hero updateMany
   */
  export type HeroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Heroes.
     */
    data: XOR<HeroUpdateManyMutationInput, HeroUncheckedUpdateManyInput>
    /**
     * Filter which Heroes to update
     */
    where?: HeroWhereInput
    /**
     * Limit how many Heroes to update.
     */
    limit?: number
  }

  /**
   * Hero updateManyAndReturn
   */
  export type HeroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * The data used to update Heroes.
     */
    data: XOR<HeroUpdateManyMutationInput, HeroUncheckedUpdateManyInput>
    /**
     * Filter which Heroes to update
     */
    where?: HeroWhereInput
    /**
     * Limit how many Heroes to update.
     */
    limit?: number
  }

  /**
   * Hero upsert
   */
  export type HeroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * The filter to search for the Hero to update in case it exists.
     */
    where: HeroWhereUniqueInput
    /**
     * In case the Hero found by the `where` argument doesn't exist, create a new Hero with this data.
     */
    create: XOR<HeroCreateInput, HeroUncheckedCreateInput>
    /**
     * In case the Hero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeroUpdateInput, HeroUncheckedUpdateInput>
  }

  /**
   * Hero delete
   */
  export type HeroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * Filter which Hero to delete.
     */
    where: HeroWhereUniqueInput
  }

  /**
   * Hero deleteMany
   */
  export type HeroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Heroes to delete
     */
    where?: HeroWhereInput
    /**
     * Limit how many Heroes to delete.
     */
    limit?: number
  }

  /**
   * Hero.weapon
   */
  export type Hero$weaponArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weapon
     */
    omit?: WeaponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponInclude<ExtArgs> | null
    where?: WeaponWhereInput
    orderBy?: WeaponOrderByWithRelationInput | WeaponOrderByWithRelationInput[]
    cursor?: WeaponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeaponScalarFieldEnum | WeaponScalarFieldEnum[]
  }

  /**
   * Hero.backpack
   */
  export type Hero$backpackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Backpack
     */
    select?: BackpackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Backpack
     */
    omit?: BackpackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackpackInclude<ExtArgs> | null
    where?: BackpackWhereInput
  }

  /**
   * Hero without action
   */
  export type HeroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
  }


  /**
   * Model Weapon
   */

  export type AggregateWeapon = {
    _count: WeaponCountAggregateOutputType | null
    _avg: WeaponAvgAggregateOutputType | null
    _sum: WeaponSumAggregateOutputType | null
    _min: WeaponMinAggregateOutputType | null
    _max: WeaponMaxAggregateOutputType | null
  }

  export type WeaponAvgAggregateOutputType = {
    id: number | null
    hero_id: number | null
    backpack_id: number | null
  }

  export type WeaponSumAggregateOutputType = {
    id: number | null
    hero_id: number | null
    backpack_id: number | null
  }

  export type WeaponMinAggregateOutputType = {
    id: number | null
    hero_id: number | null
    backpack_id: number | null
    name: string | null
    rarity: $Enums.Rarity | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeaponMaxAggregateOutputType = {
    id: number | null
    hero_id: number | null
    backpack_id: number | null
    name: string | null
    rarity: $Enums.Rarity | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeaponCountAggregateOutputType = {
    id: number
    hero_id: number
    backpack_id: number
    name: number
    rarity: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WeaponAvgAggregateInputType = {
    id?: true
    hero_id?: true
    backpack_id?: true
  }

  export type WeaponSumAggregateInputType = {
    id?: true
    hero_id?: true
    backpack_id?: true
  }

  export type WeaponMinAggregateInputType = {
    id?: true
    hero_id?: true
    backpack_id?: true
    name?: true
    rarity?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeaponMaxAggregateInputType = {
    id?: true
    hero_id?: true
    backpack_id?: true
    name?: true
    rarity?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeaponCountAggregateInputType = {
    id?: true
    hero_id?: true
    backpack_id?: true
    name?: true
    rarity?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WeaponAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Weapon to aggregate.
     */
    where?: WeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weapons to fetch.
     */
    orderBy?: WeaponOrderByWithRelationInput | WeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weapons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Weapons
    **/
    _count?: true | WeaponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeaponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeaponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeaponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeaponMaxAggregateInputType
  }

  export type GetWeaponAggregateType<T extends WeaponAggregateArgs> = {
        [P in keyof T & keyof AggregateWeapon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeapon[P]>
      : GetScalarType<T[P], AggregateWeapon[P]>
  }




  export type WeaponGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeaponWhereInput
    orderBy?: WeaponOrderByWithAggregationInput | WeaponOrderByWithAggregationInput[]
    by: WeaponScalarFieldEnum[] | WeaponScalarFieldEnum
    having?: WeaponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeaponCountAggregateInputType | true
    _avg?: WeaponAvgAggregateInputType
    _sum?: WeaponSumAggregateInputType
    _min?: WeaponMinAggregateInputType
    _max?: WeaponMaxAggregateInputType
  }

  export type WeaponGroupByOutputType = {
    id: number
    hero_id: number
    backpack_id: number
    name: string
    rarity: $Enums.Rarity
    description: string
    createdAt: Date
    updatedAt: Date
    _count: WeaponCountAggregateOutputType | null
    _avg: WeaponAvgAggregateOutputType | null
    _sum: WeaponSumAggregateOutputType | null
    _min: WeaponMinAggregateOutputType | null
    _max: WeaponMaxAggregateOutputType | null
  }

  type GetWeaponGroupByPayload<T extends WeaponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeaponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeaponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeaponGroupByOutputType[P]>
            : GetScalarType<T[P], WeaponGroupByOutputType[P]>
        }
      >
    >


  export type WeaponSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hero_id?: boolean
    backpack_id?: boolean
    name?: boolean
    rarity?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hero?: boolean | HeroDefaultArgs<ExtArgs>
    backpack?: boolean | BackpackDefaultArgs<ExtArgs>
    weapon_stats?: boolean | Weapon$weapon_statsArgs<ExtArgs>
    _count?: boolean | WeaponCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weapon"]>

  export type WeaponSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hero_id?: boolean
    backpack_id?: boolean
    name?: boolean
    rarity?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hero?: boolean | HeroDefaultArgs<ExtArgs>
    backpack?: boolean | BackpackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weapon"]>

  export type WeaponSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hero_id?: boolean
    backpack_id?: boolean
    name?: boolean
    rarity?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hero?: boolean | HeroDefaultArgs<ExtArgs>
    backpack?: boolean | BackpackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weapon"]>

  export type WeaponSelectScalar = {
    id?: boolean
    hero_id?: boolean
    backpack_id?: boolean
    name?: boolean
    rarity?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WeaponOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hero_id" | "backpack_id" | "name" | "rarity" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["weapon"]>
  export type WeaponInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hero?: boolean | HeroDefaultArgs<ExtArgs>
    backpack?: boolean | BackpackDefaultArgs<ExtArgs>
    weapon_stats?: boolean | Weapon$weapon_statsArgs<ExtArgs>
    _count?: boolean | WeaponCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WeaponIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hero?: boolean | HeroDefaultArgs<ExtArgs>
    backpack?: boolean | BackpackDefaultArgs<ExtArgs>
  }
  export type WeaponIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hero?: boolean | HeroDefaultArgs<ExtArgs>
    backpack?: boolean | BackpackDefaultArgs<ExtArgs>
  }

  export type $WeaponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Weapon"
    objects: {
      hero: Prisma.$HeroPayload<ExtArgs>
      backpack: Prisma.$BackpackPayload<ExtArgs>
      weapon_stats: Prisma.$WeaponStatsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hero_id: number
      backpack_id: number
      name: string
      rarity: $Enums.Rarity
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["weapon"]>
    composites: {}
  }

  type WeaponGetPayload<S extends boolean | null | undefined | WeaponDefaultArgs> = $Result.GetResult<Prisma.$WeaponPayload, S>

  type WeaponCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeaponFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeaponCountAggregateInputType | true
    }

  export interface WeaponDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Weapon'], meta: { name: 'Weapon' } }
    /**
     * Find zero or one Weapon that matches the filter.
     * @param {WeaponFindUniqueArgs} args - Arguments to find a Weapon
     * @example
     * // Get one Weapon
     * const weapon = await prisma.weapon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeaponFindUniqueArgs>(args: SelectSubset<T, WeaponFindUniqueArgs<ExtArgs>>): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Weapon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeaponFindUniqueOrThrowArgs} args - Arguments to find a Weapon
     * @example
     * // Get one Weapon
     * const weapon = await prisma.weapon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeaponFindUniqueOrThrowArgs>(args: SelectSubset<T, WeaponFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Weapon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponFindFirstArgs} args - Arguments to find a Weapon
     * @example
     * // Get one Weapon
     * const weapon = await prisma.weapon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeaponFindFirstArgs>(args?: SelectSubset<T, WeaponFindFirstArgs<ExtArgs>>): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Weapon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponFindFirstOrThrowArgs} args - Arguments to find a Weapon
     * @example
     * // Get one Weapon
     * const weapon = await prisma.weapon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeaponFindFirstOrThrowArgs>(args?: SelectSubset<T, WeaponFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Weapons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Weapons
     * const weapons = await prisma.weapon.findMany()
     * 
     * // Get first 10 Weapons
     * const weapons = await prisma.weapon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weaponWithIdOnly = await prisma.weapon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeaponFindManyArgs>(args?: SelectSubset<T, WeaponFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Weapon.
     * @param {WeaponCreateArgs} args - Arguments to create a Weapon.
     * @example
     * // Create one Weapon
     * const Weapon = await prisma.weapon.create({
     *   data: {
     *     // ... data to create a Weapon
     *   }
     * })
     * 
     */
    create<T extends WeaponCreateArgs>(args: SelectSubset<T, WeaponCreateArgs<ExtArgs>>): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Weapons.
     * @param {WeaponCreateManyArgs} args - Arguments to create many Weapons.
     * @example
     * // Create many Weapons
     * const weapon = await prisma.weapon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeaponCreateManyArgs>(args?: SelectSubset<T, WeaponCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Weapons and returns the data saved in the database.
     * @param {WeaponCreateManyAndReturnArgs} args - Arguments to create many Weapons.
     * @example
     * // Create many Weapons
     * const weapon = await prisma.weapon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Weapons and only return the `id`
     * const weaponWithIdOnly = await prisma.weapon.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeaponCreateManyAndReturnArgs>(args?: SelectSubset<T, WeaponCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Weapon.
     * @param {WeaponDeleteArgs} args - Arguments to delete one Weapon.
     * @example
     * // Delete one Weapon
     * const Weapon = await prisma.weapon.delete({
     *   where: {
     *     // ... filter to delete one Weapon
     *   }
     * })
     * 
     */
    delete<T extends WeaponDeleteArgs>(args: SelectSubset<T, WeaponDeleteArgs<ExtArgs>>): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Weapon.
     * @param {WeaponUpdateArgs} args - Arguments to update one Weapon.
     * @example
     * // Update one Weapon
     * const weapon = await prisma.weapon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeaponUpdateArgs>(args: SelectSubset<T, WeaponUpdateArgs<ExtArgs>>): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Weapons.
     * @param {WeaponDeleteManyArgs} args - Arguments to filter Weapons to delete.
     * @example
     * // Delete a few Weapons
     * const { count } = await prisma.weapon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeaponDeleteManyArgs>(args?: SelectSubset<T, WeaponDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weapons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Weapons
     * const weapon = await prisma.weapon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeaponUpdateManyArgs>(args: SelectSubset<T, WeaponUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weapons and returns the data updated in the database.
     * @param {WeaponUpdateManyAndReturnArgs} args - Arguments to update many Weapons.
     * @example
     * // Update many Weapons
     * const weapon = await prisma.weapon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Weapons and only return the `id`
     * const weaponWithIdOnly = await prisma.weapon.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WeaponUpdateManyAndReturnArgs>(args: SelectSubset<T, WeaponUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Weapon.
     * @param {WeaponUpsertArgs} args - Arguments to update or create a Weapon.
     * @example
     * // Update or create a Weapon
     * const weapon = await prisma.weapon.upsert({
     *   create: {
     *     // ... data to create a Weapon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Weapon we want to update
     *   }
     * })
     */
    upsert<T extends WeaponUpsertArgs>(args: SelectSubset<T, WeaponUpsertArgs<ExtArgs>>): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Weapons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponCountArgs} args - Arguments to filter Weapons to count.
     * @example
     * // Count the number of Weapons
     * const count = await prisma.weapon.count({
     *   where: {
     *     // ... the filter for the Weapons we want to count
     *   }
     * })
    **/
    count<T extends WeaponCountArgs>(
      args?: Subset<T, WeaponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeaponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Weapon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeaponAggregateArgs>(args: Subset<T, WeaponAggregateArgs>): Prisma.PrismaPromise<GetWeaponAggregateType<T>>

    /**
     * Group by Weapon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponGroupByArgs} args - Group by arguments.
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
      T extends WeaponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeaponGroupByArgs['orderBy'] }
        : { orderBy?: WeaponGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeaponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeaponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Weapon model
   */
  readonly fields: WeaponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Weapon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeaponClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hero<T extends HeroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HeroDefaultArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    backpack<T extends BackpackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BackpackDefaultArgs<ExtArgs>>): Prisma__BackpackClient<$Result.GetResult<Prisma.$BackpackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    weapon_stats<T extends Weapon$weapon_statsArgs<ExtArgs> = {}>(args?: Subset<T, Weapon$weapon_statsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaponStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Weapon model
   */
  interface WeaponFieldRefs {
    readonly id: FieldRef<"Weapon", 'Int'>
    readonly hero_id: FieldRef<"Weapon", 'Int'>
    readonly backpack_id: FieldRef<"Weapon", 'Int'>
    readonly name: FieldRef<"Weapon", 'String'>
    readonly rarity: FieldRef<"Weapon", 'Rarity'>
    readonly description: FieldRef<"Weapon", 'String'>
    readonly createdAt: FieldRef<"Weapon", 'DateTime'>
    readonly updatedAt: FieldRef<"Weapon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Weapon findUnique
   */
  export type WeaponFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weapon
     */
    omit?: WeaponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponInclude<ExtArgs> | null
    /**
     * Filter, which Weapon to fetch.
     */
    where: WeaponWhereUniqueInput
  }

  /**
   * Weapon findUniqueOrThrow
   */
  export type WeaponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weapon
     */
    omit?: WeaponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponInclude<ExtArgs> | null
    /**
     * Filter, which Weapon to fetch.
     */
    where: WeaponWhereUniqueInput
  }

  /**
   * Weapon findFirst
   */
  export type WeaponFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weapon
     */
    omit?: WeaponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponInclude<ExtArgs> | null
    /**
     * Filter, which Weapon to fetch.
     */
    where?: WeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weapons to fetch.
     */
    orderBy?: WeaponOrderByWithRelationInput | WeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weapons.
     */
    cursor?: WeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weapons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weapons.
     */
    distinct?: WeaponScalarFieldEnum | WeaponScalarFieldEnum[]
  }

  /**
   * Weapon findFirstOrThrow
   */
  export type WeaponFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weapon
     */
    omit?: WeaponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponInclude<ExtArgs> | null
    /**
     * Filter, which Weapon to fetch.
     */
    where?: WeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weapons to fetch.
     */
    orderBy?: WeaponOrderByWithRelationInput | WeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weapons.
     */
    cursor?: WeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weapons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weapons.
     */
    distinct?: WeaponScalarFieldEnum | WeaponScalarFieldEnum[]
  }

  /**
   * Weapon findMany
   */
  export type WeaponFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weapon
     */
    omit?: WeaponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponInclude<ExtArgs> | null
    /**
     * Filter, which Weapons to fetch.
     */
    where?: WeaponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weapons to fetch.
     */
    orderBy?: WeaponOrderByWithRelationInput | WeaponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Weapons.
     */
    cursor?: WeaponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weapons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weapons.
     */
    skip?: number
    distinct?: WeaponScalarFieldEnum | WeaponScalarFieldEnum[]
  }

  /**
   * Weapon create
   */
  export type WeaponCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weapon
     */
    omit?: WeaponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponInclude<ExtArgs> | null
    /**
     * The data needed to create a Weapon.
     */
    data: XOR<WeaponCreateInput, WeaponUncheckedCreateInput>
  }

  /**
   * Weapon createMany
   */
  export type WeaponCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Weapons.
     */
    data: WeaponCreateManyInput | WeaponCreateManyInput[]
  }

  /**
   * Weapon createManyAndReturn
   */
  export type WeaponCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Weapon
     */
    omit?: WeaponOmit<ExtArgs> | null
    /**
     * The data used to create many Weapons.
     */
    data: WeaponCreateManyInput | WeaponCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Weapon update
   */
  export type WeaponUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weapon
     */
    omit?: WeaponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponInclude<ExtArgs> | null
    /**
     * The data needed to update a Weapon.
     */
    data: XOR<WeaponUpdateInput, WeaponUncheckedUpdateInput>
    /**
     * Choose, which Weapon to update.
     */
    where: WeaponWhereUniqueInput
  }

  /**
   * Weapon updateMany
   */
  export type WeaponUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Weapons.
     */
    data: XOR<WeaponUpdateManyMutationInput, WeaponUncheckedUpdateManyInput>
    /**
     * Filter which Weapons to update
     */
    where?: WeaponWhereInput
    /**
     * Limit how many Weapons to update.
     */
    limit?: number
  }

  /**
   * Weapon updateManyAndReturn
   */
  export type WeaponUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Weapon
     */
    omit?: WeaponOmit<ExtArgs> | null
    /**
     * The data used to update Weapons.
     */
    data: XOR<WeaponUpdateManyMutationInput, WeaponUncheckedUpdateManyInput>
    /**
     * Filter which Weapons to update
     */
    where?: WeaponWhereInput
    /**
     * Limit how many Weapons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Weapon upsert
   */
  export type WeaponUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weapon
     */
    omit?: WeaponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponInclude<ExtArgs> | null
    /**
     * The filter to search for the Weapon to update in case it exists.
     */
    where: WeaponWhereUniqueInput
    /**
     * In case the Weapon found by the `where` argument doesn't exist, create a new Weapon with this data.
     */
    create: XOR<WeaponCreateInput, WeaponUncheckedCreateInput>
    /**
     * In case the Weapon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeaponUpdateInput, WeaponUncheckedUpdateInput>
  }

  /**
   * Weapon delete
   */
  export type WeaponDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weapon
     */
    omit?: WeaponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponInclude<ExtArgs> | null
    /**
     * Filter which Weapon to delete.
     */
    where: WeaponWhereUniqueInput
  }

  /**
   * Weapon deleteMany
   */
  export type WeaponDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Weapons to delete
     */
    where?: WeaponWhereInput
    /**
     * Limit how many Weapons to delete.
     */
    limit?: number
  }

  /**
   * Weapon.weapon_stats
   */
  export type Weapon$weapon_statsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponStats
     */
    select?: WeaponStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeaponStats
     */
    omit?: WeaponStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponStatsInclude<ExtArgs> | null
    where?: WeaponStatsWhereInput
    orderBy?: WeaponStatsOrderByWithRelationInput | WeaponStatsOrderByWithRelationInput[]
    cursor?: WeaponStatsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeaponStatsScalarFieldEnum | WeaponStatsScalarFieldEnum[]
  }

  /**
   * Weapon without action
   */
  export type WeaponDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weapon
     */
    omit?: WeaponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponInclude<ExtArgs> | null
  }


  /**
   * Model WeaponStats
   */

  export type AggregateWeaponStats = {
    _count: WeaponStatsCountAggregateOutputType | null
    _avg: WeaponStatsAvgAggregateOutputType | null
    _sum: WeaponStatsSumAggregateOutputType | null
    _min: WeaponStatsMinAggregateOutputType | null
    _max: WeaponStatsMaxAggregateOutputType | null
  }

  export type WeaponStatsAvgAggregateOutputType = {
    id: number | null
    weapon_id: number | null
    weapon_str: number | null
    weapon_def: number | null
    weapon_int: number | null
    weapon_crit: number | null
  }

  export type WeaponStatsSumAggregateOutputType = {
    id: number | null
    weapon_id: number | null
    weapon_str: number | null
    weapon_def: number | null
    weapon_int: number | null
    weapon_crit: number | null
  }

  export type WeaponStatsMinAggregateOutputType = {
    id: number | null
    weapon_id: number | null
    weapon_str: number | null
    weapon_def: number | null
    weapon_int: number | null
    weapon_crit: number | null
    createdAt: Date | null
  }

  export type WeaponStatsMaxAggregateOutputType = {
    id: number | null
    weapon_id: number | null
    weapon_str: number | null
    weapon_def: number | null
    weapon_int: number | null
    weapon_crit: number | null
    createdAt: Date | null
  }

  export type WeaponStatsCountAggregateOutputType = {
    id: number
    weapon_id: number
    weapon_str: number
    weapon_def: number
    weapon_int: number
    weapon_crit: number
    createdAt: number
    _all: number
  }


  export type WeaponStatsAvgAggregateInputType = {
    id?: true
    weapon_id?: true
    weapon_str?: true
    weapon_def?: true
    weapon_int?: true
    weapon_crit?: true
  }

  export type WeaponStatsSumAggregateInputType = {
    id?: true
    weapon_id?: true
    weapon_str?: true
    weapon_def?: true
    weapon_int?: true
    weapon_crit?: true
  }

  export type WeaponStatsMinAggregateInputType = {
    id?: true
    weapon_id?: true
    weapon_str?: true
    weapon_def?: true
    weapon_int?: true
    weapon_crit?: true
    createdAt?: true
  }

  export type WeaponStatsMaxAggregateInputType = {
    id?: true
    weapon_id?: true
    weapon_str?: true
    weapon_def?: true
    weapon_int?: true
    weapon_crit?: true
    createdAt?: true
  }

  export type WeaponStatsCountAggregateInputType = {
    id?: true
    weapon_id?: true
    weapon_str?: true
    weapon_def?: true
    weapon_int?: true
    weapon_crit?: true
    createdAt?: true
    _all?: true
  }

  export type WeaponStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeaponStats to aggregate.
     */
    where?: WeaponStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeaponStats to fetch.
     */
    orderBy?: WeaponStatsOrderByWithRelationInput | WeaponStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeaponStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeaponStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeaponStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeaponStats
    **/
    _count?: true | WeaponStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeaponStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeaponStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeaponStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeaponStatsMaxAggregateInputType
  }

  export type GetWeaponStatsAggregateType<T extends WeaponStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateWeaponStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeaponStats[P]>
      : GetScalarType<T[P], AggregateWeaponStats[P]>
  }




  export type WeaponStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeaponStatsWhereInput
    orderBy?: WeaponStatsOrderByWithAggregationInput | WeaponStatsOrderByWithAggregationInput[]
    by: WeaponStatsScalarFieldEnum[] | WeaponStatsScalarFieldEnum
    having?: WeaponStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeaponStatsCountAggregateInputType | true
    _avg?: WeaponStatsAvgAggregateInputType
    _sum?: WeaponStatsSumAggregateInputType
    _min?: WeaponStatsMinAggregateInputType
    _max?: WeaponStatsMaxAggregateInputType
  }

  export type WeaponStatsGroupByOutputType = {
    id: number
    weapon_id: number
    weapon_str: number
    weapon_def: number
    weapon_int: number
    weapon_crit: number
    createdAt: Date
    _count: WeaponStatsCountAggregateOutputType | null
    _avg: WeaponStatsAvgAggregateOutputType | null
    _sum: WeaponStatsSumAggregateOutputType | null
    _min: WeaponStatsMinAggregateOutputType | null
    _max: WeaponStatsMaxAggregateOutputType | null
  }

  type GetWeaponStatsGroupByPayload<T extends WeaponStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeaponStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeaponStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeaponStatsGroupByOutputType[P]>
            : GetScalarType<T[P], WeaponStatsGroupByOutputType[P]>
        }
      >
    >


  export type WeaponStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weapon_id?: boolean
    weapon_str?: boolean
    weapon_def?: boolean
    weapon_int?: boolean
    weapon_crit?: boolean
    createdAt?: boolean
    weapon?: boolean | WeaponDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weaponStats"]>

  export type WeaponStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weapon_id?: boolean
    weapon_str?: boolean
    weapon_def?: boolean
    weapon_int?: boolean
    weapon_crit?: boolean
    createdAt?: boolean
    weapon?: boolean | WeaponDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weaponStats"]>

  export type WeaponStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weapon_id?: boolean
    weapon_str?: boolean
    weapon_def?: boolean
    weapon_int?: boolean
    weapon_crit?: boolean
    createdAt?: boolean
    weapon?: boolean | WeaponDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weaponStats"]>

  export type WeaponStatsSelectScalar = {
    id?: boolean
    weapon_id?: boolean
    weapon_str?: boolean
    weapon_def?: boolean
    weapon_int?: boolean
    weapon_crit?: boolean
    createdAt?: boolean
  }

  export type WeaponStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "weapon_id" | "weapon_str" | "weapon_def" | "weapon_int" | "weapon_crit" | "createdAt", ExtArgs["result"]["weaponStats"]>
  export type WeaponStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weapon?: boolean | WeaponDefaultArgs<ExtArgs>
  }
  export type WeaponStatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weapon?: boolean | WeaponDefaultArgs<ExtArgs>
  }
  export type WeaponStatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weapon?: boolean | WeaponDefaultArgs<ExtArgs>
  }

  export type $WeaponStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeaponStats"
    objects: {
      weapon: Prisma.$WeaponPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      weapon_id: number
      weapon_str: number
      weapon_def: number
      weapon_int: number
      weapon_crit: number
      createdAt: Date
    }, ExtArgs["result"]["weaponStats"]>
    composites: {}
  }

  type WeaponStatsGetPayload<S extends boolean | null | undefined | WeaponStatsDefaultArgs> = $Result.GetResult<Prisma.$WeaponStatsPayload, S>

  type WeaponStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeaponStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeaponStatsCountAggregateInputType | true
    }

  export interface WeaponStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeaponStats'], meta: { name: 'WeaponStats' } }
    /**
     * Find zero or one WeaponStats that matches the filter.
     * @param {WeaponStatsFindUniqueArgs} args - Arguments to find a WeaponStats
     * @example
     * // Get one WeaponStats
     * const weaponStats = await prisma.weaponStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeaponStatsFindUniqueArgs>(args: SelectSubset<T, WeaponStatsFindUniqueArgs<ExtArgs>>): Prisma__WeaponStatsClient<$Result.GetResult<Prisma.$WeaponStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeaponStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeaponStatsFindUniqueOrThrowArgs} args - Arguments to find a WeaponStats
     * @example
     * // Get one WeaponStats
     * const weaponStats = await prisma.weaponStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeaponStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, WeaponStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeaponStatsClient<$Result.GetResult<Prisma.$WeaponStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeaponStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponStatsFindFirstArgs} args - Arguments to find a WeaponStats
     * @example
     * // Get one WeaponStats
     * const weaponStats = await prisma.weaponStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeaponStatsFindFirstArgs>(args?: SelectSubset<T, WeaponStatsFindFirstArgs<ExtArgs>>): Prisma__WeaponStatsClient<$Result.GetResult<Prisma.$WeaponStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeaponStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponStatsFindFirstOrThrowArgs} args - Arguments to find a WeaponStats
     * @example
     * // Get one WeaponStats
     * const weaponStats = await prisma.weaponStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeaponStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, WeaponStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeaponStatsClient<$Result.GetResult<Prisma.$WeaponStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeaponStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeaponStats
     * const weaponStats = await prisma.weaponStats.findMany()
     * 
     * // Get first 10 WeaponStats
     * const weaponStats = await prisma.weaponStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weaponStatsWithIdOnly = await prisma.weaponStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeaponStatsFindManyArgs>(args?: SelectSubset<T, WeaponStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaponStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeaponStats.
     * @param {WeaponStatsCreateArgs} args - Arguments to create a WeaponStats.
     * @example
     * // Create one WeaponStats
     * const WeaponStats = await prisma.weaponStats.create({
     *   data: {
     *     // ... data to create a WeaponStats
     *   }
     * })
     * 
     */
    create<T extends WeaponStatsCreateArgs>(args: SelectSubset<T, WeaponStatsCreateArgs<ExtArgs>>): Prisma__WeaponStatsClient<$Result.GetResult<Prisma.$WeaponStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeaponStats.
     * @param {WeaponStatsCreateManyArgs} args - Arguments to create many WeaponStats.
     * @example
     * // Create many WeaponStats
     * const weaponStats = await prisma.weaponStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeaponStatsCreateManyArgs>(args?: SelectSubset<T, WeaponStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeaponStats and returns the data saved in the database.
     * @param {WeaponStatsCreateManyAndReturnArgs} args - Arguments to create many WeaponStats.
     * @example
     * // Create many WeaponStats
     * const weaponStats = await prisma.weaponStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeaponStats and only return the `id`
     * const weaponStatsWithIdOnly = await prisma.weaponStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeaponStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, WeaponStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaponStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeaponStats.
     * @param {WeaponStatsDeleteArgs} args - Arguments to delete one WeaponStats.
     * @example
     * // Delete one WeaponStats
     * const WeaponStats = await prisma.weaponStats.delete({
     *   where: {
     *     // ... filter to delete one WeaponStats
     *   }
     * })
     * 
     */
    delete<T extends WeaponStatsDeleteArgs>(args: SelectSubset<T, WeaponStatsDeleteArgs<ExtArgs>>): Prisma__WeaponStatsClient<$Result.GetResult<Prisma.$WeaponStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeaponStats.
     * @param {WeaponStatsUpdateArgs} args - Arguments to update one WeaponStats.
     * @example
     * // Update one WeaponStats
     * const weaponStats = await prisma.weaponStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeaponStatsUpdateArgs>(args: SelectSubset<T, WeaponStatsUpdateArgs<ExtArgs>>): Prisma__WeaponStatsClient<$Result.GetResult<Prisma.$WeaponStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeaponStats.
     * @param {WeaponStatsDeleteManyArgs} args - Arguments to filter WeaponStats to delete.
     * @example
     * // Delete a few WeaponStats
     * const { count } = await prisma.weaponStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeaponStatsDeleteManyArgs>(args?: SelectSubset<T, WeaponStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeaponStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeaponStats
     * const weaponStats = await prisma.weaponStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeaponStatsUpdateManyArgs>(args: SelectSubset<T, WeaponStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeaponStats and returns the data updated in the database.
     * @param {WeaponStatsUpdateManyAndReturnArgs} args - Arguments to update many WeaponStats.
     * @example
     * // Update many WeaponStats
     * const weaponStats = await prisma.weaponStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeaponStats and only return the `id`
     * const weaponStatsWithIdOnly = await prisma.weaponStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WeaponStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, WeaponStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaponStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeaponStats.
     * @param {WeaponStatsUpsertArgs} args - Arguments to update or create a WeaponStats.
     * @example
     * // Update or create a WeaponStats
     * const weaponStats = await prisma.weaponStats.upsert({
     *   create: {
     *     // ... data to create a WeaponStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeaponStats we want to update
     *   }
     * })
     */
    upsert<T extends WeaponStatsUpsertArgs>(args: SelectSubset<T, WeaponStatsUpsertArgs<ExtArgs>>): Prisma__WeaponStatsClient<$Result.GetResult<Prisma.$WeaponStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeaponStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponStatsCountArgs} args - Arguments to filter WeaponStats to count.
     * @example
     * // Count the number of WeaponStats
     * const count = await prisma.weaponStats.count({
     *   where: {
     *     // ... the filter for the WeaponStats we want to count
     *   }
     * })
    **/
    count<T extends WeaponStatsCountArgs>(
      args?: Subset<T, WeaponStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeaponStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeaponStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeaponStatsAggregateArgs>(args: Subset<T, WeaponStatsAggregateArgs>): Prisma.PrismaPromise<GetWeaponStatsAggregateType<T>>

    /**
     * Group by WeaponStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaponStatsGroupByArgs} args - Group by arguments.
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
      T extends WeaponStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeaponStatsGroupByArgs['orderBy'] }
        : { orderBy?: WeaponStatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeaponStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeaponStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeaponStats model
   */
  readonly fields: WeaponStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeaponStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeaponStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    weapon<T extends WeaponDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WeaponDefaultArgs<ExtArgs>>): Prisma__WeaponClient<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WeaponStats model
   */
  interface WeaponStatsFieldRefs {
    readonly id: FieldRef<"WeaponStats", 'Int'>
    readonly weapon_id: FieldRef<"WeaponStats", 'Int'>
    readonly weapon_str: FieldRef<"WeaponStats", 'Int'>
    readonly weapon_def: FieldRef<"WeaponStats", 'Int'>
    readonly weapon_int: FieldRef<"WeaponStats", 'Int'>
    readonly weapon_crit: FieldRef<"WeaponStats", 'Int'>
    readonly createdAt: FieldRef<"WeaponStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WeaponStats findUnique
   */
  export type WeaponStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponStats
     */
    select?: WeaponStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeaponStats
     */
    omit?: WeaponStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponStatsInclude<ExtArgs> | null
    /**
     * Filter, which WeaponStats to fetch.
     */
    where: WeaponStatsWhereUniqueInput
  }

  /**
   * WeaponStats findUniqueOrThrow
   */
  export type WeaponStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponStats
     */
    select?: WeaponStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeaponStats
     */
    omit?: WeaponStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponStatsInclude<ExtArgs> | null
    /**
     * Filter, which WeaponStats to fetch.
     */
    where: WeaponStatsWhereUniqueInput
  }

  /**
   * WeaponStats findFirst
   */
  export type WeaponStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponStats
     */
    select?: WeaponStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeaponStats
     */
    omit?: WeaponStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponStatsInclude<ExtArgs> | null
    /**
     * Filter, which WeaponStats to fetch.
     */
    where?: WeaponStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeaponStats to fetch.
     */
    orderBy?: WeaponStatsOrderByWithRelationInput | WeaponStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeaponStats.
     */
    cursor?: WeaponStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeaponStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeaponStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeaponStats.
     */
    distinct?: WeaponStatsScalarFieldEnum | WeaponStatsScalarFieldEnum[]
  }

  /**
   * WeaponStats findFirstOrThrow
   */
  export type WeaponStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponStats
     */
    select?: WeaponStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeaponStats
     */
    omit?: WeaponStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponStatsInclude<ExtArgs> | null
    /**
     * Filter, which WeaponStats to fetch.
     */
    where?: WeaponStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeaponStats to fetch.
     */
    orderBy?: WeaponStatsOrderByWithRelationInput | WeaponStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeaponStats.
     */
    cursor?: WeaponStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeaponStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeaponStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeaponStats.
     */
    distinct?: WeaponStatsScalarFieldEnum | WeaponStatsScalarFieldEnum[]
  }

  /**
   * WeaponStats findMany
   */
  export type WeaponStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponStats
     */
    select?: WeaponStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeaponStats
     */
    omit?: WeaponStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponStatsInclude<ExtArgs> | null
    /**
     * Filter, which WeaponStats to fetch.
     */
    where?: WeaponStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeaponStats to fetch.
     */
    orderBy?: WeaponStatsOrderByWithRelationInput | WeaponStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeaponStats.
     */
    cursor?: WeaponStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeaponStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeaponStats.
     */
    skip?: number
    distinct?: WeaponStatsScalarFieldEnum | WeaponStatsScalarFieldEnum[]
  }

  /**
   * WeaponStats create
   */
  export type WeaponStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponStats
     */
    select?: WeaponStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeaponStats
     */
    omit?: WeaponStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a WeaponStats.
     */
    data: XOR<WeaponStatsCreateInput, WeaponStatsUncheckedCreateInput>
  }

  /**
   * WeaponStats createMany
   */
  export type WeaponStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeaponStats.
     */
    data: WeaponStatsCreateManyInput | WeaponStatsCreateManyInput[]
  }

  /**
   * WeaponStats createManyAndReturn
   */
  export type WeaponStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponStats
     */
    select?: WeaponStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeaponStats
     */
    omit?: WeaponStatsOmit<ExtArgs> | null
    /**
     * The data used to create many WeaponStats.
     */
    data: WeaponStatsCreateManyInput | WeaponStatsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponStatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeaponStats update
   */
  export type WeaponStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponStats
     */
    select?: WeaponStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeaponStats
     */
    omit?: WeaponStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a WeaponStats.
     */
    data: XOR<WeaponStatsUpdateInput, WeaponStatsUncheckedUpdateInput>
    /**
     * Choose, which WeaponStats to update.
     */
    where: WeaponStatsWhereUniqueInput
  }

  /**
   * WeaponStats updateMany
   */
  export type WeaponStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeaponStats.
     */
    data: XOR<WeaponStatsUpdateManyMutationInput, WeaponStatsUncheckedUpdateManyInput>
    /**
     * Filter which WeaponStats to update
     */
    where?: WeaponStatsWhereInput
    /**
     * Limit how many WeaponStats to update.
     */
    limit?: number
  }

  /**
   * WeaponStats updateManyAndReturn
   */
  export type WeaponStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponStats
     */
    select?: WeaponStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeaponStats
     */
    omit?: WeaponStatsOmit<ExtArgs> | null
    /**
     * The data used to update WeaponStats.
     */
    data: XOR<WeaponStatsUpdateManyMutationInput, WeaponStatsUncheckedUpdateManyInput>
    /**
     * Filter which WeaponStats to update
     */
    where?: WeaponStatsWhereInput
    /**
     * Limit how many WeaponStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponStatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeaponStats upsert
   */
  export type WeaponStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponStats
     */
    select?: WeaponStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeaponStats
     */
    omit?: WeaponStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the WeaponStats to update in case it exists.
     */
    where: WeaponStatsWhereUniqueInput
    /**
     * In case the WeaponStats found by the `where` argument doesn't exist, create a new WeaponStats with this data.
     */
    create: XOR<WeaponStatsCreateInput, WeaponStatsUncheckedCreateInput>
    /**
     * In case the WeaponStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeaponStatsUpdateInput, WeaponStatsUncheckedUpdateInput>
  }

  /**
   * WeaponStats delete
   */
  export type WeaponStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponStats
     */
    select?: WeaponStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeaponStats
     */
    omit?: WeaponStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponStatsInclude<ExtArgs> | null
    /**
     * Filter which WeaponStats to delete.
     */
    where: WeaponStatsWhereUniqueInput
  }

  /**
   * WeaponStats deleteMany
   */
  export type WeaponStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeaponStats to delete
     */
    where?: WeaponStatsWhereInput
    /**
     * Limit how many WeaponStats to delete.
     */
    limit?: number
  }

  /**
   * WeaponStats without action
   */
  export type WeaponStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeaponStats
     */
    select?: WeaponStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeaponStats
     */
    omit?: WeaponStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponStatsInclude<ExtArgs> | null
  }


  /**
   * Model Backpack
   */

  export type AggregateBackpack = {
    _count: BackpackCountAggregateOutputType | null
    _avg: BackpackAvgAggregateOutputType | null
    _sum: BackpackSumAggregateOutputType | null
    _min: BackpackMinAggregateOutputType | null
    _max: BackpackMaxAggregateOutputType | null
  }

  export type BackpackAvgAggregateOutputType = {
    id: number | null
    backpack_size: number | null
    hero_id: number | null
  }

  export type BackpackSumAggregateOutputType = {
    id: number | null
    backpack_size: number | null
    hero_id: number | null
  }

  export type BackpackMinAggregateOutputType = {
    id: number | null
    backpack_size: number | null
    hero_id: number | null
  }

  export type BackpackMaxAggregateOutputType = {
    id: number | null
    backpack_size: number | null
    hero_id: number | null
  }

  export type BackpackCountAggregateOutputType = {
    id: number
    backpack_size: number
    hero_id: number
    _all: number
  }


  export type BackpackAvgAggregateInputType = {
    id?: true
    backpack_size?: true
    hero_id?: true
  }

  export type BackpackSumAggregateInputType = {
    id?: true
    backpack_size?: true
    hero_id?: true
  }

  export type BackpackMinAggregateInputType = {
    id?: true
    backpack_size?: true
    hero_id?: true
  }

  export type BackpackMaxAggregateInputType = {
    id?: true
    backpack_size?: true
    hero_id?: true
  }

  export type BackpackCountAggregateInputType = {
    id?: true
    backpack_size?: true
    hero_id?: true
    _all?: true
  }

  export type BackpackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Backpack to aggregate.
     */
    where?: BackpackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Backpacks to fetch.
     */
    orderBy?: BackpackOrderByWithRelationInput | BackpackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BackpackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Backpacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Backpacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Backpacks
    **/
    _count?: true | BackpackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BackpackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BackpackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BackpackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BackpackMaxAggregateInputType
  }

  export type GetBackpackAggregateType<T extends BackpackAggregateArgs> = {
        [P in keyof T & keyof AggregateBackpack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBackpack[P]>
      : GetScalarType<T[P], AggregateBackpack[P]>
  }




  export type BackpackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BackpackWhereInput
    orderBy?: BackpackOrderByWithAggregationInput | BackpackOrderByWithAggregationInput[]
    by: BackpackScalarFieldEnum[] | BackpackScalarFieldEnum
    having?: BackpackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BackpackCountAggregateInputType | true
    _avg?: BackpackAvgAggregateInputType
    _sum?: BackpackSumAggregateInputType
    _min?: BackpackMinAggregateInputType
    _max?: BackpackMaxAggregateInputType
  }

  export type BackpackGroupByOutputType = {
    id: number
    backpack_size: number
    hero_id: number
    _count: BackpackCountAggregateOutputType | null
    _avg: BackpackAvgAggregateOutputType | null
    _sum: BackpackSumAggregateOutputType | null
    _min: BackpackMinAggregateOutputType | null
    _max: BackpackMaxAggregateOutputType | null
  }

  type GetBackpackGroupByPayload<T extends BackpackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BackpackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BackpackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BackpackGroupByOutputType[P]>
            : GetScalarType<T[P], BackpackGroupByOutputType[P]>
        }
      >
    >


  export type BackpackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    backpack_size?: boolean
    hero_id?: boolean
    hero?: boolean | HeroDefaultArgs<ExtArgs>
    weapon?: boolean | Backpack$weaponArgs<ExtArgs>
    _count?: boolean | BackpackCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["backpack"]>

  export type BackpackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    backpack_size?: boolean
    hero_id?: boolean
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["backpack"]>

  export type BackpackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    backpack_size?: boolean
    hero_id?: boolean
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["backpack"]>

  export type BackpackSelectScalar = {
    id?: boolean
    backpack_size?: boolean
    hero_id?: boolean
  }

  export type BackpackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "backpack_size" | "hero_id", ExtArgs["result"]["backpack"]>
  export type BackpackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hero?: boolean | HeroDefaultArgs<ExtArgs>
    weapon?: boolean | Backpack$weaponArgs<ExtArgs>
    _count?: boolean | BackpackCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BackpackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }
  export type BackpackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }

  export type $BackpackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Backpack"
    objects: {
      hero: Prisma.$HeroPayload<ExtArgs>
      weapon: Prisma.$WeaponPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      backpack_size: number
      hero_id: number
    }, ExtArgs["result"]["backpack"]>
    composites: {}
  }

  type BackpackGetPayload<S extends boolean | null | undefined | BackpackDefaultArgs> = $Result.GetResult<Prisma.$BackpackPayload, S>

  type BackpackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BackpackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BackpackCountAggregateInputType | true
    }

  export interface BackpackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Backpack'], meta: { name: 'Backpack' } }
    /**
     * Find zero or one Backpack that matches the filter.
     * @param {BackpackFindUniqueArgs} args - Arguments to find a Backpack
     * @example
     * // Get one Backpack
     * const backpack = await prisma.backpack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BackpackFindUniqueArgs>(args: SelectSubset<T, BackpackFindUniqueArgs<ExtArgs>>): Prisma__BackpackClient<$Result.GetResult<Prisma.$BackpackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Backpack that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BackpackFindUniqueOrThrowArgs} args - Arguments to find a Backpack
     * @example
     * // Get one Backpack
     * const backpack = await prisma.backpack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BackpackFindUniqueOrThrowArgs>(args: SelectSubset<T, BackpackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BackpackClient<$Result.GetResult<Prisma.$BackpackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Backpack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackpackFindFirstArgs} args - Arguments to find a Backpack
     * @example
     * // Get one Backpack
     * const backpack = await prisma.backpack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BackpackFindFirstArgs>(args?: SelectSubset<T, BackpackFindFirstArgs<ExtArgs>>): Prisma__BackpackClient<$Result.GetResult<Prisma.$BackpackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Backpack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackpackFindFirstOrThrowArgs} args - Arguments to find a Backpack
     * @example
     * // Get one Backpack
     * const backpack = await prisma.backpack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BackpackFindFirstOrThrowArgs>(args?: SelectSubset<T, BackpackFindFirstOrThrowArgs<ExtArgs>>): Prisma__BackpackClient<$Result.GetResult<Prisma.$BackpackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Backpacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackpackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Backpacks
     * const backpacks = await prisma.backpack.findMany()
     * 
     * // Get first 10 Backpacks
     * const backpacks = await prisma.backpack.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const backpackWithIdOnly = await prisma.backpack.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BackpackFindManyArgs>(args?: SelectSubset<T, BackpackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BackpackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Backpack.
     * @param {BackpackCreateArgs} args - Arguments to create a Backpack.
     * @example
     * // Create one Backpack
     * const Backpack = await prisma.backpack.create({
     *   data: {
     *     // ... data to create a Backpack
     *   }
     * })
     * 
     */
    create<T extends BackpackCreateArgs>(args: SelectSubset<T, BackpackCreateArgs<ExtArgs>>): Prisma__BackpackClient<$Result.GetResult<Prisma.$BackpackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Backpacks.
     * @param {BackpackCreateManyArgs} args - Arguments to create many Backpacks.
     * @example
     * // Create many Backpacks
     * const backpack = await prisma.backpack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BackpackCreateManyArgs>(args?: SelectSubset<T, BackpackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Backpacks and returns the data saved in the database.
     * @param {BackpackCreateManyAndReturnArgs} args - Arguments to create many Backpacks.
     * @example
     * // Create many Backpacks
     * const backpack = await prisma.backpack.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Backpacks and only return the `id`
     * const backpackWithIdOnly = await prisma.backpack.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BackpackCreateManyAndReturnArgs>(args?: SelectSubset<T, BackpackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BackpackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Backpack.
     * @param {BackpackDeleteArgs} args - Arguments to delete one Backpack.
     * @example
     * // Delete one Backpack
     * const Backpack = await prisma.backpack.delete({
     *   where: {
     *     // ... filter to delete one Backpack
     *   }
     * })
     * 
     */
    delete<T extends BackpackDeleteArgs>(args: SelectSubset<T, BackpackDeleteArgs<ExtArgs>>): Prisma__BackpackClient<$Result.GetResult<Prisma.$BackpackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Backpack.
     * @param {BackpackUpdateArgs} args - Arguments to update one Backpack.
     * @example
     * // Update one Backpack
     * const backpack = await prisma.backpack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BackpackUpdateArgs>(args: SelectSubset<T, BackpackUpdateArgs<ExtArgs>>): Prisma__BackpackClient<$Result.GetResult<Prisma.$BackpackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Backpacks.
     * @param {BackpackDeleteManyArgs} args - Arguments to filter Backpacks to delete.
     * @example
     * // Delete a few Backpacks
     * const { count } = await prisma.backpack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BackpackDeleteManyArgs>(args?: SelectSubset<T, BackpackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Backpacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackpackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Backpacks
     * const backpack = await prisma.backpack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BackpackUpdateManyArgs>(args: SelectSubset<T, BackpackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Backpacks and returns the data updated in the database.
     * @param {BackpackUpdateManyAndReturnArgs} args - Arguments to update many Backpacks.
     * @example
     * // Update many Backpacks
     * const backpack = await prisma.backpack.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Backpacks and only return the `id`
     * const backpackWithIdOnly = await prisma.backpack.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BackpackUpdateManyAndReturnArgs>(args: SelectSubset<T, BackpackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BackpackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Backpack.
     * @param {BackpackUpsertArgs} args - Arguments to update or create a Backpack.
     * @example
     * // Update or create a Backpack
     * const backpack = await prisma.backpack.upsert({
     *   create: {
     *     // ... data to create a Backpack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Backpack we want to update
     *   }
     * })
     */
    upsert<T extends BackpackUpsertArgs>(args: SelectSubset<T, BackpackUpsertArgs<ExtArgs>>): Prisma__BackpackClient<$Result.GetResult<Prisma.$BackpackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Backpacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackpackCountArgs} args - Arguments to filter Backpacks to count.
     * @example
     * // Count the number of Backpacks
     * const count = await prisma.backpack.count({
     *   where: {
     *     // ... the filter for the Backpacks we want to count
     *   }
     * })
    **/
    count<T extends BackpackCountArgs>(
      args?: Subset<T, BackpackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BackpackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Backpack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackpackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BackpackAggregateArgs>(args: Subset<T, BackpackAggregateArgs>): Prisma.PrismaPromise<GetBackpackAggregateType<T>>

    /**
     * Group by Backpack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackpackGroupByArgs} args - Group by arguments.
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
      T extends BackpackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BackpackGroupByArgs['orderBy'] }
        : { orderBy?: BackpackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BackpackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBackpackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Backpack model
   */
  readonly fields: BackpackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Backpack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BackpackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hero<T extends HeroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HeroDefaultArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    weapon<T extends Backpack$weaponArgs<ExtArgs> = {}>(args?: Subset<T, Backpack$weaponArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Backpack model
   */
  interface BackpackFieldRefs {
    readonly id: FieldRef<"Backpack", 'Int'>
    readonly backpack_size: FieldRef<"Backpack", 'Int'>
    readonly hero_id: FieldRef<"Backpack", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Backpack findUnique
   */
  export type BackpackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Backpack
     */
    select?: BackpackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Backpack
     */
    omit?: BackpackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackpackInclude<ExtArgs> | null
    /**
     * Filter, which Backpack to fetch.
     */
    where: BackpackWhereUniqueInput
  }

  /**
   * Backpack findUniqueOrThrow
   */
  export type BackpackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Backpack
     */
    select?: BackpackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Backpack
     */
    omit?: BackpackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackpackInclude<ExtArgs> | null
    /**
     * Filter, which Backpack to fetch.
     */
    where: BackpackWhereUniqueInput
  }

  /**
   * Backpack findFirst
   */
  export type BackpackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Backpack
     */
    select?: BackpackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Backpack
     */
    omit?: BackpackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackpackInclude<ExtArgs> | null
    /**
     * Filter, which Backpack to fetch.
     */
    where?: BackpackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Backpacks to fetch.
     */
    orderBy?: BackpackOrderByWithRelationInput | BackpackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Backpacks.
     */
    cursor?: BackpackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Backpacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Backpacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Backpacks.
     */
    distinct?: BackpackScalarFieldEnum | BackpackScalarFieldEnum[]
  }

  /**
   * Backpack findFirstOrThrow
   */
  export type BackpackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Backpack
     */
    select?: BackpackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Backpack
     */
    omit?: BackpackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackpackInclude<ExtArgs> | null
    /**
     * Filter, which Backpack to fetch.
     */
    where?: BackpackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Backpacks to fetch.
     */
    orderBy?: BackpackOrderByWithRelationInput | BackpackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Backpacks.
     */
    cursor?: BackpackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Backpacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Backpacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Backpacks.
     */
    distinct?: BackpackScalarFieldEnum | BackpackScalarFieldEnum[]
  }

  /**
   * Backpack findMany
   */
  export type BackpackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Backpack
     */
    select?: BackpackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Backpack
     */
    omit?: BackpackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackpackInclude<ExtArgs> | null
    /**
     * Filter, which Backpacks to fetch.
     */
    where?: BackpackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Backpacks to fetch.
     */
    orderBy?: BackpackOrderByWithRelationInput | BackpackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Backpacks.
     */
    cursor?: BackpackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Backpacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Backpacks.
     */
    skip?: number
    distinct?: BackpackScalarFieldEnum | BackpackScalarFieldEnum[]
  }

  /**
   * Backpack create
   */
  export type BackpackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Backpack
     */
    select?: BackpackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Backpack
     */
    omit?: BackpackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackpackInclude<ExtArgs> | null
    /**
     * The data needed to create a Backpack.
     */
    data: XOR<BackpackCreateInput, BackpackUncheckedCreateInput>
  }

  /**
   * Backpack createMany
   */
  export type BackpackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Backpacks.
     */
    data: BackpackCreateManyInput | BackpackCreateManyInput[]
  }

  /**
   * Backpack createManyAndReturn
   */
  export type BackpackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Backpack
     */
    select?: BackpackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Backpack
     */
    omit?: BackpackOmit<ExtArgs> | null
    /**
     * The data used to create many Backpacks.
     */
    data: BackpackCreateManyInput | BackpackCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackpackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Backpack update
   */
  export type BackpackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Backpack
     */
    select?: BackpackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Backpack
     */
    omit?: BackpackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackpackInclude<ExtArgs> | null
    /**
     * The data needed to update a Backpack.
     */
    data: XOR<BackpackUpdateInput, BackpackUncheckedUpdateInput>
    /**
     * Choose, which Backpack to update.
     */
    where: BackpackWhereUniqueInput
  }

  /**
   * Backpack updateMany
   */
  export type BackpackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Backpacks.
     */
    data: XOR<BackpackUpdateManyMutationInput, BackpackUncheckedUpdateManyInput>
    /**
     * Filter which Backpacks to update
     */
    where?: BackpackWhereInput
    /**
     * Limit how many Backpacks to update.
     */
    limit?: number
  }

  /**
   * Backpack updateManyAndReturn
   */
  export type BackpackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Backpack
     */
    select?: BackpackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Backpack
     */
    omit?: BackpackOmit<ExtArgs> | null
    /**
     * The data used to update Backpacks.
     */
    data: XOR<BackpackUpdateManyMutationInput, BackpackUncheckedUpdateManyInput>
    /**
     * Filter which Backpacks to update
     */
    where?: BackpackWhereInput
    /**
     * Limit how many Backpacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackpackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Backpack upsert
   */
  export type BackpackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Backpack
     */
    select?: BackpackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Backpack
     */
    omit?: BackpackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackpackInclude<ExtArgs> | null
    /**
     * The filter to search for the Backpack to update in case it exists.
     */
    where: BackpackWhereUniqueInput
    /**
     * In case the Backpack found by the `where` argument doesn't exist, create a new Backpack with this data.
     */
    create: XOR<BackpackCreateInput, BackpackUncheckedCreateInput>
    /**
     * In case the Backpack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BackpackUpdateInput, BackpackUncheckedUpdateInput>
  }

  /**
   * Backpack delete
   */
  export type BackpackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Backpack
     */
    select?: BackpackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Backpack
     */
    omit?: BackpackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackpackInclude<ExtArgs> | null
    /**
     * Filter which Backpack to delete.
     */
    where: BackpackWhereUniqueInput
  }

  /**
   * Backpack deleteMany
   */
  export type BackpackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Backpacks to delete
     */
    where?: BackpackWhereInput
    /**
     * Limit how many Backpacks to delete.
     */
    limit?: number
  }

  /**
   * Backpack.weapon
   */
  export type Backpack$weaponArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weapon
     */
    select?: WeaponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weapon
     */
    omit?: WeaponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaponInclude<ExtArgs> | null
    where?: WeaponWhereInput
    orderBy?: WeaponOrderByWithRelationInput | WeaponOrderByWithRelationInput[]
    cursor?: WeaponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeaponScalarFieldEnum | WeaponScalarFieldEnum[]
  }

  /**
   * Backpack without action
   */
  export type BackpackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Backpack
     */
    select?: BackpackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Backpack
     */
    omit?: BackpackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackpackInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const HeroScalarFieldEnum: {
    id: 'id',
    name: 'name',
    class: 'class',
    level: 'level',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HeroScalarFieldEnum = (typeof HeroScalarFieldEnum)[keyof typeof HeroScalarFieldEnum]


  export const WeaponScalarFieldEnum: {
    id: 'id',
    hero_id: 'hero_id',
    backpack_id: 'backpack_id',
    name: 'name',
    rarity: 'rarity',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WeaponScalarFieldEnum = (typeof WeaponScalarFieldEnum)[keyof typeof WeaponScalarFieldEnum]


  export const WeaponStatsScalarFieldEnum: {
    id: 'id',
    weapon_id: 'weapon_id',
    weapon_str: 'weapon_str',
    weapon_def: 'weapon_def',
    weapon_int: 'weapon_int',
    weapon_crit: 'weapon_crit',
    createdAt: 'createdAt'
  };

  export type WeaponStatsScalarFieldEnum = (typeof WeaponStatsScalarFieldEnum)[keyof typeof WeaponStatsScalarFieldEnum]


  export const BackpackScalarFieldEnum: {
    id: 'id',
    backpack_size: 'backpack_size',
    hero_id: 'hero_id'
  };

  export type BackpackScalarFieldEnum = (typeof BackpackScalarFieldEnum)[keyof typeof BackpackScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Rarity'
   */
  export type EnumRarityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rarity'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type HeroWhereInput = {
    AND?: HeroWhereInput | HeroWhereInput[]
    OR?: HeroWhereInput[]
    NOT?: HeroWhereInput | HeroWhereInput[]
    id?: IntFilter<"Hero"> | number
    name?: StringFilter<"Hero"> | string
    class?: EnumRoleFilter<"Hero"> | $Enums.Role
    level?: IntFilter<"Hero"> | number
    createdAt?: DateTimeFilter<"Hero"> | Date | string
    updatedAt?: DateTimeFilter<"Hero"> | Date | string
    weapon?: WeaponListRelationFilter
    backpack?: XOR<BackpackNullableScalarRelationFilter, BackpackWhereInput> | null
  }

  export type HeroOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    class?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    weapon?: WeaponOrderByRelationAggregateInput
    backpack?: BackpackOrderByWithRelationInput
  }

  export type HeroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HeroWhereInput | HeroWhereInput[]
    OR?: HeroWhereInput[]
    NOT?: HeroWhereInput | HeroWhereInput[]
    name?: StringFilter<"Hero"> | string
    class?: EnumRoleFilter<"Hero"> | $Enums.Role
    level?: IntFilter<"Hero"> | number
    createdAt?: DateTimeFilter<"Hero"> | Date | string
    updatedAt?: DateTimeFilter<"Hero"> | Date | string
    weapon?: WeaponListRelationFilter
    backpack?: XOR<BackpackNullableScalarRelationFilter, BackpackWhereInput> | null
  }, "id">

  export type HeroOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    class?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HeroCountOrderByAggregateInput
    _avg?: HeroAvgOrderByAggregateInput
    _max?: HeroMaxOrderByAggregateInput
    _min?: HeroMinOrderByAggregateInput
    _sum?: HeroSumOrderByAggregateInput
  }

  export type HeroScalarWhereWithAggregatesInput = {
    AND?: HeroScalarWhereWithAggregatesInput | HeroScalarWhereWithAggregatesInput[]
    OR?: HeroScalarWhereWithAggregatesInput[]
    NOT?: HeroScalarWhereWithAggregatesInput | HeroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hero"> | number
    name?: StringWithAggregatesFilter<"Hero"> | string
    class?: EnumRoleWithAggregatesFilter<"Hero"> | $Enums.Role
    level?: IntWithAggregatesFilter<"Hero"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Hero"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Hero"> | Date | string
  }

  export type WeaponWhereInput = {
    AND?: WeaponWhereInput | WeaponWhereInput[]
    OR?: WeaponWhereInput[]
    NOT?: WeaponWhereInput | WeaponWhereInput[]
    id?: IntFilter<"Weapon"> | number
    hero_id?: IntFilter<"Weapon"> | number
    backpack_id?: IntFilter<"Weapon"> | number
    name?: StringFilter<"Weapon"> | string
    rarity?: EnumRarityFilter<"Weapon"> | $Enums.Rarity
    description?: StringFilter<"Weapon"> | string
    createdAt?: DateTimeFilter<"Weapon"> | Date | string
    updatedAt?: DateTimeFilter<"Weapon"> | Date | string
    hero?: XOR<HeroScalarRelationFilter, HeroWhereInput>
    backpack?: XOR<BackpackScalarRelationFilter, BackpackWhereInput>
    weapon_stats?: WeaponStatsListRelationFilter
  }

  export type WeaponOrderByWithRelationInput = {
    id?: SortOrder
    hero_id?: SortOrder
    backpack_id?: SortOrder
    name?: SortOrder
    rarity?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hero?: HeroOrderByWithRelationInput
    backpack?: BackpackOrderByWithRelationInput
    weapon_stats?: WeaponStatsOrderByRelationAggregateInput
  }

  export type WeaponWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WeaponWhereInput | WeaponWhereInput[]
    OR?: WeaponWhereInput[]
    NOT?: WeaponWhereInput | WeaponWhereInput[]
    hero_id?: IntFilter<"Weapon"> | number
    backpack_id?: IntFilter<"Weapon"> | number
    name?: StringFilter<"Weapon"> | string
    rarity?: EnumRarityFilter<"Weapon"> | $Enums.Rarity
    description?: StringFilter<"Weapon"> | string
    createdAt?: DateTimeFilter<"Weapon"> | Date | string
    updatedAt?: DateTimeFilter<"Weapon"> | Date | string
    hero?: XOR<HeroScalarRelationFilter, HeroWhereInput>
    backpack?: XOR<BackpackScalarRelationFilter, BackpackWhereInput>
    weapon_stats?: WeaponStatsListRelationFilter
  }, "id">

  export type WeaponOrderByWithAggregationInput = {
    id?: SortOrder
    hero_id?: SortOrder
    backpack_id?: SortOrder
    name?: SortOrder
    rarity?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WeaponCountOrderByAggregateInput
    _avg?: WeaponAvgOrderByAggregateInput
    _max?: WeaponMaxOrderByAggregateInput
    _min?: WeaponMinOrderByAggregateInput
    _sum?: WeaponSumOrderByAggregateInput
  }

  export type WeaponScalarWhereWithAggregatesInput = {
    AND?: WeaponScalarWhereWithAggregatesInput | WeaponScalarWhereWithAggregatesInput[]
    OR?: WeaponScalarWhereWithAggregatesInput[]
    NOT?: WeaponScalarWhereWithAggregatesInput | WeaponScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Weapon"> | number
    hero_id?: IntWithAggregatesFilter<"Weapon"> | number
    backpack_id?: IntWithAggregatesFilter<"Weapon"> | number
    name?: StringWithAggregatesFilter<"Weapon"> | string
    rarity?: EnumRarityWithAggregatesFilter<"Weapon"> | $Enums.Rarity
    description?: StringWithAggregatesFilter<"Weapon"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Weapon"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Weapon"> | Date | string
  }

  export type WeaponStatsWhereInput = {
    AND?: WeaponStatsWhereInput | WeaponStatsWhereInput[]
    OR?: WeaponStatsWhereInput[]
    NOT?: WeaponStatsWhereInput | WeaponStatsWhereInput[]
    id?: IntFilter<"WeaponStats"> | number
    weapon_id?: IntFilter<"WeaponStats"> | number
    weapon_str?: IntFilter<"WeaponStats"> | number
    weapon_def?: IntFilter<"WeaponStats"> | number
    weapon_int?: IntFilter<"WeaponStats"> | number
    weapon_crit?: IntFilter<"WeaponStats"> | number
    createdAt?: DateTimeFilter<"WeaponStats"> | Date | string
    weapon?: XOR<WeaponScalarRelationFilter, WeaponWhereInput>
  }

  export type WeaponStatsOrderByWithRelationInput = {
    id?: SortOrder
    weapon_id?: SortOrder
    weapon_str?: SortOrder
    weapon_def?: SortOrder
    weapon_int?: SortOrder
    weapon_crit?: SortOrder
    createdAt?: SortOrder
    weapon?: WeaponOrderByWithRelationInput
  }

  export type WeaponStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WeaponStatsWhereInput | WeaponStatsWhereInput[]
    OR?: WeaponStatsWhereInput[]
    NOT?: WeaponStatsWhereInput | WeaponStatsWhereInput[]
    weapon_id?: IntFilter<"WeaponStats"> | number
    weapon_str?: IntFilter<"WeaponStats"> | number
    weapon_def?: IntFilter<"WeaponStats"> | number
    weapon_int?: IntFilter<"WeaponStats"> | number
    weapon_crit?: IntFilter<"WeaponStats"> | number
    createdAt?: DateTimeFilter<"WeaponStats"> | Date | string
    weapon?: XOR<WeaponScalarRelationFilter, WeaponWhereInput>
  }, "id">

  export type WeaponStatsOrderByWithAggregationInput = {
    id?: SortOrder
    weapon_id?: SortOrder
    weapon_str?: SortOrder
    weapon_def?: SortOrder
    weapon_int?: SortOrder
    weapon_crit?: SortOrder
    createdAt?: SortOrder
    _count?: WeaponStatsCountOrderByAggregateInput
    _avg?: WeaponStatsAvgOrderByAggregateInput
    _max?: WeaponStatsMaxOrderByAggregateInput
    _min?: WeaponStatsMinOrderByAggregateInput
    _sum?: WeaponStatsSumOrderByAggregateInput
  }

  export type WeaponStatsScalarWhereWithAggregatesInput = {
    AND?: WeaponStatsScalarWhereWithAggregatesInput | WeaponStatsScalarWhereWithAggregatesInput[]
    OR?: WeaponStatsScalarWhereWithAggregatesInput[]
    NOT?: WeaponStatsScalarWhereWithAggregatesInput | WeaponStatsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WeaponStats"> | number
    weapon_id?: IntWithAggregatesFilter<"WeaponStats"> | number
    weapon_str?: IntWithAggregatesFilter<"WeaponStats"> | number
    weapon_def?: IntWithAggregatesFilter<"WeaponStats"> | number
    weapon_int?: IntWithAggregatesFilter<"WeaponStats"> | number
    weapon_crit?: IntWithAggregatesFilter<"WeaponStats"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WeaponStats"> | Date | string
  }

  export type BackpackWhereInput = {
    AND?: BackpackWhereInput | BackpackWhereInput[]
    OR?: BackpackWhereInput[]
    NOT?: BackpackWhereInput | BackpackWhereInput[]
    id?: IntFilter<"Backpack"> | number
    backpack_size?: IntFilter<"Backpack"> | number
    hero_id?: IntFilter<"Backpack"> | number
    hero?: XOR<HeroScalarRelationFilter, HeroWhereInput>
    weapon?: WeaponListRelationFilter
  }

  export type BackpackOrderByWithRelationInput = {
    id?: SortOrder
    backpack_size?: SortOrder
    hero_id?: SortOrder
    hero?: HeroOrderByWithRelationInput
    weapon?: WeaponOrderByRelationAggregateInput
  }

  export type BackpackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    hero_id?: number
    AND?: BackpackWhereInput | BackpackWhereInput[]
    OR?: BackpackWhereInput[]
    NOT?: BackpackWhereInput | BackpackWhereInput[]
    backpack_size?: IntFilter<"Backpack"> | number
    hero?: XOR<HeroScalarRelationFilter, HeroWhereInput>
    weapon?: WeaponListRelationFilter
  }, "id" | "hero_id">

  export type BackpackOrderByWithAggregationInput = {
    id?: SortOrder
    backpack_size?: SortOrder
    hero_id?: SortOrder
    _count?: BackpackCountOrderByAggregateInput
    _avg?: BackpackAvgOrderByAggregateInput
    _max?: BackpackMaxOrderByAggregateInput
    _min?: BackpackMinOrderByAggregateInput
    _sum?: BackpackSumOrderByAggregateInput
  }

  export type BackpackScalarWhereWithAggregatesInput = {
    AND?: BackpackScalarWhereWithAggregatesInput | BackpackScalarWhereWithAggregatesInput[]
    OR?: BackpackScalarWhereWithAggregatesInput[]
    NOT?: BackpackScalarWhereWithAggregatesInput | BackpackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Backpack"> | number
    backpack_size?: IntWithAggregatesFilter<"Backpack"> | number
    hero_id?: IntWithAggregatesFilter<"Backpack"> | number
  }

  export type HeroCreateInput = {
    name: string
    class: $Enums.Role
    level: number
    createdAt?: Date | string
    updatedAt?: Date | string
    weapon?: WeaponCreateNestedManyWithoutHeroInput
    backpack?: BackpackCreateNestedOneWithoutHeroInput
  }

  export type HeroUncheckedCreateInput = {
    id?: number
    name: string
    class: $Enums.Role
    level: number
    createdAt?: Date | string
    updatedAt?: Date | string
    weapon?: WeaponUncheckedCreateNestedManyWithoutHeroInput
    backpack?: BackpackUncheckedCreateNestedOneWithoutHeroInput
  }

  export type HeroUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weapon?: WeaponUpdateManyWithoutHeroNestedInput
    backpack?: BackpackUpdateOneWithoutHeroNestedInput
  }

  export type HeroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weapon?: WeaponUncheckedUpdateManyWithoutHeroNestedInput
    backpack?: BackpackUncheckedUpdateOneWithoutHeroNestedInput
  }

  export type HeroCreateManyInput = {
    id?: number
    name: string
    class: $Enums.Role
    level: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeroUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeaponCreateInput = {
    name: string
    rarity: $Enums.Rarity
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hero: HeroCreateNestedOneWithoutWeaponInput
    backpack: BackpackCreateNestedOneWithoutWeaponInput
    weapon_stats?: WeaponStatsCreateNestedManyWithoutWeaponInput
  }

  export type WeaponUncheckedCreateInput = {
    id?: number
    hero_id: number
    backpack_id: number
    name: string
    rarity: $Enums.Rarity
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    weapon_stats?: WeaponStatsUncheckedCreateNestedManyWithoutWeaponInput
  }

  export type WeaponUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hero?: HeroUpdateOneRequiredWithoutWeaponNestedInput
    backpack?: BackpackUpdateOneRequiredWithoutWeaponNestedInput
    weapon_stats?: WeaponStatsUpdateManyWithoutWeaponNestedInput
  }

  export type WeaponUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hero_id?: IntFieldUpdateOperationsInput | number
    backpack_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weapon_stats?: WeaponStatsUncheckedUpdateManyWithoutWeaponNestedInput
  }

  export type WeaponCreateManyInput = {
    id?: number
    hero_id: number
    backpack_id: number
    name: string
    rarity: $Enums.Rarity
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeaponUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeaponUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hero_id?: IntFieldUpdateOperationsInput | number
    backpack_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeaponStatsCreateInput = {
    weapon_str: number
    weapon_def: number
    weapon_int: number
    weapon_crit: number
    createdAt?: Date | string
    weapon: WeaponCreateNestedOneWithoutWeapon_statsInput
  }

  export type WeaponStatsUncheckedCreateInput = {
    id?: number
    weapon_id: number
    weapon_str: number
    weapon_def: number
    weapon_int: number
    weapon_crit: number
    createdAt?: Date | string
  }

  export type WeaponStatsUpdateInput = {
    weapon_str?: IntFieldUpdateOperationsInput | number
    weapon_def?: IntFieldUpdateOperationsInput | number
    weapon_int?: IntFieldUpdateOperationsInput | number
    weapon_crit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weapon?: WeaponUpdateOneRequiredWithoutWeapon_statsNestedInput
  }

  export type WeaponStatsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    weapon_id?: IntFieldUpdateOperationsInput | number
    weapon_str?: IntFieldUpdateOperationsInput | number
    weapon_def?: IntFieldUpdateOperationsInput | number
    weapon_int?: IntFieldUpdateOperationsInput | number
    weapon_crit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeaponStatsCreateManyInput = {
    id?: number
    weapon_id: number
    weapon_str: number
    weapon_def: number
    weapon_int: number
    weapon_crit: number
    createdAt?: Date | string
  }

  export type WeaponStatsUpdateManyMutationInput = {
    weapon_str?: IntFieldUpdateOperationsInput | number
    weapon_def?: IntFieldUpdateOperationsInput | number
    weapon_int?: IntFieldUpdateOperationsInput | number
    weapon_crit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeaponStatsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    weapon_id?: IntFieldUpdateOperationsInput | number
    weapon_str?: IntFieldUpdateOperationsInput | number
    weapon_def?: IntFieldUpdateOperationsInput | number
    weapon_int?: IntFieldUpdateOperationsInput | number
    weapon_crit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BackpackCreateInput = {
    backpack_size: number
    hero: HeroCreateNestedOneWithoutBackpackInput
    weapon?: WeaponCreateNestedManyWithoutBackpackInput
  }

  export type BackpackUncheckedCreateInput = {
    id?: number
    backpack_size: number
    hero_id: number
    weapon?: WeaponUncheckedCreateNestedManyWithoutBackpackInput
  }

  export type BackpackUpdateInput = {
    backpack_size?: IntFieldUpdateOperationsInput | number
    hero?: HeroUpdateOneRequiredWithoutBackpackNestedInput
    weapon?: WeaponUpdateManyWithoutBackpackNestedInput
  }

  export type BackpackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    backpack_size?: IntFieldUpdateOperationsInput | number
    hero_id?: IntFieldUpdateOperationsInput | number
    weapon?: WeaponUncheckedUpdateManyWithoutBackpackNestedInput
  }

  export type BackpackCreateManyInput = {
    id?: number
    backpack_size: number
    hero_id: number
  }

  export type BackpackUpdateManyMutationInput = {
    backpack_size?: IntFieldUpdateOperationsInput | number
  }

  export type BackpackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    backpack_size?: IntFieldUpdateOperationsInput | number
    hero_id?: IntFieldUpdateOperationsInput | number
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type WeaponListRelationFilter = {
    every?: WeaponWhereInput
    some?: WeaponWhereInput
    none?: WeaponWhereInput
  }

  export type BackpackNullableScalarRelationFilter = {
    is?: BackpackWhereInput | null
    isNot?: BackpackWhereInput | null
  }

  export type WeaponOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HeroCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    class?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroAvgOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
  }

  export type HeroMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    class?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    class?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroSumOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type EnumRarityFilter<$PrismaModel = never> = {
    equals?: $Enums.Rarity | EnumRarityFieldRefInput<$PrismaModel>
    in?: $Enums.Rarity[]
    notIn?: $Enums.Rarity[]
    not?: NestedEnumRarityFilter<$PrismaModel> | $Enums.Rarity
  }

  export type HeroScalarRelationFilter = {
    is?: HeroWhereInput
    isNot?: HeroWhereInput
  }

  export type BackpackScalarRelationFilter = {
    is?: BackpackWhereInput
    isNot?: BackpackWhereInput
  }

  export type WeaponStatsListRelationFilter = {
    every?: WeaponStatsWhereInput
    some?: WeaponStatsWhereInput
    none?: WeaponStatsWhereInput
  }

  export type WeaponStatsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeaponCountOrderByAggregateInput = {
    id?: SortOrder
    hero_id?: SortOrder
    backpack_id?: SortOrder
    name?: SortOrder
    rarity?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeaponAvgOrderByAggregateInput = {
    id?: SortOrder
    hero_id?: SortOrder
    backpack_id?: SortOrder
  }

  export type WeaponMaxOrderByAggregateInput = {
    id?: SortOrder
    hero_id?: SortOrder
    backpack_id?: SortOrder
    name?: SortOrder
    rarity?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeaponMinOrderByAggregateInput = {
    id?: SortOrder
    hero_id?: SortOrder
    backpack_id?: SortOrder
    name?: SortOrder
    rarity?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeaponSumOrderByAggregateInput = {
    id?: SortOrder
    hero_id?: SortOrder
    backpack_id?: SortOrder
  }

  export type EnumRarityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rarity | EnumRarityFieldRefInput<$PrismaModel>
    in?: $Enums.Rarity[]
    notIn?: $Enums.Rarity[]
    not?: NestedEnumRarityWithAggregatesFilter<$PrismaModel> | $Enums.Rarity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRarityFilter<$PrismaModel>
    _max?: NestedEnumRarityFilter<$PrismaModel>
  }

  export type WeaponScalarRelationFilter = {
    is?: WeaponWhereInput
    isNot?: WeaponWhereInput
  }

  export type WeaponStatsCountOrderByAggregateInput = {
    id?: SortOrder
    weapon_id?: SortOrder
    weapon_str?: SortOrder
    weapon_def?: SortOrder
    weapon_int?: SortOrder
    weapon_crit?: SortOrder
    createdAt?: SortOrder
  }

  export type WeaponStatsAvgOrderByAggregateInput = {
    id?: SortOrder
    weapon_id?: SortOrder
    weapon_str?: SortOrder
    weapon_def?: SortOrder
    weapon_int?: SortOrder
    weapon_crit?: SortOrder
  }

  export type WeaponStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    weapon_id?: SortOrder
    weapon_str?: SortOrder
    weapon_def?: SortOrder
    weapon_int?: SortOrder
    weapon_crit?: SortOrder
    createdAt?: SortOrder
  }

  export type WeaponStatsMinOrderByAggregateInput = {
    id?: SortOrder
    weapon_id?: SortOrder
    weapon_str?: SortOrder
    weapon_def?: SortOrder
    weapon_int?: SortOrder
    weapon_crit?: SortOrder
    createdAt?: SortOrder
  }

  export type WeaponStatsSumOrderByAggregateInput = {
    id?: SortOrder
    weapon_id?: SortOrder
    weapon_str?: SortOrder
    weapon_def?: SortOrder
    weapon_int?: SortOrder
    weapon_crit?: SortOrder
  }

  export type BackpackCountOrderByAggregateInput = {
    id?: SortOrder
    backpack_size?: SortOrder
    hero_id?: SortOrder
  }

  export type BackpackAvgOrderByAggregateInput = {
    id?: SortOrder
    backpack_size?: SortOrder
    hero_id?: SortOrder
  }

  export type BackpackMaxOrderByAggregateInput = {
    id?: SortOrder
    backpack_size?: SortOrder
    hero_id?: SortOrder
  }

  export type BackpackMinOrderByAggregateInput = {
    id?: SortOrder
    backpack_size?: SortOrder
    hero_id?: SortOrder
  }

  export type BackpackSumOrderByAggregateInput = {
    id?: SortOrder
    backpack_size?: SortOrder
    hero_id?: SortOrder
  }

  export type WeaponCreateNestedManyWithoutHeroInput = {
    create?: XOR<WeaponCreateWithoutHeroInput, WeaponUncheckedCreateWithoutHeroInput> | WeaponCreateWithoutHeroInput[] | WeaponUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutHeroInput | WeaponCreateOrConnectWithoutHeroInput[]
    createMany?: WeaponCreateManyHeroInputEnvelope
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
  }

  export type BackpackCreateNestedOneWithoutHeroInput = {
    create?: XOR<BackpackCreateWithoutHeroInput, BackpackUncheckedCreateWithoutHeroInput>
    connectOrCreate?: BackpackCreateOrConnectWithoutHeroInput
    connect?: BackpackWhereUniqueInput
  }

  export type WeaponUncheckedCreateNestedManyWithoutHeroInput = {
    create?: XOR<WeaponCreateWithoutHeroInput, WeaponUncheckedCreateWithoutHeroInput> | WeaponCreateWithoutHeroInput[] | WeaponUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutHeroInput | WeaponCreateOrConnectWithoutHeroInput[]
    createMany?: WeaponCreateManyHeroInputEnvelope
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
  }

  export type BackpackUncheckedCreateNestedOneWithoutHeroInput = {
    create?: XOR<BackpackCreateWithoutHeroInput, BackpackUncheckedCreateWithoutHeroInput>
    connectOrCreate?: BackpackCreateOrConnectWithoutHeroInput
    connect?: BackpackWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WeaponUpdateManyWithoutHeroNestedInput = {
    create?: XOR<WeaponCreateWithoutHeroInput, WeaponUncheckedCreateWithoutHeroInput> | WeaponCreateWithoutHeroInput[] | WeaponUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutHeroInput | WeaponCreateOrConnectWithoutHeroInput[]
    upsert?: WeaponUpsertWithWhereUniqueWithoutHeroInput | WeaponUpsertWithWhereUniqueWithoutHeroInput[]
    createMany?: WeaponCreateManyHeroInputEnvelope
    set?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    disconnect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    delete?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    update?: WeaponUpdateWithWhereUniqueWithoutHeroInput | WeaponUpdateWithWhereUniqueWithoutHeroInput[]
    updateMany?: WeaponUpdateManyWithWhereWithoutHeroInput | WeaponUpdateManyWithWhereWithoutHeroInput[]
    deleteMany?: WeaponScalarWhereInput | WeaponScalarWhereInput[]
  }

  export type BackpackUpdateOneWithoutHeroNestedInput = {
    create?: XOR<BackpackCreateWithoutHeroInput, BackpackUncheckedCreateWithoutHeroInput>
    connectOrCreate?: BackpackCreateOrConnectWithoutHeroInput
    upsert?: BackpackUpsertWithoutHeroInput
    disconnect?: BackpackWhereInput | boolean
    delete?: BackpackWhereInput | boolean
    connect?: BackpackWhereUniqueInput
    update?: XOR<XOR<BackpackUpdateToOneWithWhereWithoutHeroInput, BackpackUpdateWithoutHeroInput>, BackpackUncheckedUpdateWithoutHeroInput>
  }

  export type WeaponUncheckedUpdateManyWithoutHeroNestedInput = {
    create?: XOR<WeaponCreateWithoutHeroInput, WeaponUncheckedCreateWithoutHeroInput> | WeaponCreateWithoutHeroInput[] | WeaponUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutHeroInput | WeaponCreateOrConnectWithoutHeroInput[]
    upsert?: WeaponUpsertWithWhereUniqueWithoutHeroInput | WeaponUpsertWithWhereUniqueWithoutHeroInput[]
    createMany?: WeaponCreateManyHeroInputEnvelope
    set?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    disconnect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    delete?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    update?: WeaponUpdateWithWhereUniqueWithoutHeroInput | WeaponUpdateWithWhereUniqueWithoutHeroInput[]
    updateMany?: WeaponUpdateManyWithWhereWithoutHeroInput | WeaponUpdateManyWithWhereWithoutHeroInput[]
    deleteMany?: WeaponScalarWhereInput | WeaponScalarWhereInput[]
  }

  export type BackpackUncheckedUpdateOneWithoutHeroNestedInput = {
    create?: XOR<BackpackCreateWithoutHeroInput, BackpackUncheckedCreateWithoutHeroInput>
    connectOrCreate?: BackpackCreateOrConnectWithoutHeroInput
    upsert?: BackpackUpsertWithoutHeroInput
    disconnect?: BackpackWhereInput | boolean
    delete?: BackpackWhereInput | boolean
    connect?: BackpackWhereUniqueInput
    update?: XOR<XOR<BackpackUpdateToOneWithWhereWithoutHeroInput, BackpackUpdateWithoutHeroInput>, BackpackUncheckedUpdateWithoutHeroInput>
  }

  export type HeroCreateNestedOneWithoutWeaponInput = {
    create?: XOR<HeroCreateWithoutWeaponInput, HeroUncheckedCreateWithoutWeaponInput>
    connectOrCreate?: HeroCreateOrConnectWithoutWeaponInput
    connect?: HeroWhereUniqueInput
  }

  export type BackpackCreateNestedOneWithoutWeaponInput = {
    create?: XOR<BackpackCreateWithoutWeaponInput, BackpackUncheckedCreateWithoutWeaponInput>
    connectOrCreate?: BackpackCreateOrConnectWithoutWeaponInput
    connect?: BackpackWhereUniqueInput
  }

  export type WeaponStatsCreateNestedManyWithoutWeaponInput = {
    create?: XOR<WeaponStatsCreateWithoutWeaponInput, WeaponStatsUncheckedCreateWithoutWeaponInput> | WeaponStatsCreateWithoutWeaponInput[] | WeaponStatsUncheckedCreateWithoutWeaponInput[]
    connectOrCreate?: WeaponStatsCreateOrConnectWithoutWeaponInput | WeaponStatsCreateOrConnectWithoutWeaponInput[]
    createMany?: WeaponStatsCreateManyWeaponInputEnvelope
    connect?: WeaponStatsWhereUniqueInput | WeaponStatsWhereUniqueInput[]
  }

  export type WeaponStatsUncheckedCreateNestedManyWithoutWeaponInput = {
    create?: XOR<WeaponStatsCreateWithoutWeaponInput, WeaponStatsUncheckedCreateWithoutWeaponInput> | WeaponStatsCreateWithoutWeaponInput[] | WeaponStatsUncheckedCreateWithoutWeaponInput[]
    connectOrCreate?: WeaponStatsCreateOrConnectWithoutWeaponInput | WeaponStatsCreateOrConnectWithoutWeaponInput[]
    createMany?: WeaponStatsCreateManyWeaponInputEnvelope
    connect?: WeaponStatsWhereUniqueInput | WeaponStatsWhereUniqueInput[]
  }

  export type EnumRarityFieldUpdateOperationsInput = {
    set?: $Enums.Rarity
  }

  export type HeroUpdateOneRequiredWithoutWeaponNestedInput = {
    create?: XOR<HeroCreateWithoutWeaponInput, HeroUncheckedCreateWithoutWeaponInput>
    connectOrCreate?: HeroCreateOrConnectWithoutWeaponInput
    upsert?: HeroUpsertWithoutWeaponInput
    connect?: HeroWhereUniqueInput
    update?: XOR<XOR<HeroUpdateToOneWithWhereWithoutWeaponInput, HeroUpdateWithoutWeaponInput>, HeroUncheckedUpdateWithoutWeaponInput>
  }

  export type BackpackUpdateOneRequiredWithoutWeaponNestedInput = {
    create?: XOR<BackpackCreateWithoutWeaponInput, BackpackUncheckedCreateWithoutWeaponInput>
    connectOrCreate?: BackpackCreateOrConnectWithoutWeaponInput
    upsert?: BackpackUpsertWithoutWeaponInput
    connect?: BackpackWhereUniqueInput
    update?: XOR<XOR<BackpackUpdateToOneWithWhereWithoutWeaponInput, BackpackUpdateWithoutWeaponInput>, BackpackUncheckedUpdateWithoutWeaponInput>
  }

  export type WeaponStatsUpdateManyWithoutWeaponNestedInput = {
    create?: XOR<WeaponStatsCreateWithoutWeaponInput, WeaponStatsUncheckedCreateWithoutWeaponInput> | WeaponStatsCreateWithoutWeaponInput[] | WeaponStatsUncheckedCreateWithoutWeaponInput[]
    connectOrCreate?: WeaponStatsCreateOrConnectWithoutWeaponInput | WeaponStatsCreateOrConnectWithoutWeaponInput[]
    upsert?: WeaponStatsUpsertWithWhereUniqueWithoutWeaponInput | WeaponStatsUpsertWithWhereUniqueWithoutWeaponInput[]
    createMany?: WeaponStatsCreateManyWeaponInputEnvelope
    set?: WeaponStatsWhereUniqueInput | WeaponStatsWhereUniqueInput[]
    disconnect?: WeaponStatsWhereUniqueInput | WeaponStatsWhereUniqueInput[]
    delete?: WeaponStatsWhereUniqueInput | WeaponStatsWhereUniqueInput[]
    connect?: WeaponStatsWhereUniqueInput | WeaponStatsWhereUniqueInput[]
    update?: WeaponStatsUpdateWithWhereUniqueWithoutWeaponInput | WeaponStatsUpdateWithWhereUniqueWithoutWeaponInput[]
    updateMany?: WeaponStatsUpdateManyWithWhereWithoutWeaponInput | WeaponStatsUpdateManyWithWhereWithoutWeaponInput[]
    deleteMany?: WeaponStatsScalarWhereInput | WeaponStatsScalarWhereInput[]
  }

  export type WeaponStatsUncheckedUpdateManyWithoutWeaponNestedInput = {
    create?: XOR<WeaponStatsCreateWithoutWeaponInput, WeaponStatsUncheckedCreateWithoutWeaponInput> | WeaponStatsCreateWithoutWeaponInput[] | WeaponStatsUncheckedCreateWithoutWeaponInput[]
    connectOrCreate?: WeaponStatsCreateOrConnectWithoutWeaponInput | WeaponStatsCreateOrConnectWithoutWeaponInput[]
    upsert?: WeaponStatsUpsertWithWhereUniqueWithoutWeaponInput | WeaponStatsUpsertWithWhereUniqueWithoutWeaponInput[]
    createMany?: WeaponStatsCreateManyWeaponInputEnvelope
    set?: WeaponStatsWhereUniqueInput | WeaponStatsWhereUniqueInput[]
    disconnect?: WeaponStatsWhereUniqueInput | WeaponStatsWhereUniqueInput[]
    delete?: WeaponStatsWhereUniqueInput | WeaponStatsWhereUniqueInput[]
    connect?: WeaponStatsWhereUniqueInput | WeaponStatsWhereUniqueInput[]
    update?: WeaponStatsUpdateWithWhereUniqueWithoutWeaponInput | WeaponStatsUpdateWithWhereUniqueWithoutWeaponInput[]
    updateMany?: WeaponStatsUpdateManyWithWhereWithoutWeaponInput | WeaponStatsUpdateManyWithWhereWithoutWeaponInput[]
    deleteMany?: WeaponStatsScalarWhereInput | WeaponStatsScalarWhereInput[]
  }

  export type WeaponCreateNestedOneWithoutWeapon_statsInput = {
    create?: XOR<WeaponCreateWithoutWeapon_statsInput, WeaponUncheckedCreateWithoutWeapon_statsInput>
    connectOrCreate?: WeaponCreateOrConnectWithoutWeapon_statsInput
    connect?: WeaponWhereUniqueInput
  }

  export type WeaponUpdateOneRequiredWithoutWeapon_statsNestedInput = {
    create?: XOR<WeaponCreateWithoutWeapon_statsInput, WeaponUncheckedCreateWithoutWeapon_statsInput>
    connectOrCreate?: WeaponCreateOrConnectWithoutWeapon_statsInput
    upsert?: WeaponUpsertWithoutWeapon_statsInput
    connect?: WeaponWhereUniqueInput
    update?: XOR<XOR<WeaponUpdateToOneWithWhereWithoutWeapon_statsInput, WeaponUpdateWithoutWeapon_statsInput>, WeaponUncheckedUpdateWithoutWeapon_statsInput>
  }

  export type HeroCreateNestedOneWithoutBackpackInput = {
    create?: XOR<HeroCreateWithoutBackpackInput, HeroUncheckedCreateWithoutBackpackInput>
    connectOrCreate?: HeroCreateOrConnectWithoutBackpackInput
    connect?: HeroWhereUniqueInput
  }

  export type WeaponCreateNestedManyWithoutBackpackInput = {
    create?: XOR<WeaponCreateWithoutBackpackInput, WeaponUncheckedCreateWithoutBackpackInput> | WeaponCreateWithoutBackpackInput[] | WeaponUncheckedCreateWithoutBackpackInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutBackpackInput | WeaponCreateOrConnectWithoutBackpackInput[]
    createMany?: WeaponCreateManyBackpackInputEnvelope
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
  }

  export type WeaponUncheckedCreateNestedManyWithoutBackpackInput = {
    create?: XOR<WeaponCreateWithoutBackpackInput, WeaponUncheckedCreateWithoutBackpackInput> | WeaponCreateWithoutBackpackInput[] | WeaponUncheckedCreateWithoutBackpackInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutBackpackInput | WeaponCreateOrConnectWithoutBackpackInput[]
    createMany?: WeaponCreateManyBackpackInputEnvelope
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
  }

  export type HeroUpdateOneRequiredWithoutBackpackNestedInput = {
    create?: XOR<HeroCreateWithoutBackpackInput, HeroUncheckedCreateWithoutBackpackInput>
    connectOrCreate?: HeroCreateOrConnectWithoutBackpackInput
    upsert?: HeroUpsertWithoutBackpackInput
    connect?: HeroWhereUniqueInput
    update?: XOR<XOR<HeroUpdateToOneWithWhereWithoutBackpackInput, HeroUpdateWithoutBackpackInput>, HeroUncheckedUpdateWithoutBackpackInput>
  }

  export type WeaponUpdateManyWithoutBackpackNestedInput = {
    create?: XOR<WeaponCreateWithoutBackpackInput, WeaponUncheckedCreateWithoutBackpackInput> | WeaponCreateWithoutBackpackInput[] | WeaponUncheckedCreateWithoutBackpackInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutBackpackInput | WeaponCreateOrConnectWithoutBackpackInput[]
    upsert?: WeaponUpsertWithWhereUniqueWithoutBackpackInput | WeaponUpsertWithWhereUniqueWithoutBackpackInput[]
    createMany?: WeaponCreateManyBackpackInputEnvelope
    set?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    disconnect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    delete?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    update?: WeaponUpdateWithWhereUniqueWithoutBackpackInput | WeaponUpdateWithWhereUniqueWithoutBackpackInput[]
    updateMany?: WeaponUpdateManyWithWhereWithoutBackpackInput | WeaponUpdateManyWithWhereWithoutBackpackInput[]
    deleteMany?: WeaponScalarWhereInput | WeaponScalarWhereInput[]
  }

  export type WeaponUncheckedUpdateManyWithoutBackpackNestedInput = {
    create?: XOR<WeaponCreateWithoutBackpackInput, WeaponUncheckedCreateWithoutBackpackInput> | WeaponCreateWithoutBackpackInput[] | WeaponUncheckedCreateWithoutBackpackInput[]
    connectOrCreate?: WeaponCreateOrConnectWithoutBackpackInput | WeaponCreateOrConnectWithoutBackpackInput[]
    upsert?: WeaponUpsertWithWhereUniqueWithoutBackpackInput | WeaponUpsertWithWhereUniqueWithoutBackpackInput[]
    createMany?: WeaponCreateManyBackpackInputEnvelope
    set?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    disconnect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    delete?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    connect?: WeaponWhereUniqueInput | WeaponWhereUniqueInput[]
    update?: WeaponUpdateWithWhereUniqueWithoutBackpackInput | WeaponUpdateWithWhereUniqueWithoutBackpackInput[]
    updateMany?: WeaponUpdateManyWithWhereWithoutBackpackInput | WeaponUpdateManyWithWhereWithoutBackpackInput[]
    deleteMany?: WeaponScalarWhereInput | WeaponScalarWhereInput[]
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumRarityFilter<$PrismaModel = never> = {
    equals?: $Enums.Rarity | EnumRarityFieldRefInput<$PrismaModel>
    in?: $Enums.Rarity[]
    notIn?: $Enums.Rarity[]
    not?: NestedEnumRarityFilter<$PrismaModel> | $Enums.Rarity
  }

  export type NestedEnumRarityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rarity | EnumRarityFieldRefInput<$PrismaModel>
    in?: $Enums.Rarity[]
    notIn?: $Enums.Rarity[]
    not?: NestedEnumRarityWithAggregatesFilter<$PrismaModel> | $Enums.Rarity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRarityFilter<$PrismaModel>
    _max?: NestedEnumRarityFilter<$PrismaModel>
  }

  export type WeaponCreateWithoutHeroInput = {
    name: string
    rarity: $Enums.Rarity
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    backpack: BackpackCreateNestedOneWithoutWeaponInput
    weapon_stats?: WeaponStatsCreateNestedManyWithoutWeaponInput
  }

  export type WeaponUncheckedCreateWithoutHeroInput = {
    id?: number
    backpack_id: number
    name: string
    rarity: $Enums.Rarity
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    weapon_stats?: WeaponStatsUncheckedCreateNestedManyWithoutWeaponInput
  }

  export type WeaponCreateOrConnectWithoutHeroInput = {
    where: WeaponWhereUniqueInput
    create: XOR<WeaponCreateWithoutHeroInput, WeaponUncheckedCreateWithoutHeroInput>
  }

  export type WeaponCreateManyHeroInputEnvelope = {
    data: WeaponCreateManyHeroInput | WeaponCreateManyHeroInput[]
  }

  export type BackpackCreateWithoutHeroInput = {
    backpack_size: number
    weapon?: WeaponCreateNestedManyWithoutBackpackInput
  }

  export type BackpackUncheckedCreateWithoutHeroInput = {
    id?: number
    backpack_size: number
    weapon?: WeaponUncheckedCreateNestedManyWithoutBackpackInput
  }

  export type BackpackCreateOrConnectWithoutHeroInput = {
    where: BackpackWhereUniqueInput
    create: XOR<BackpackCreateWithoutHeroInput, BackpackUncheckedCreateWithoutHeroInput>
  }

  export type WeaponUpsertWithWhereUniqueWithoutHeroInput = {
    where: WeaponWhereUniqueInput
    update: XOR<WeaponUpdateWithoutHeroInput, WeaponUncheckedUpdateWithoutHeroInput>
    create: XOR<WeaponCreateWithoutHeroInput, WeaponUncheckedCreateWithoutHeroInput>
  }

  export type WeaponUpdateWithWhereUniqueWithoutHeroInput = {
    where: WeaponWhereUniqueInput
    data: XOR<WeaponUpdateWithoutHeroInput, WeaponUncheckedUpdateWithoutHeroInput>
  }

  export type WeaponUpdateManyWithWhereWithoutHeroInput = {
    where: WeaponScalarWhereInput
    data: XOR<WeaponUpdateManyMutationInput, WeaponUncheckedUpdateManyWithoutHeroInput>
  }

  export type WeaponScalarWhereInput = {
    AND?: WeaponScalarWhereInput | WeaponScalarWhereInput[]
    OR?: WeaponScalarWhereInput[]
    NOT?: WeaponScalarWhereInput | WeaponScalarWhereInput[]
    id?: IntFilter<"Weapon"> | number
    hero_id?: IntFilter<"Weapon"> | number
    backpack_id?: IntFilter<"Weapon"> | number
    name?: StringFilter<"Weapon"> | string
    rarity?: EnumRarityFilter<"Weapon"> | $Enums.Rarity
    description?: StringFilter<"Weapon"> | string
    createdAt?: DateTimeFilter<"Weapon"> | Date | string
    updatedAt?: DateTimeFilter<"Weapon"> | Date | string
  }

  export type BackpackUpsertWithoutHeroInput = {
    update: XOR<BackpackUpdateWithoutHeroInput, BackpackUncheckedUpdateWithoutHeroInput>
    create: XOR<BackpackCreateWithoutHeroInput, BackpackUncheckedCreateWithoutHeroInput>
    where?: BackpackWhereInput
  }

  export type BackpackUpdateToOneWithWhereWithoutHeroInput = {
    where?: BackpackWhereInput
    data: XOR<BackpackUpdateWithoutHeroInput, BackpackUncheckedUpdateWithoutHeroInput>
  }

  export type BackpackUpdateWithoutHeroInput = {
    backpack_size?: IntFieldUpdateOperationsInput | number
    weapon?: WeaponUpdateManyWithoutBackpackNestedInput
  }

  export type BackpackUncheckedUpdateWithoutHeroInput = {
    id?: IntFieldUpdateOperationsInput | number
    backpack_size?: IntFieldUpdateOperationsInput | number
    weapon?: WeaponUncheckedUpdateManyWithoutBackpackNestedInput
  }

  export type HeroCreateWithoutWeaponInput = {
    name: string
    class: $Enums.Role
    level: number
    createdAt?: Date | string
    updatedAt?: Date | string
    backpack?: BackpackCreateNestedOneWithoutHeroInput
  }

  export type HeroUncheckedCreateWithoutWeaponInput = {
    id?: number
    name: string
    class: $Enums.Role
    level: number
    createdAt?: Date | string
    updatedAt?: Date | string
    backpack?: BackpackUncheckedCreateNestedOneWithoutHeroInput
  }

  export type HeroCreateOrConnectWithoutWeaponInput = {
    where: HeroWhereUniqueInput
    create: XOR<HeroCreateWithoutWeaponInput, HeroUncheckedCreateWithoutWeaponInput>
  }

  export type BackpackCreateWithoutWeaponInput = {
    backpack_size: number
    hero: HeroCreateNestedOneWithoutBackpackInput
  }

  export type BackpackUncheckedCreateWithoutWeaponInput = {
    id?: number
    backpack_size: number
    hero_id: number
  }

  export type BackpackCreateOrConnectWithoutWeaponInput = {
    where: BackpackWhereUniqueInput
    create: XOR<BackpackCreateWithoutWeaponInput, BackpackUncheckedCreateWithoutWeaponInput>
  }

  export type WeaponStatsCreateWithoutWeaponInput = {
    weapon_str: number
    weapon_def: number
    weapon_int: number
    weapon_crit: number
    createdAt?: Date | string
  }

  export type WeaponStatsUncheckedCreateWithoutWeaponInput = {
    id?: number
    weapon_str: number
    weapon_def: number
    weapon_int: number
    weapon_crit: number
    createdAt?: Date | string
  }

  export type WeaponStatsCreateOrConnectWithoutWeaponInput = {
    where: WeaponStatsWhereUniqueInput
    create: XOR<WeaponStatsCreateWithoutWeaponInput, WeaponStatsUncheckedCreateWithoutWeaponInput>
  }

  export type WeaponStatsCreateManyWeaponInputEnvelope = {
    data: WeaponStatsCreateManyWeaponInput | WeaponStatsCreateManyWeaponInput[]
  }

  export type HeroUpsertWithoutWeaponInput = {
    update: XOR<HeroUpdateWithoutWeaponInput, HeroUncheckedUpdateWithoutWeaponInput>
    create: XOR<HeroCreateWithoutWeaponInput, HeroUncheckedCreateWithoutWeaponInput>
    where?: HeroWhereInput
  }

  export type HeroUpdateToOneWithWhereWithoutWeaponInput = {
    where?: HeroWhereInput
    data: XOR<HeroUpdateWithoutWeaponInput, HeroUncheckedUpdateWithoutWeaponInput>
  }

  export type HeroUpdateWithoutWeaponInput = {
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    backpack?: BackpackUpdateOneWithoutHeroNestedInput
  }

  export type HeroUncheckedUpdateWithoutWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    backpack?: BackpackUncheckedUpdateOneWithoutHeroNestedInput
  }

  export type BackpackUpsertWithoutWeaponInput = {
    update: XOR<BackpackUpdateWithoutWeaponInput, BackpackUncheckedUpdateWithoutWeaponInput>
    create: XOR<BackpackCreateWithoutWeaponInput, BackpackUncheckedCreateWithoutWeaponInput>
    where?: BackpackWhereInput
  }

  export type BackpackUpdateToOneWithWhereWithoutWeaponInput = {
    where?: BackpackWhereInput
    data: XOR<BackpackUpdateWithoutWeaponInput, BackpackUncheckedUpdateWithoutWeaponInput>
  }

  export type BackpackUpdateWithoutWeaponInput = {
    backpack_size?: IntFieldUpdateOperationsInput | number
    hero?: HeroUpdateOneRequiredWithoutBackpackNestedInput
  }

  export type BackpackUncheckedUpdateWithoutWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    backpack_size?: IntFieldUpdateOperationsInput | number
    hero_id?: IntFieldUpdateOperationsInput | number
  }

  export type WeaponStatsUpsertWithWhereUniqueWithoutWeaponInput = {
    where: WeaponStatsWhereUniqueInput
    update: XOR<WeaponStatsUpdateWithoutWeaponInput, WeaponStatsUncheckedUpdateWithoutWeaponInput>
    create: XOR<WeaponStatsCreateWithoutWeaponInput, WeaponStatsUncheckedCreateWithoutWeaponInput>
  }

  export type WeaponStatsUpdateWithWhereUniqueWithoutWeaponInput = {
    where: WeaponStatsWhereUniqueInput
    data: XOR<WeaponStatsUpdateWithoutWeaponInput, WeaponStatsUncheckedUpdateWithoutWeaponInput>
  }

  export type WeaponStatsUpdateManyWithWhereWithoutWeaponInput = {
    where: WeaponStatsScalarWhereInput
    data: XOR<WeaponStatsUpdateManyMutationInput, WeaponStatsUncheckedUpdateManyWithoutWeaponInput>
  }

  export type WeaponStatsScalarWhereInput = {
    AND?: WeaponStatsScalarWhereInput | WeaponStatsScalarWhereInput[]
    OR?: WeaponStatsScalarWhereInput[]
    NOT?: WeaponStatsScalarWhereInput | WeaponStatsScalarWhereInput[]
    id?: IntFilter<"WeaponStats"> | number
    weapon_id?: IntFilter<"WeaponStats"> | number
    weapon_str?: IntFilter<"WeaponStats"> | number
    weapon_def?: IntFilter<"WeaponStats"> | number
    weapon_int?: IntFilter<"WeaponStats"> | number
    weapon_crit?: IntFilter<"WeaponStats"> | number
    createdAt?: DateTimeFilter<"WeaponStats"> | Date | string
  }

  export type WeaponCreateWithoutWeapon_statsInput = {
    name: string
    rarity: $Enums.Rarity
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hero: HeroCreateNestedOneWithoutWeaponInput
    backpack: BackpackCreateNestedOneWithoutWeaponInput
  }

  export type WeaponUncheckedCreateWithoutWeapon_statsInput = {
    id?: number
    hero_id: number
    backpack_id: number
    name: string
    rarity: $Enums.Rarity
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeaponCreateOrConnectWithoutWeapon_statsInput = {
    where: WeaponWhereUniqueInput
    create: XOR<WeaponCreateWithoutWeapon_statsInput, WeaponUncheckedCreateWithoutWeapon_statsInput>
  }

  export type WeaponUpsertWithoutWeapon_statsInput = {
    update: XOR<WeaponUpdateWithoutWeapon_statsInput, WeaponUncheckedUpdateWithoutWeapon_statsInput>
    create: XOR<WeaponCreateWithoutWeapon_statsInput, WeaponUncheckedCreateWithoutWeapon_statsInput>
    where?: WeaponWhereInput
  }

  export type WeaponUpdateToOneWithWhereWithoutWeapon_statsInput = {
    where?: WeaponWhereInput
    data: XOR<WeaponUpdateWithoutWeapon_statsInput, WeaponUncheckedUpdateWithoutWeapon_statsInput>
  }

  export type WeaponUpdateWithoutWeapon_statsInput = {
    name?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hero?: HeroUpdateOneRequiredWithoutWeaponNestedInput
    backpack?: BackpackUpdateOneRequiredWithoutWeaponNestedInput
  }

  export type WeaponUncheckedUpdateWithoutWeapon_statsInput = {
    id?: IntFieldUpdateOperationsInput | number
    hero_id?: IntFieldUpdateOperationsInput | number
    backpack_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroCreateWithoutBackpackInput = {
    name: string
    class: $Enums.Role
    level: number
    createdAt?: Date | string
    updatedAt?: Date | string
    weapon?: WeaponCreateNestedManyWithoutHeroInput
  }

  export type HeroUncheckedCreateWithoutBackpackInput = {
    id?: number
    name: string
    class: $Enums.Role
    level: number
    createdAt?: Date | string
    updatedAt?: Date | string
    weapon?: WeaponUncheckedCreateNestedManyWithoutHeroInput
  }

  export type HeroCreateOrConnectWithoutBackpackInput = {
    where: HeroWhereUniqueInput
    create: XOR<HeroCreateWithoutBackpackInput, HeroUncheckedCreateWithoutBackpackInput>
  }

  export type WeaponCreateWithoutBackpackInput = {
    name: string
    rarity: $Enums.Rarity
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hero: HeroCreateNestedOneWithoutWeaponInput
    weapon_stats?: WeaponStatsCreateNestedManyWithoutWeaponInput
  }

  export type WeaponUncheckedCreateWithoutBackpackInput = {
    id?: number
    hero_id: number
    name: string
    rarity: $Enums.Rarity
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    weapon_stats?: WeaponStatsUncheckedCreateNestedManyWithoutWeaponInput
  }

  export type WeaponCreateOrConnectWithoutBackpackInput = {
    where: WeaponWhereUniqueInput
    create: XOR<WeaponCreateWithoutBackpackInput, WeaponUncheckedCreateWithoutBackpackInput>
  }

  export type WeaponCreateManyBackpackInputEnvelope = {
    data: WeaponCreateManyBackpackInput | WeaponCreateManyBackpackInput[]
  }

  export type HeroUpsertWithoutBackpackInput = {
    update: XOR<HeroUpdateWithoutBackpackInput, HeroUncheckedUpdateWithoutBackpackInput>
    create: XOR<HeroCreateWithoutBackpackInput, HeroUncheckedCreateWithoutBackpackInput>
    where?: HeroWhereInput
  }

  export type HeroUpdateToOneWithWhereWithoutBackpackInput = {
    where?: HeroWhereInput
    data: XOR<HeroUpdateWithoutBackpackInput, HeroUncheckedUpdateWithoutBackpackInput>
  }

  export type HeroUpdateWithoutBackpackInput = {
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weapon?: WeaponUpdateManyWithoutHeroNestedInput
  }

  export type HeroUncheckedUpdateWithoutBackpackInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    class?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weapon?: WeaponUncheckedUpdateManyWithoutHeroNestedInput
  }

  export type WeaponUpsertWithWhereUniqueWithoutBackpackInput = {
    where: WeaponWhereUniqueInput
    update: XOR<WeaponUpdateWithoutBackpackInput, WeaponUncheckedUpdateWithoutBackpackInput>
    create: XOR<WeaponCreateWithoutBackpackInput, WeaponUncheckedCreateWithoutBackpackInput>
  }

  export type WeaponUpdateWithWhereUniqueWithoutBackpackInput = {
    where: WeaponWhereUniqueInput
    data: XOR<WeaponUpdateWithoutBackpackInput, WeaponUncheckedUpdateWithoutBackpackInput>
  }

  export type WeaponUpdateManyWithWhereWithoutBackpackInput = {
    where: WeaponScalarWhereInput
    data: XOR<WeaponUpdateManyMutationInput, WeaponUncheckedUpdateManyWithoutBackpackInput>
  }

  export type WeaponCreateManyHeroInput = {
    id?: number
    backpack_id: number
    name: string
    rarity: $Enums.Rarity
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeaponUpdateWithoutHeroInput = {
    name?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    backpack?: BackpackUpdateOneRequiredWithoutWeaponNestedInput
    weapon_stats?: WeaponStatsUpdateManyWithoutWeaponNestedInput
  }

  export type WeaponUncheckedUpdateWithoutHeroInput = {
    id?: IntFieldUpdateOperationsInput | number
    backpack_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weapon_stats?: WeaponStatsUncheckedUpdateManyWithoutWeaponNestedInput
  }

  export type WeaponUncheckedUpdateManyWithoutHeroInput = {
    id?: IntFieldUpdateOperationsInput | number
    backpack_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeaponStatsCreateManyWeaponInput = {
    id?: number
    weapon_str: number
    weapon_def: number
    weapon_int: number
    weapon_crit: number
    createdAt?: Date | string
  }

  export type WeaponStatsUpdateWithoutWeaponInput = {
    weapon_str?: IntFieldUpdateOperationsInput | number
    weapon_def?: IntFieldUpdateOperationsInput | number
    weapon_int?: IntFieldUpdateOperationsInput | number
    weapon_crit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeaponStatsUncheckedUpdateWithoutWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    weapon_str?: IntFieldUpdateOperationsInput | number
    weapon_def?: IntFieldUpdateOperationsInput | number
    weapon_int?: IntFieldUpdateOperationsInput | number
    weapon_crit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeaponStatsUncheckedUpdateManyWithoutWeaponInput = {
    id?: IntFieldUpdateOperationsInput | number
    weapon_str?: IntFieldUpdateOperationsInput | number
    weapon_def?: IntFieldUpdateOperationsInput | number
    weapon_int?: IntFieldUpdateOperationsInput | number
    weapon_crit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeaponCreateManyBackpackInput = {
    id?: number
    hero_id: number
    name: string
    rarity: $Enums.Rarity
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeaponUpdateWithoutBackpackInput = {
    name?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hero?: HeroUpdateOneRequiredWithoutWeaponNestedInput
    weapon_stats?: WeaponStatsUpdateManyWithoutWeaponNestedInput
  }

  export type WeaponUncheckedUpdateWithoutBackpackInput = {
    id?: IntFieldUpdateOperationsInput | number
    hero_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weapon_stats?: WeaponStatsUncheckedUpdateManyWithoutWeaponNestedInput
  }

  export type WeaponUncheckedUpdateManyWithoutBackpackInput = {
    id?: IntFieldUpdateOperationsInput | number
    hero_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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