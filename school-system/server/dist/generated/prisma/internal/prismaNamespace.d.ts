import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.8.0
 * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
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
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
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
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly RefreshToken: "RefreshToken";
    readonly PasswordResetToken: "PasswordResetToken";
    readonly Student: "Student";
    readonly Teacher: "Teacher";
    readonly Parent: "Parent";
    readonly Class: "Class";
    readonly ClassStudent: "ClassStudent";
    readonly ClassTeacher: "ClassTeacher";
    readonly Subject: "Subject";
    readonly SubjectTeacher: "SubjectTeacher";
    readonly Attendance: "Attendance";
    readonly Exam: "Exam";
    readonly ExamSubject: "ExamSubject";
    readonly Result: "Result";
    readonly FeeStructure: "FeeStructure";
    readonly FeePayment: "FeePayment";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "refreshToken" | "passwordResetToken" | "student" | "teacher" | "parent" | "class" | "classStudent" | "classTeacher" | "subject" | "subjectTeacher" | "attendance" | "exam" | "examSubject" | "result" | "feeStructure" | "feePayment";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        RefreshToken: {
            payload: Prisma.$RefreshTokenPayload<ExtArgs>;
            fields: Prisma.RefreshTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                findFirst: {
                    args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                findMany: {
                    args: Prisma.RefreshTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                create: {
                    args: Prisma.RefreshTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                createMany: {
                    args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                delete: {
                    args: Prisma.RefreshTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                update: {
                    args: Prisma.RefreshTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                upsert: {
                    args: Prisma.RefreshTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                aggregate: {
                    args: Prisma.RefreshTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRefreshToken>;
                };
                groupBy: {
                    args: Prisma.RefreshTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefreshTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RefreshTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefreshTokenCountAggregateOutputType> | number;
                };
            };
        };
        PasswordResetToken: {
            payload: Prisma.$PasswordResetTokenPayload<ExtArgs>;
            fields: Prisma.PasswordResetTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                findFirst: {
                    args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                findMany: {
                    args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[];
                };
                create: {
                    args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                createMany: {
                    args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[];
                };
                delete: {
                    args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                update: {
                    args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[];
                };
                upsert: {
                    args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                aggregate: {
                    args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePasswordResetToken>;
                };
                groupBy: {
                    args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PasswordResetTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PasswordResetTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PasswordResetTokenCountAggregateOutputType> | number;
                };
            };
        };
        Student: {
            payload: Prisma.$StudentPayload<ExtArgs>;
            fields: Prisma.StudentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StudentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                findFirst: {
                    args: Prisma.StudentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                findMany: {
                    args: Prisma.StudentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>[];
                };
                create: {
                    args: Prisma.StudentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                createMany: {
                    args: Prisma.StudentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>[];
                };
                delete: {
                    args: Prisma.StudentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                update: {
                    args: Prisma.StudentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                deleteMany: {
                    args: Prisma.StudentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StudentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>[];
                };
                upsert: {
                    args: Prisma.StudentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                aggregate: {
                    args: Prisma.StudentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStudent>;
                };
                groupBy: {
                    args: Prisma.StudentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StudentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentCountAggregateOutputType> | number;
                };
            };
        };
        Teacher: {
            payload: Prisma.$TeacherPayload<ExtArgs>;
            fields: Prisma.TeacherFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TeacherFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload>;
                };
                findFirst: {
                    args: Prisma.TeacherFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload>;
                };
                findMany: {
                    args: Prisma.TeacherFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload>[];
                };
                create: {
                    args: Prisma.TeacherCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload>;
                };
                createMany: {
                    args: Prisma.TeacherCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TeacherCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload>[];
                };
                delete: {
                    args: Prisma.TeacherDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload>;
                };
                update: {
                    args: Prisma.TeacherUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload>;
                };
                deleteMany: {
                    args: Prisma.TeacherDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TeacherUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TeacherUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload>[];
                };
                upsert: {
                    args: Prisma.TeacherUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload>;
                };
                aggregate: {
                    args: Prisma.TeacherAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTeacher>;
                };
                groupBy: {
                    args: Prisma.TeacherGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeacherGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TeacherCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeacherCountAggregateOutputType> | number;
                };
            };
        };
        Parent: {
            payload: Prisma.$ParentPayload<ExtArgs>;
            fields: Prisma.ParentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ParentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ParentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentPayload>;
                };
                findFirst: {
                    args: Prisma.ParentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ParentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentPayload>;
                };
                findMany: {
                    args: Prisma.ParentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentPayload>[];
                };
                create: {
                    args: Prisma.ParentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentPayload>;
                };
                createMany: {
                    args: Prisma.ParentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ParentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentPayload>[];
                };
                delete: {
                    args: Prisma.ParentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentPayload>;
                };
                update: {
                    args: Prisma.ParentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentPayload>;
                };
                deleteMany: {
                    args: Prisma.ParentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ParentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ParentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentPayload>[];
                };
                upsert: {
                    args: Prisma.ParentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentPayload>;
                };
                aggregate: {
                    args: Prisma.ParentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateParent>;
                };
                groupBy: {
                    args: Prisma.ParentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ParentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParentCountAggregateOutputType> | number;
                };
            };
        };
        Class: {
            payload: Prisma.$ClassPayload<ExtArgs>;
            fields: Prisma.ClassFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ClassFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload>;
                };
                findFirst: {
                    args: Prisma.ClassFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload>;
                };
                findMany: {
                    args: Prisma.ClassFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload>[];
                };
                create: {
                    args: Prisma.ClassCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload>;
                };
                createMany: {
                    args: Prisma.ClassCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ClassCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload>[];
                };
                delete: {
                    args: Prisma.ClassDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload>;
                };
                update: {
                    args: Prisma.ClassUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload>;
                };
                deleteMany: {
                    args: Prisma.ClassDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ClassUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ClassUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload>[];
                };
                upsert: {
                    args: Prisma.ClassUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload>;
                };
                aggregate: {
                    args: Prisma.ClassAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateClass>;
                };
                groupBy: {
                    args: Prisma.ClassGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClassGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ClassCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClassCountAggregateOutputType> | number;
                };
            };
        };
        ClassStudent: {
            payload: Prisma.$ClassStudentPayload<ExtArgs>;
            fields: Prisma.ClassStudentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ClassStudentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassStudentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ClassStudentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassStudentPayload>;
                };
                findFirst: {
                    args: Prisma.ClassStudentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassStudentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ClassStudentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassStudentPayload>;
                };
                findMany: {
                    args: Prisma.ClassStudentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassStudentPayload>[];
                };
                create: {
                    args: Prisma.ClassStudentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassStudentPayload>;
                };
                createMany: {
                    args: Prisma.ClassStudentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ClassStudentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassStudentPayload>[];
                };
                delete: {
                    args: Prisma.ClassStudentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassStudentPayload>;
                };
                update: {
                    args: Prisma.ClassStudentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassStudentPayload>;
                };
                deleteMany: {
                    args: Prisma.ClassStudentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ClassStudentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ClassStudentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassStudentPayload>[];
                };
                upsert: {
                    args: Prisma.ClassStudentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassStudentPayload>;
                };
                aggregate: {
                    args: Prisma.ClassStudentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateClassStudent>;
                };
                groupBy: {
                    args: Prisma.ClassStudentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClassStudentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ClassStudentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClassStudentCountAggregateOutputType> | number;
                };
            };
        };
        ClassTeacher: {
            payload: Prisma.$ClassTeacherPayload<ExtArgs>;
            fields: Prisma.ClassTeacherFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ClassTeacherFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassTeacherPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ClassTeacherFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassTeacherPayload>;
                };
                findFirst: {
                    args: Prisma.ClassTeacherFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassTeacherPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ClassTeacherFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassTeacherPayload>;
                };
                findMany: {
                    args: Prisma.ClassTeacherFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassTeacherPayload>[];
                };
                create: {
                    args: Prisma.ClassTeacherCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassTeacherPayload>;
                };
                createMany: {
                    args: Prisma.ClassTeacherCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ClassTeacherCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassTeacherPayload>[];
                };
                delete: {
                    args: Prisma.ClassTeacherDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassTeacherPayload>;
                };
                update: {
                    args: Prisma.ClassTeacherUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassTeacherPayload>;
                };
                deleteMany: {
                    args: Prisma.ClassTeacherDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ClassTeacherUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ClassTeacherUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassTeacherPayload>[];
                };
                upsert: {
                    args: Prisma.ClassTeacherUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassTeacherPayload>;
                };
                aggregate: {
                    args: Prisma.ClassTeacherAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateClassTeacher>;
                };
                groupBy: {
                    args: Prisma.ClassTeacherGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClassTeacherGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ClassTeacherCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClassTeacherCountAggregateOutputType> | number;
                };
            };
        };
        Subject: {
            payload: Prisma.$SubjectPayload<ExtArgs>;
            fields: Prisma.SubjectFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SubjectFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                findFirst: {
                    args: Prisma.SubjectFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                findMany: {
                    args: Prisma.SubjectFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>[];
                };
                create: {
                    args: Prisma.SubjectCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                createMany: {
                    args: Prisma.SubjectCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>[];
                };
                delete: {
                    args: Prisma.SubjectDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                update: {
                    args: Prisma.SubjectUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                deleteMany: {
                    args: Prisma.SubjectDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SubjectUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>[];
                };
                upsert: {
                    args: Prisma.SubjectUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectPayload>;
                };
                aggregate: {
                    args: Prisma.SubjectAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubject>;
                };
                groupBy: {
                    args: Prisma.SubjectGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubjectGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SubjectCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubjectCountAggregateOutputType> | number;
                };
            };
        };
        SubjectTeacher: {
            payload: Prisma.$SubjectTeacherPayload<ExtArgs>;
            fields: Prisma.SubjectTeacherFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SubjectTeacherFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectTeacherPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SubjectTeacherFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectTeacherPayload>;
                };
                findFirst: {
                    args: Prisma.SubjectTeacherFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectTeacherPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SubjectTeacherFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectTeacherPayload>;
                };
                findMany: {
                    args: Prisma.SubjectTeacherFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectTeacherPayload>[];
                };
                create: {
                    args: Prisma.SubjectTeacherCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectTeacherPayload>;
                };
                createMany: {
                    args: Prisma.SubjectTeacherCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SubjectTeacherCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectTeacherPayload>[];
                };
                delete: {
                    args: Prisma.SubjectTeacherDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectTeacherPayload>;
                };
                update: {
                    args: Prisma.SubjectTeacherUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectTeacherPayload>;
                };
                deleteMany: {
                    args: Prisma.SubjectTeacherDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SubjectTeacherUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SubjectTeacherUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectTeacherPayload>[];
                };
                upsert: {
                    args: Prisma.SubjectTeacherUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectTeacherPayload>;
                };
                aggregate: {
                    args: Prisma.SubjectTeacherAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubjectTeacher>;
                };
                groupBy: {
                    args: Prisma.SubjectTeacherGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubjectTeacherGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SubjectTeacherCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubjectTeacherCountAggregateOutputType> | number;
                };
            };
        };
        Attendance: {
            payload: Prisma.$AttendancePayload<ExtArgs>;
            fields: Prisma.AttendanceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AttendanceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>;
                };
                findFirst: {
                    args: Prisma.AttendanceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>;
                };
                findMany: {
                    args: Prisma.AttendanceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>[];
                };
                create: {
                    args: Prisma.AttendanceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>;
                };
                createMany: {
                    args: Prisma.AttendanceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>[];
                };
                delete: {
                    args: Prisma.AttendanceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>;
                };
                update: {
                    args: Prisma.AttendanceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>;
                };
                deleteMany: {
                    args: Prisma.AttendanceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AttendanceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>[];
                };
                upsert: {
                    args: Prisma.AttendanceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>;
                };
                aggregate: {
                    args: Prisma.AttendanceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAttendance>;
                };
                groupBy: {
                    args: Prisma.AttendanceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AttendanceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AttendanceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AttendanceCountAggregateOutputType> | number;
                };
            };
        };
        Exam: {
            payload: Prisma.$ExamPayload<ExtArgs>;
            fields: Prisma.ExamFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ExamFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ExamFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload>;
                };
                findFirst: {
                    args: Prisma.ExamFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ExamFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload>;
                };
                findMany: {
                    args: Prisma.ExamFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload>[];
                };
                create: {
                    args: Prisma.ExamCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload>;
                };
                createMany: {
                    args: Prisma.ExamCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ExamCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload>[];
                };
                delete: {
                    args: Prisma.ExamDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload>;
                };
                update: {
                    args: Prisma.ExamUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload>;
                };
                deleteMany: {
                    args: Prisma.ExamDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ExamUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ExamUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload>[];
                };
                upsert: {
                    args: Prisma.ExamUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamPayload>;
                };
                aggregate: {
                    args: Prisma.ExamAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateExam>;
                };
                groupBy: {
                    args: Prisma.ExamGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExamGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ExamCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExamCountAggregateOutputType> | number;
                };
            };
        };
        ExamSubject: {
            payload: Prisma.$ExamSubjectPayload<ExtArgs>;
            fields: Prisma.ExamSubjectFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ExamSubjectFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSubjectPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ExamSubjectFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSubjectPayload>;
                };
                findFirst: {
                    args: Prisma.ExamSubjectFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSubjectPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ExamSubjectFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSubjectPayload>;
                };
                findMany: {
                    args: Prisma.ExamSubjectFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSubjectPayload>[];
                };
                create: {
                    args: Prisma.ExamSubjectCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSubjectPayload>;
                };
                createMany: {
                    args: Prisma.ExamSubjectCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ExamSubjectCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSubjectPayload>[];
                };
                delete: {
                    args: Prisma.ExamSubjectDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSubjectPayload>;
                };
                update: {
                    args: Prisma.ExamSubjectUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSubjectPayload>;
                };
                deleteMany: {
                    args: Prisma.ExamSubjectDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ExamSubjectUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ExamSubjectUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSubjectPayload>[];
                };
                upsert: {
                    args: Prisma.ExamSubjectUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSubjectPayload>;
                };
                aggregate: {
                    args: Prisma.ExamSubjectAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateExamSubject>;
                };
                groupBy: {
                    args: Prisma.ExamSubjectGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExamSubjectGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ExamSubjectCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExamSubjectCountAggregateOutputType> | number;
                };
            };
        };
        Result: {
            payload: Prisma.$ResultPayload<ExtArgs>;
            fields: Prisma.ResultFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ResultFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResultPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ResultFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResultPayload>;
                };
                findFirst: {
                    args: Prisma.ResultFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResultPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ResultFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResultPayload>;
                };
                findMany: {
                    args: Prisma.ResultFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResultPayload>[];
                };
                create: {
                    args: Prisma.ResultCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResultPayload>;
                };
                createMany: {
                    args: Prisma.ResultCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ResultCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResultPayload>[];
                };
                delete: {
                    args: Prisma.ResultDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResultPayload>;
                };
                update: {
                    args: Prisma.ResultUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResultPayload>;
                };
                deleteMany: {
                    args: Prisma.ResultDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ResultUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ResultUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResultPayload>[];
                };
                upsert: {
                    args: Prisma.ResultUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResultPayload>;
                };
                aggregate: {
                    args: Prisma.ResultAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateResult>;
                };
                groupBy: {
                    args: Prisma.ResultGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ResultGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ResultCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ResultCountAggregateOutputType> | number;
                };
            };
        };
        FeeStructure: {
            payload: Prisma.$FeeStructurePayload<ExtArgs>;
            fields: Prisma.FeeStructureFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FeeStructureFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeStructurePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FeeStructureFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeStructurePayload>;
                };
                findFirst: {
                    args: Prisma.FeeStructureFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeStructurePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FeeStructureFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeStructurePayload>;
                };
                findMany: {
                    args: Prisma.FeeStructureFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeStructurePayload>[];
                };
                create: {
                    args: Prisma.FeeStructureCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeStructurePayload>;
                };
                createMany: {
                    args: Prisma.FeeStructureCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FeeStructureCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeStructurePayload>[];
                };
                delete: {
                    args: Prisma.FeeStructureDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeStructurePayload>;
                };
                update: {
                    args: Prisma.FeeStructureUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeStructurePayload>;
                };
                deleteMany: {
                    args: Prisma.FeeStructureDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FeeStructureUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FeeStructureUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeStructurePayload>[];
                };
                upsert: {
                    args: Prisma.FeeStructureUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeeStructurePayload>;
                };
                aggregate: {
                    args: Prisma.FeeStructureAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFeeStructure>;
                };
                groupBy: {
                    args: Prisma.FeeStructureGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeeStructureGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FeeStructureCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeeStructureCountAggregateOutputType> | number;
                };
            };
        };
        FeePayment: {
            payload: Prisma.$FeePaymentPayload<ExtArgs>;
            fields: Prisma.FeePaymentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FeePaymentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePaymentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FeePaymentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePaymentPayload>;
                };
                findFirst: {
                    args: Prisma.FeePaymentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePaymentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FeePaymentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePaymentPayload>;
                };
                findMany: {
                    args: Prisma.FeePaymentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePaymentPayload>[];
                };
                create: {
                    args: Prisma.FeePaymentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePaymentPayload>;
                };
                createMany: {
                    args: Prisma.FeePaymentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FeePaymentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePaymentPayload>[];
                };
                delete: {
                    args: Prisma.FeePaymentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePaymentPayload>;
                };
                update: {
                    args: Prisma.FeePaymentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePaymentPayload>;
                };
                deleteMany: {
                    args: Prisma.FeePaymentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FeePaymentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FeePaymentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePaymentPayload>[];
                };
                upsert: {
                    args: Prisma.FeePaymentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePaymentPayload>;
                };
                aggregate: {
                    args: Prisma.FeePaymentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFeePayment>;
                };
                groupBy: {
                    args: Prisma.FeePaymentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeePaymentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FeePaymentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeePaymentCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly password: "password";
    readonly role: "role";
    readonly isActive: "isActive";
    readonly lastLoginAt: "lastLoginAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const RefreshTokenScalarFieldEnum: {
    readonly id: "id";
    readonly tokenHash: "tokenHash";
    readonly userId: "userId";
    readonly expiresAt: "expiresAt";
    readonly revokedAt: "revokedAt";
    readonly createdAt: "createdAt";
};
export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum];
export declare const PasswordResetTokenScalarFieldEnum: {
    readonly id: "id";
    readonly tokenHash: "tokenHash";
    readonly userId: "userId";
    readonly expiresAt: "expiresAt";
    readonly usedAt: "usedAt";
    readonly createdAt: "createdAt";
};
export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum];
export declare const StudentScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly admissionNo: "admissionNo";
    readonly dob: "dob";
    readonly gender: "gender";
    readonly address: "address";
    readonly phone: "phone";
    readonly parentId: "parentId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum];
export declare const TeacherScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly employeeNo: "employeeNo";
    readonly dob: "dob";
    readonly gender: "gender";
    readonly address: "address";
    readonly phone: "phone";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum];
export declare const ParentScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly phone: "phone";
    readonly address: "address";
    readonly occupation: "occupation";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ParentScalarFieldEnum = (typeof ParentScalarFieldEnum)[keyof typeof ParentScalarFieldEnum];
export declare const ClassScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly grade: "grade";
    readonly section: "section";
    readonly academicYear: "academicYear";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum];
export declare const ClassStudentScalarFieldEnum: {
    readonly studentId: "studentId";
    readonly classId: "classId";
    readonly assignedAt: "assignedAt";
};
export type ClassStudentScalarFieldEnum = (typeof ClassStudentScalarFieldEnum)[keyof typeof ClassStudentScalarFieldEnum];
export declare const ClassTeacherScalarFieldEnum: {
    readonly teacherId: "teacherId";
    readonly classId: "classId";
    readonly assignedAt: "assignedAt";
};
export type ClassTeacherScalarFieldEnum = (typeof ClassTeacherScalarFieldEnum)[keyof typeof ClassTeacherScalarFieldEnum];
export declare const SubjectScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly code: "code";
    readonly description: "description";
    readonly classId: "classId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum];
export declare const SubjectTeacherScalarFieldEnum: {
    readonly subjectId: "subjectId";
    readonly teacherId: "teacherId";
    readonly assignedAt: "assignedAt";
};
export type SubjectTeacherScalarFieldEnum = (typeof SubjectTeacherScalarFieldEnum)[keyof typeof SubjectTeacherScalarFieldEnum];
export declare const AttendanceScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly classId: "classId";
    readonly date: "date";
    readonly status: "status";
    readonly remarks: "remarks";
    readonly createdAt: "createdAt";
};
export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum];
export declare const ExamScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly type: "type";
    readonly classId: "classId";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ExamScalarFieldEnum = (typeof ExamScalarFieldEnum)[keyof typeof ExamScalarFieldEnum];
export declare const ExamSubjectScalarFieldEnum: {
    readonly examId: "examId";
    readonly subjectId: "subjectId";
    readonly examDate: "examDate";
    readonly maxMarks: "maxMarks";
};
export type ExamSubjectScalarFieldEnum = (typeof ExamSubjectScalarFieldEnum)[keyof typeof ExamSubjectScalarFieldEnum];
export declare const ResultScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly subjectId: "subjectId";
    readonly examId: "examId";
    readonly marks: "marks";
    readonly grade: "grade";
    readonly gpa: "gpa";
    readonly published: "published";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ResultScalarFieldEnum = (typeof ResultScalarFieldEnum)[keyof typeof ResultScalarFieldEnum];
export declare const FeeStructureScalarFieldEnum: {
    readonly id: "id";
    readonly classId: "classId";
    readonly title: "title";
    readonly amount: "amount";
    readonly dueDate: "dueDate";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FeeStructureScalarFieldEnum = (typeof FeeStructureScalarFieldEnum)[keyof typeof FeeStructureScalarFieldEnum];
export declare const FeePaymentScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly feeStructureId: "feeStructureId";
    readonly amount: "amount";
    readonly method: "method";
    readonly reference: "reference";
    readonly status: "status";
    readonly paidAt: "paidAt";
    readonly createdAt: "createdAt";
};
export type FeePaymentScalarFieldEnum = (typeof FeePaymentScalarFieldEnum)[keyof typeof FeePaymentScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
/**
 * Field references
 */
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'RoleType'
 */
export type EnumRoleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleType'>;
/**
 * Reference to a field of type 'RoleType[]'
 */
export type ListEnumRoleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleType[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'AttendanceStatus'
 */
export type EnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus'>;
/**
 * Reference to a field of type 'AttendanceStatus[]'
 */
export type ListEnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus[]'>;
/**
 * Reference to a field of type 'ExamStatus'
 */
export type EnumExamStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExamStatus'>;
/**
 * Reference to a field of type 'ExamStatus[]'
 */
export type ListEnumExamStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExamStatus[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Reference to a field of type 'PaymentStatus'
 */
export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>;
/**
 * Reference to a field of type 'PaymentStatus[]'
 */
export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
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
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
    /**
     * Optional maximum size for the query plan cache. If not provided, a default size will be used.
     * A value of `0` can be used to disable the cache entirely. A higher cache size can improve
     * performance for applications that execute a large number of unique queries, while a smaller
     * cache size can reduce memory usage.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   queryPlanCacheMaxSize: 100,
     * })
     * ```
     */
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    refreshToken?: Prisma.RefreshTokenOmit;
    passwordResetToken?: Prisma.PasswordResetTokenOmit;
    student?: Prisma.StudentOmit;
    teacher?: Prisma.TeacherOmit;
    parent?: Prisma.ParentOmit;
    class?: Prisma.ClassOmit;
    classStudent?: Prisma.ClassStudentOmit;
    classTeacher?: Prisma.ClassTeacherOmit;
    subject?: Prisma.SubjectOmit;
    subjectTeacher?: Prisma.SubjectTeacherOmit;
    attendance?: Prisma.AttendanceOmit;
    exam?: Prisma.ExamOmit;
    examSubject?: Prisma.ExamSubjectOmit;
    result?: Prisma.ResultOmit;
    feeStructure?: Prisma.FeeStructureOmit;
    feePayment?: Prisma.FeePaymentOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map