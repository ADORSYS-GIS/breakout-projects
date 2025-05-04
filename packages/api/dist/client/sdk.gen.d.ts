import type { Options } from '@hey-api/client-axios';
import type { UserDeleteData, UserDbTableRowListData, UserUpdateData, UserCreateData, UserReadData, UserCountData, UserNestedUnlinkData, UserNestedListData, UserNestedLinkData, UseravatarDeleteData, UseravatarDbTableRowListData, UseravatarUpdateData, UseravatarCreateData, UseravatarReadData, UseravatarCountData, UseravatarNestedUnlinkData, UseravatarNestedListData, UseravatarNestedLinkData, AccountDeleteData, AccountDbTableRowListData, AccountUpdateData, AccountCreateData, AccountReadData, AccountCountData, AccountNestedUnlinkData, AccountNestedListData, AccountNestedLinkData, UserroleDeleteData, UserroleDbTableRowListData, UserroleUpdateData, UserroleCreateData, UserroleReadData, UserroleCountData, UserroleNestedUnlinkData, UserroleNestedListData, UserroleNestedLinkData } from './types.gen';
/**
 * User delete
 * Delete a row by using the **primary key** column value.
 */
export declare const userDelete: <ThrowOnError extends boolean = false>(options?: Options<UserDeleteData, ThrowOnError>) => any;
/**
 * User list
 * List of all rows from User table and response data fields can be filtered based on query params.
 */
export declare const userDbTableRowList: <ThrowOnError extends boolean = false>(options?: Options<UserDbTableRowListData, ThrowOnError>) => any;
/**
 * User update
 * Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
 */
export declare const userUpdate: <ThrowOnError extends boolean = false>(options?: Options<UserUpdateData, ThrowOnError>) => any;
/**
 * User create
 * Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
 */
export declare const userCreate: <ThrowOnError extends boolean = false>(options?: Options<UserCreateData, ThrowOnError>) => any;
/**
 * User read
 * Read a row data by using the **primary key** column value.
 */
export declare const userRead: <ThrowOnError extends boolean = false>(options: Options<UserReadData, ThrowOnError>) => any;
/**
 * User count
 * Get rows count of a table by applying optional filters.
 */
export declare const userCount: <ThrowOnError extends boolean = false>(options?: Options<UserCountData, ThrowOnError>) => any;
/**
 * Unlink Records
 * This API endpoint allows you to unlink records from a specific `Link field` and `Record ID`. The request payload is an array of record-ids from the adjacent table for unlinking purposes. Note that,
 * - duplicated record-ids will be ignored.
 * - non-existent record-ids will be ignored.
 */
export declare const userNestedUnlink: <ThrowOnError extends boolean = false>(options: Options<UserNestedUnlinkData, ThrowOnError>) => any;
/**
 * Link Records list
 * This API endpoint allows you to retrieve list of linked records for a specific `Link field` and `Record ID`. The response is an array of objects containing Primary Key and its corresponding display value.
 */
export declare const userNestedList: <ThrowOnError extends boolean = false>(options: Options<UserNestedListData, ThrowOnError>) => any;
/**
 * Link Records
 * This API endpoint allows you to link records to a specific `Link field` and `Record ID`. The request payload is an array of record-ids from the adjacent table for linking purposes. Note that any existing links, if present, will be unaffected during this operation.
 */
export declare const userNestedLink: <ThrowOnError extends boolean = false>(options: Options<UserNestedLinkData, ThrowOnError>) => any;
/**
 * UserAvatar delete
 * Delete a row by using the **primary key** column value.
 */
export declare const useravatarDelete: <ThrowOnError extends boolean = false>(options?: Options<UseravatarDeleteData, ThrowOnError>) => any;
/**
 * UserAvatar list
 * List of all rows from UserAvatar table and response data fields can be filtered based on query params.
 */
export declare const useravatarDbTableRowList: <ThrowOnError extends boolean = false>(options?: Options<UseravatarDbTableRowListData, ThrowOnError>) => any;
/**
 * UserAvatar update
 * Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
 */
export declare const useravatarUpdate: <ThrowOnError extends boolean = false>(options?: Options<UseravatarUpdateData, ThrowOnError>) => any;
/**
 * UserAvatar create
 * Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
 */
export declare const useravatarCreate: <ThrowOnError extends boolean = false>(options?: Options<UseravatarCreateData, ThrowOnError>) => any;
/**
 * UserAvatar read
 * Read a row data by using the **primary key** column value.
 */
export declare const useravatarRead: <ThrowOnError extends boolean = false>(options: Options<UseravatarReadData, ThrowOnError>) => any;
/**
 * UserAvatar count
 * Get rows count of a table by applying optional filters.
 */
export declare const useravatarCount: <ThrowOnError extends boolean = false>(options?: Options<UseravatarCountData, ThrowOnError>) => any;
/**
 * Unlink Records
 * This API endpoint allows you to unlink records from a specific `Link field` and `Record ID`. The request payload is an array of record-ids from the adjacent table for unlinking purposes. Note that,
 * - duplicated record-ids will be ignored.
 * - non-existent record-ids will be ignored.
 */
export declare const useravatarNestedUnlink: <ThrowOnError extends boolean = false>(options: Options<UseravatarNestedUnlinkData, ThrowOnError>) => any;
/**
 * Link Records list
 * This API endpoint allows you to retrieve list of linked records for a specific `Link field` and `Record ID`. The response is an array of objects containing Primary Key and its corresponding display value.
 */
export declare const useravatarNestedList: <ThrowOnError extends boolean = false>(options: Options<UseravatarNestedListData, ThrowOnError>) => any;
/**
 * Link Records
 * This API endpoint allows you to link records to a specific `Link field` and `Record ID`. The request payload is an array of record-ids from the adjacent table for linking purposes. Note that any existing links, if present, will be unaffected during this operation.
 */
export declare const useravatarNestedLink: <ThrowOnError extends boolean = false>(options: Options<UseravatarNestedLinkData, ThrowOnError>) => any;
/**
 * Account delete
 * Delete a row by using the **primary key** column value.
 */
export declare const accountDelete: <ThrowOnError extends boolean = false>(options?: Options<AccountDeleteData, ThrowOnError>) => any;
/**
 * Account list
 * List of all rows from Account table and response data fields can be filtered based on query params.
 */
export declare const accountDbTableRowList: <ThrowOnError extends boolean = false>(options?: Options<AccountDbTableRowListData, ThrowOnError>) => any;
/**
 * Account update
 * Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
 */
export declare const accountUpdate: <ThrowOnError extends boolean = false>(options?: Options<AccountUpdateData, ThrowOnError>) => any;
/**
 * Account create
 * Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
 */
export declare const accountCreate: <ThrowOnError extends boolean = false>(options?: Options<AccountCreateData, ThrowOnError>) => any;
/**
 * Account read
 * Read a row data by using the **primary key** column value.
 */
export declare const accountRead: <ThrowOnError extends boolean = false>(options: Options<AccountReadData, ThrowOnError>) => any;
/**
 * Account count
 * Get rows count of a table by applying optional filters.
 */
export declare const accountCount: <ThrowOnError extends boolean = false>(options?: Options<AccountCountData, ThrowOnError>) => any;
/**
 * Unlink Records
 * This API endpoint allows you to unlink records from a specific `Link field` and `Record ID`. The request payload is an array of record-ids from the adjacent table for unlinking purposes. Note that,
 * - duplicated record-ids will be ignored.
 * - non-existent record-ids will be ignored.
 */
export declare const accountNestedUnlink: <ThrowOnError extends boolean = false>(options: Options<AccountNestedUnlinkData, ThrowOnError>) => any;
/**
 * Link Records list
 * This API endpoint allows you to retrieve list of linked records for a specific `Link field` and `Record ID`. The response is an array of objects containing Primary Key and its corresponding display value.
 */
export declare const accountNestedList: <ThrowOnError extends boolean = false>(options: Options<AccountNestedListData, ThrowOnError>) => any;
/**
 * Link Records
 * This API endpoint allows you to link records to a specific `Link field` and `Record ID`. The request payload is an array of record-ids from the adjacent table for linking purposes. Note that any existing links, if present, will be unaffected during this operation.
 */
export declare const accountNestedLink: <ThrowOnError extends boolean = false>(options: Options<AccountNestedLinkData, ThrowOnError>) => any;
/**
 * UserRole delete
 * Delete a row by using the **primary key** column value.
 */
export declare const userroleDelete: <ThrowOnError extends boolean = false>(options?: Options<UserroleDeleteData, ThrowOnError>) => any;
/**
 * UserRole list
 * List of all rows from UserRole table and response data fields can be filtered based on query params.
 */
export declare const userroleDbTableRowList: <ThrowOnError extends boolean = false>(options?: Options<UserroleDbTableRowListData, ThrowOnError>) => any;
/**
 * UserRole update
 * Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
 */
export declare const userroleUpdate: <ThrowOnError extends boolean = false>(options?: Options<UserroleUpdateData, ThrowOnError>) => any;
/**
 * UserRole create
 * Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
 */
export declare const userroleCreate: <ThrowOnError extends boolean = false>(options?: Options<UserroleCreateData, ThrowOnError>) => any;
/**
 * UserRole read
 * Read a row data by using the **primary key** column value.
 */
export declare const userroleRead: <ThrowOnError extends boolean = false>(options: Options<UserroleReadData, ThrowOnError>) => any;
/**
 * UserRole count
 * Get rows count of a table by applying optional filters.
 */
export declare const userroleCount: <ThrowOnError extends boolean = false>(options?: Options<UserroleCountData, ThrowOnError>) => any;
/**
 * Unlink Records
 * This API endpoint allows you to unlink records from a specific `Link field` and `Record ID`. The request payload is an array of record-ids from the adjacent table for unlinking purposes. Note that,
 * - duplicated record-ids will be ignored.
 * - non-existent record-ids will be ignored.
 */
export declare const userroleNestedUnlink: <ThrowOnError extends boolean = false>(options: Options<UserroleNestedUnlinkData, ThrowOnError>) => any;
/**
 * Link Records list
 * This API endpoint allows you to retrieve list of linked records for a specific `Link field` and `Record ID`. The response is an array of objects containing Primary Key and its corresponding display value.
 */
export declare const userroleNestedList: <ThrowOnError extends boolean = false>(options: Options<UserroleNestedListData, ThrowOnError>) => any;
/**
 * Link Records
 * This API endpoint allows you to link records to a specific `Link field` and `Record ID`. The request payload is an array of record-ids from the adjacent table for linking purposes. Note that any existing links, if present, will be unaffected during this operation.
 */
export declare const userroleNestedLink: <ThrowOnError extends boolean = false>(options: Options<UserroleNestedLinkData, ThrowOnError>) => any;
//# sourceMappingURL=sdk.gen.d.ts.map