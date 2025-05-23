export type Paginated = {
    pageSize?: number;
    totalRows?: number;
    isFirstPage?: boolean;
    isLastPage?: boolean;
    page?: number;
};
export type Attachment = {
    mimetype?: string;
    size?: number;
    title?: string;
    url?: string;
    icon?: string;
};
export type Groupby = {
    /**
     * count
     */
    count?: number;
    /**
     * the value of the given column
     */
    column_name?: string;
};
export type UserResponse = {
    Id?: number;
    FirstName?: string;
    LastName?: string;
    Email?: string;
    Avatar?: UserAvatarRequest;
    Accounts?: number;
    Role?: number;
};
export type UserRequest = {
    FirstName?: string;
    LastName?: string;
    Email?: string;
};
export type UserIdRequest = {
    Id?: number;
};
export type NcM2mUserUserRoleResponse = {
    UserRole_id?: number;
    User_id?: number;
};
export type NcM2mUserUserRoleRequest = {
    [key: string]: unknown;
};
export type NcM2mUserUserRoleIdRequest = {
    UserRole_id?: number;
    User_id?: number;
};
export type UserAvatarResponse = {
    Id?: number;
    Url?: string;
    Acounts_id?: number;
    Acounts?: UserRequest;
};
export type UserAvatarRequest = {
    Url?: string;
};
export type UserAvatarIdRequest = {
    Id?: number;
};
export type AccountResponse = {
    Id?: number;
    Title?: string;
    User_id?: number;
    User?: UserRequest;
    provider?: string;
    providerAccountId?: string;
};
export type AccountRequest = {
    Title?: string;
    provider?: string;
    providerAccountId?: string;
};
export type AccountIdRequest = {
    Id?: number;
};
export type UserRoleResponse = {
    Id?: number;
    Name?: string;
    Users?: number;
};
export type UserRoleRequest = {
    Name?: string;
};
export type UserRoleIdRequest = {
    Id?: number;
};
export type UserDeleteData = {
    body?: UserIdRequest | Array<UserIdRequest>;
    path?: never;
    query?: never;
    url: '/api/v2/tables/mq90d8odwj9en4c/records';
};
export type UserDeleteResponses = {
    /**
     * OK
     */
    200: unknown;
};
export type UserDbTableRowListData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Allows you to fetch records that are currently visible within a specific view.
         *
         * Views:
         * * vwiot3rio3vfs5o7 - Default view
         */
        viewId?: 'vwiot3rio3vfs5o7';
        /**
         * Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`.
         */
        fields?: string;
        /**
         * Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2`
         */
        sort?: string;
        /**
         * This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)`
         */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         */
        offset?: number;
        /**
         * This can be used for filtering rows in nested column `Avatar`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Avatar][where]=(field1,eq,value)`
         */
        'nested[Avatar][where]'?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Avatar` rows, the value helps to select collection from a certain index.
         */
        'nested[Avatar][offset]'?: number;
        /**
         * The `limit` parameter used for pagination of nested `Avatar` rows, the response collection size depends on limit value and default value is `25`.
         */
        'nested[Avatar][limit]'?: number;
        /**
         * Array of field names or comma separated filed names to include in the in nested column `Avatar` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Avatar][fields]=field1,field2`
         */
        'nested[Avatar][fields]'?: string;
        /**
         * Comma separated field names to sort rows in nested column `Avatar` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Avatar][sort]=field1,-field2`
         */
        'nested[Avatar][sort]'?: string;
    };
    url: '/api/v2/tables/mq90d8odwj9en4c/records';
};
export type UserDbTableRowListResponses = {
    /**
     * OK
     */
    200: {
        list?: Array<UserResponse>;
        PageInfo?: Paginated;
    };
};
export type UserDbTableRowListResponse = UserDbTableRowListResponses[keyof UserDbTableRowListResponses];
export type UserUpdateData = {
    body?: UserRequest | Array<UserRequest>;
    path?: never;
    query?: never;
    url: '/api/v2/tables/mq90d8odwj9en4c/records';
};
export type UserUpdateErrors = {
    /**
     * BadRequest
     */
    400: {
        msg: string;
    };
};
export type UserUpdateError = UserUpdateErrors[keyof UserUpdateErrors];
export type UserUpdateResponses = {
    /**
     * OK
     */
    200: unknown;
};
export type UserCreateData = {
    body?: UserRequest | Array<UserRequest>;
    path?: never;
    query?: never;
    url: '/api/v2/tables/mq90d8odwj9en4c/records';
};
export type UserCreateErrors = {
    /**
     * BadRequest
     */
    400: {
        msg: string;
    };
};
export type UserCreateError = UserCreateErrors[keyof UserCreateErrors];
export type UserCreateResponses = {
    /**
     * OK
     */
    200: UserResponse;
};
export type UserCreateResponse = UserCreateResponses[keyof UserCreateResponses];
export type UserReadData = {
    body?: never;
    path: {
        /**
         * Primary key of the record you want to read. If the table have composite primary key then combine them by using `___` and pass it as primary key.
         */
        recordId: string;
    };
    query?: {
        /**
         * Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`.
         */
        fields?: string;
    };
    url: '/api/v2/tables/mq90d8odwj9en4c/records/{recordId}';
};
export type UserReadResponses = {
    /**
     * Created
     */
    201: UserResponse;
};
export type UserReadResponse = UserReadResponses[keyof UserReadResponses];
export type UserCountData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Allows you to fetch records that are currently visible within a specific view.
         *
         * Views:
         * * vwiot3rio3vfs5o7 - Default view
         */
        viewId?: 'vwiot3rio3vfs5o7';
        /**
         * This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)`
         */
        where?: string;
    };
    url: '/api/v2/tables/mq90d8odwj9en4c/records/count';
};
export type UserCountErrors = {
    /**
     * BadRequest
     */
    400: {
        msg: string;
    };
};
export type UserCountError = UserCountErrors[keyof UserCountErrors];
export type UserCountResponses = {
    /**
     * OK
     */
    200: {
        count?: number;
    };
};
export type UserCountResponse = UserCountResponses[keyof UserCountResponses];
export type UserNestedUnlinkData = {
    body?: Array<{
        [key: string]: unknown;
    }>;
    path: {
        /**
         * **Links Field Identifier** corresponding to the relation field `Links` established between tables.
         *
         * Link Columns:
         * * c6f09lisz4n73fi - Avatar
         * * cqoi87y1492iqrt - Accounts
         * * c0yaqsct3hfvtd3 - Role
         */
        linkFieldId: 'c6f09lisz4n73fi' | 'cqoi87y1492iqrt' | 'c0yaqsct3hfvtd3';
        /**
         * Primary key of the record you want to read. If the table have composite primary key then combine them by using `___` and pass it as primary key.
         */
        recordId: string;
    };
    query?: never;
    url: '/api/v2/tables/mq90d8odwj9en4c/links/{linkFieldId}/records/{recordId}';
};
export type UserNestedUnlinkErrors = {
    /**
     * BadRequest
     */
    400: {
        msg: string;
    };
};
export type UserNestedUnlinkError = UserNestedUnlinkErrors[keyof UserNestedUnlinkErrors];
export type UserNestedUnlinkResponses = {
    /**
     * OK
     */
    200: unknown;
};
export type UserNestedListData = {
    body?: never;
    path: {
        /**
         * **Links Field Identifier** corresponding to the relation field `Links` established between tables.
         *
         * Link Columns:
         * * c6f09lisz4n73fi - Avatar
         * * cqoi87y1492iqrt - Accounts
         * * c0yaqsct3hfvtd3 - Role
         */
        linkFieldId: 'c6f09lisz4n73fi' | 'cqoi87y1492iqrt' | 'c0yaqsct3hfvtd3';
        /**
         * Primary key of the record you want to read. If the table have composite primary key then combine them by using `___` and pass it as primary key.
         */
        recordId: string;
    };
    query?: {
        /**
         * Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`.
         */
        fields?: string;
        /**
         * Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2`
         */
        sort?: string;
        /**
         * This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)`
         */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         */
        offset?: number;
    };
    url: '/api/v2/tables/mq90d8odwj9en4c/links/{linkFieldId}/records/{recordId}';
};
export type UserNestedListErrors = {
    /**
     * BadRequest
     */
    400: {
        msg: string;
    };
};
export type UserNestedListError = UserNestedListErrors[keyof UserNestedListErrors];
export type UserNestedListResponses = {
    /**
     * OK
     */
    200: {
        /**
         * List of data objects
         */
        list: Array<{
            [key: string]: unknown;
        }>;
        pageInfo: Paginated;
    };
};
export type UserNestedListResponse = UserNestedListResponses[keyof UserNestedListResponses];
export type UserNestedLinkData = {
    body?: {
        [key: string]: unknown;
    } | Array<{
        [key: string]: unknown;
    }>;
    path: {
        /**
         * **Links Field Identifier** corresponding to the relation field `Links` established between tables.
         *
         * Link Columns:
         * * c6f09lisz4n73fi - Avatar
         * * cqoi87y1492iqrt - Accounts
         * * c0yaqsct3hfvtd3 - Role
         */
        linkFieldId: 'c6f09lisz4n73fi' | 'cqoi87y1492iqrt' | 'c0yaqsct3hfvtd3';
        /**
         * Primary key of the record you want to read. If the table have composite primary key then combine them by using `___` and pass it as primary key.
         */
        recordId: string;
    };
    query?: never;
    url: '/api/v2/tables/mq90d8odwj9en4c/links/{linkFieldId}/records/{recordId}';
};
export type UserNestedLinkErrors = {
    /**
     * BadRequest
     */
    400: {
        msg: string;
    };
};
export type UserNestedLinkError = UserNestedLinkErrors[keyof UserNestedLinkErrors];
export type UserNestedLinkResponses = {
    /**
     * OK
     */
    200: unknown;
};
export type UseravatarDeleteData = {
    body?: UserAvatarIdRequest | Array<UserAvatarIdRequest>;
    path?: never;
    query?: never;
    url: '/api/v2/tables/mk3wnta3zio319q/records';
};
export type UseravatarDeleteResponses = {
    /**
     * OK
     */
    200: unknown;
};
export type UseravatarDbTableRowListData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Allows you to fetch records that are currently visible within a specific view.
         *
         * Views:
         * * vwqm21vvg20f0ckt - Default view
         */
        viewId?: 'vwqm21vvg20f0ckt';
        /**
         * Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`.
         */
        fields?: string;
        /**
         * Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2`
         */
        sort?: string;
        /**
         * This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)`
         */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         */
        offset?: number;
        /**
         * This can be used for filtering rows in nested column `Acounts`, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `nested[Acounts][where]=(field1,eq,value)`
         */
        'nested[Acounts][where]'?: string;
        /**
         * The `offset` parameter used for pagination  of nested `Acounts` rows, the value helps to select collection from a certain index.
         */
        'nested[Acounts][offset]'?: number;
        /**
         * The `limit` parameter used for pagination of nested `Acounts` rows, the response collection size depends on limit value and default value is `25`.
         */
        'nested[Acounts][limit]'?: number;
        /**
         * Array of field names or comma separated filed names to include in the in nested column `Acounts` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Acounts][fields]=field1,field2`
         */
        'nested[Acounts][fields]'?: string;
        /**
         * Comma separated field names to sort rows in nested column `Acounts` rows, it will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `nested[Acounts][sort]=field1,-field2`
         */
        'nested[Acounts][sort]'?: string;
    };
    url: '/api/v2/tables/mk3wnta3zio319q/records';
};
export type UseravatarDbTableRowListResponses = {
    /**
     * OK
     */
    200: {
        list?: Array<UserAvatarResponse>;
        PageInfo?: Paginated;
    };
};
export type UseravatarDbTableRowListResponse = UseravatarDbTableRowListResponses[keyof UseravatarDbTableRowListResponses];
export type UseravatarUpdateData = {
    body?: UserAvatarRequest | Array<UserAvatarRequest>;
    path?: never;
    query?: never;
    url: '/api/v2/tables/mk3wnta3zio319q/records';
};
export type UseravatarUpdateErrors = {
    /**
     * BadRequest
     */
    400: {
        msg: string;
    };
};
export type UseravatarUpdateError = UseravatarUpdateErrors[keyof UseravatarUpdateErrors];
export type UseravatarUpdateResponses = {
    /**
     * OK
     */
    200: unknown;
};
export type UseravatarCreateData = {
    body?: UserAvatarRequest | Array<UserAvatarRequest>;
    path?: never;
    query?: never;
    url: '/api/v2/tables/mk3wnta3zio319q/records';
};
export type UseravatarCreateErrors = {
    /**
     * BadRequest
     */
    400: {
        msg: string;
    };
};
export type UseravatarCreateError = UseravatarCreateErrors[keyof UseravatarCreateErrors];
export type UseravatarCreateResponses = {
    /**
     * OK
     */
    200: UserAvatarResponse;
};
export type UseravatarCreateResponse = UseravatarCreateResponses[keyof UseravatarCreateResponses];
export type UseravatarReadData = {
    body?: never;
    path: {
        /**
         * Primary key of the record you want to read. If the table have composite primary key then combine them by using `___` and pass it as primary key.
         */
        recordId: string;
    };
    query?: {
        /**
         * Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`.
         */
        fields?: string;
    };
    url: '/api/v2/tables/mk3wnta3zio319q/records/{recordId}';
};
export type UseravatarReadResponses = {
    /**
     * Created
     */
    201: UserAvatarResponse;
};
export type UseravatarReadResponse = UseravatarReadResponses[keyof UseravatarReadResponses];
export type UseravatarCountData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Allows you to fetch records that are currently visible within a specific view.
         *
         * Views:
         * * vwqm21vvg20f0ckt - Default view
         */
        viewId?: 'vwqm21vvg20f0ckt';
        /**
         * This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)`
         */
        where?: string;
    };
    url: '/api/v2/tables/mk3wnta3zio319q/records/count';
};
export type UseravatarCountErrors = {
    /**
     * BadRequest
     */
    400: {
        msg: string;
    };
};
export type UseravatarCountError = UseravatarCountErrors[keyof UseravatarCountErrors];
export type UseravatarCountResponses = {
    /**
     * OK
     */
    200: {
        count?: number;
    };
};
export type UseravatarCountResponse = UseravatarCountResponses[keyof UseravatarCountResponses];
export type UseravatarNestedUnlinkData = {
    body?: Array<{
        [key: string]: unknown;
    }>;
    path: {
        /**
         * **Links Field Identifier** corresponding to the relation field `Links` established between tables.
         *
         * Link Columns:
         * * cyd9tqrp3e11rlx - Acounts
         */
        linkFieldId: 'cyd9tqrp3e11rlx';
        /**
         * Primary key of the record you want to read. If the table have composite primary key then combine them by using `___` and pass it as primary key.
         */
        recordId: string;
    };
    query?: never;
    url: '/api/v2/tables/mk3wnta3zio319q/links/{linkFieldId}/records/{recordId}';
};
export type UseravatarNestedUnlinkErrors = {
    /**
     * BadRequest
     */
    400: {
        msg: string;
    };
};
export type UseravatarNestedUnlinkError = UseravatarNestedUnlinkErrors[keyof UseravatarNestedUnlinkErrors];
export type UseravatarNestedUnlinkResponses = {
    /**
     * OK
     */
    200: unknown;
};
export type UseravatarNestedListData = {
    body?: never;
    path: {
        /**
         * **Links Field Identifier** corresponding to the relation field `Links` established between tables.
         *
         * Link Columns:
         * * cyd9tqrp3e11rlx - Acounts
         */
        linkFieldId: 'cyd9tqrp3e11rlx';
        /**
         * Primary key of the record you want to read. If the table have composite primary key then combine them by using `___` and pass it as primary key.
         */
        recordId: string;
    };
    query?: {
        /**
         * Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`.
         */
        fields?: string;
        /**
         * Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2`
         */
        sort?: string;
        /**
         * This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)`
         */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         */
        offset?: number;
    };
    url: '/api/v2/tables/mk3wnta3zio319q/links/{linkFieldId}/records/{recordId}';
};
export type UseravatarNestedListErrors = {
    /**
     * BadRequest
     */
    400: {
        msg: string;
    };
};
export type UseravatarNestedListError = UseravatarNestedListErrors[keyof UseravatarNestedListErrors];
export type UseravatarNestedListResponses = {
    /**
     * OK
     */
    200: {
        /**
         * List of data objects
         */
        list: Array<{
            [key: string]: unknown;
        }>;
        pageInfo: Paginated;
    };
};
export type UseravatarNestedListResponse = UseravatarNestedListResponses[keyof UseravatarNestedListResponses];
export type UseravatarNestedLinkData = {
    body?: {
        [key: string]: unknown;
    } | Array<{
        [key: string]: unknown;
    }>;
    path: {
        /**
         * **Links Field Identifier** corresponding to the relation field `Links` established between tables.
         *
         * Link Columns:
         * * cyd9tqrp3e11rlx - Acounts
         */
        linkFieldId: 'cyd9tqrp3e11rlx';
        /**
         * Primary key of the record you want to read. If the table have composite primary key then combine them by using `___` and pass it as primary key.
         */
        recordId: string;
    };
    query?: never;
    url: '/api/v2/tables/mk3wnta3zio319q/links/{linkFieldId}/records/{recordId}';
};
export type UseravatarNestedLinkErrors = {
    /**
     * BadRequest
     */
    400: {
        msg: string;
    };
};
export type UseravatarNestedLinkError = UseravatarNestedLinkErrors[keyof UseravatarNestedLinkErrors];
export type UseravatarNestedLinkResponses = {
    /**
     * OK
     */
    200: unknown;
};
export type AccountDeleteData = {
    body?: AccountIdRequest | Array<AccountIdRequest>;
    path?: never;
    query?: never;
    url: '/api/v2/tables/m25l4qwolx06l7t/records';
};
export type AccountDeleteResponses = {
    /**
     * OK
     */
    200: unknown;
};
export type AccountDbTableRowListData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Allows you to fetch records that are currently visible within a specific view.
         *
         * Views:
         * * vwrmwcjo21rn99wl - Default view
         */
        viewId?: 'vwrmwcjo21rn99wl';
        /**
         * Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`.
         */
        fields?: string;
        /**
         * Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2`
         */
        sort?: string;
        /**
         * This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)`
         */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         */
        offset?: number;
        /**
         * Array of field names or comma separated filed names to include in the in nested column `User` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[User][fields]=field1,field2`
         */
        'nested[User][fields]'?: string;
    };
    url: '/api/v2/tables/m25l4qwolx06l7t/records';
};
export type AccountDbTableRowListResponses = {
    /**
     * OK
     */
    200: {
        list?: Array<AccountResponse>;
        PageInfo?: Paginated;
    };
};
export type AccountDbTableRowListResponse = AccountDbTableRowListResponses[keyof AccountDbTableRowListResponses];
export type AccountUpdateData = {
    body?: AccountRequest | Array<AccountRequest>;
    path?: never;
    query?: never;
    url: '/api/v2/tables/m25l4qwolx06l7t/records';
};
export type AccountUpdateErrors = {
    /**
     * BadRequest
     */
    400: {
        msg: string;
    };
};
export type AccountUpdateError = AccountUpdateErrors[keyof AccountUpdateErrors];
export type AccountUpdateResponses = {
    /**
     * OK
     */
    200: unknown;
};
export type AccountCreateData = {
    body?: AccountRequest | Array<AccountRequest>;
    path?: never;
    query?: never;
    url: '/api/v2/tables/m25l4qwolx06l7t/records';
};
export type AccountCreateErrors = {
    /**
     * BadRequest
     */
    400: {
        msg: string;
    };
};
export type AccountCreateError = AccountCreateErrors[keyof AccountCreateErrors];
export type AccountCreateResponses = {
    /**
     * OK
     */
    200: AccountResponse;
};
export type AccountCreateResponse = AccountCreateResponses[keyof AccountCreateResponses];
export type AccountReadData = {
    body?: never;
    path: {
        /**
         * Primary key of the record you want to read. If the table have composite primary key then combine them by using `___` and pass it as primary key.
         */
        recordId: string;
    };
    query?: {
        /**
         * Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`.
         */
        fields?: string;
    };
    url: '/api/v2/tables/m25l4qwolx06l7t/records/{recordId}';
};
export type AccountReadResponses = {
    /**
     * Created
     */
    201: AccountResponse;
};
export type AccountReadResponse = AccountReadResponses[keyof AccountReadResponses];
export type AccountCountData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Allows you to fetch records that are currently visible within a specific view.
         *
         * Views:
         * * vwrmwcjo21rn99wl - Default view
         */
        viewId?: 'vwrmwcjo21rn99wl';
        /**
         * This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)`
         */
        where?: string;
    };
    url: '/api/v2/tables/m25l4qwolx06l7t/records/count';
};
export type AccountCountErrors = {
    /**
     * BadRequest
     */
    400: {
        msg: string;
    };
};
export type AccountCountError = AccountCountErrors[keyof AccountCountErrors];
export type AccountCountResponses = {
    /**
     * OK
     */
    200: {
        count?: number;
    };
};
export type AccountCountResponse = AccountCountResponses[keyof AccountCountResponses];
export type AccountNestedUnlinkData = {
    body?: Array<{
        [key: string]: unknown;
    }>;
    path: {
        /**
         * **Links Field Identifier** corresponding to the relation field `Links` established between tables.
         *
         * Link Columns:
         * * c2iv479k4raq0hz - User
         */
        linkFieldId: 'c2iv479k4raq0hz';
        /**
         * Primary key of the record you want to read. If the table have composite primary key then combine them by using `___` and pass it as primary key.
         */
        recordId: string;
    };
    query?: never;
    url: '/api/v2/tables/m25l4qwolx06l7t/links/{linkFieldId}/records/{recordId}';
};
export type AccountNestedUnlinkErrors = {
    /**
     * BadRequest
     */
    400: {
        msg: string;
    };
};
export type AccountNestedUnlinkError = AccountNestedUnlinkErrors[keyof AccountNestedUnlinkErrors];
export type AccountNestedUnlinkResponses = {
    /**
     * OK
     */
    200: unknown;
};
export type AccountNestedListData = {
    body?: never;
    path: {
        /**
         * **Links Field Identifier** corresponding to the relation field `Links` established between tables.
         *
         * Link Columns:
         * * c2iv479k4raq0hz - User
         */
        linkFieldId: 'c2iv479k4raq0hz';
        /**
         * Primary key of the record you want to read. If the table have composite primary key then combine them by using `___` and pass it as primary key.
         */
        recordId: string;
    };
    query?: {
        /**
         * Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`.
         */
        fields?: string;
        /**
         * Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2`
         */
        sort?: string;
        /**
         * This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)`
         */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         */
        offset?: number;
    };
    url: '/api/v2/tables/m25l4qwolx06l7t/links/{linkFieldId}/records/{recordId}';
};
export type AccountNestedListErrors = {
    /**
     * BadRequest
     */
    400: {
        msg: string;
    };
};
export type AccountNestedListError = AccountNestedListErrors[keyof AccountNestedListErrors];
export type AccountNestedListResponses = {
    /**
     * OK
     */
    200: {
        /**
         * List of data objects
         */
        list: Array<{
            [key: string]: unknown;
        }>;
        pageInfo: Paginated;
    };
};
export type AccountNestedListResponse = AccountNestedListResponses[keyof AccountNestedListResponses];
export type AccountNestedLinkData = {
    body?: {
        [key: string]: unknown;
    } | Array<{
        [key: string]: unknown;
    }>;
    path: {
        /**
         * **Links Field Identifier** corresponding to the relation field `Links` established between tables.
         *
         * Link Columns:
         * * c2iv479k4raq0hz - User
         */
        linkFieldId: 'c2iv479k4raq0hz';
        /**
         * Primary key of the record you want to read. If the table have composite primary key then combine them by using `___` and pass it as primary key.
         */
        recordId: string;
    };
    query?: never;
    url: '/api/v2/tables/m25l4qwolx06l7t/links/{linkFieldId}/records/{recordId}';
};
export type AccountNestedLinkErrors = {
    /**
     * BadRequest
     */
    400: {
        msg: string;
    };
};
export type AccountNestedLinkError = AccountNestedLinkErrors[keyof AccountNestedLinkErrors];
export type AccountNestedLinkResponses = {
    /**
     * OK
     */
    200: unknown;
};
export type UserroleDeleteData = {
    body?: UserRoleIdRequest | Array<UserRoleIdRequest>;
    path?: never;
    query?: never;
    url: '/api/v2/tables/m39gw1ga3s65q1e/records';
};
export type UserroleDeleteResponses = {
    /**
     * OK
     */
    200: unknown;
};
export type UserroleDbTableRowListData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Allows you to fetch records that are currently visible within a specific view.
         *
         * Views:
         * * vwqzosct9f9ls7wk - Default view
         */
        viewId?: 'vwqzosct9f9ls7wk';
        /**
         * Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`.
         */
        fields?: string;
        /**
         * Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2`
         */
        sort?: string;
        /**
         * This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)`
         */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         */
        limit?: number;
        /**
         * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
         */
        shuffle?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         */
        offset?: number;
    };
    url: '/api/v2/tables/m39gw1ga3s65q1e/records';
};
export type UserroleDbTableRowListResponses = {
    /**
     * OK
     */
    200: {
        list?: Array<UserRoleResponse>;
        PageInfo?: Paginated;
    };
};
export type UserroleDbTableRowListResponse = UserroleDbTableRowListResponses[keyof UserroleDbTableRowListResponses];
export type UserroleUpdateData = {
    body?: UserRoleRequest | Array<UserRoleRequest>;
    path?: never;
    query?: never;
    url: '/api/v2/tables/m39gw1ga3s65q1e/records';
};
export type UserroleUpdateErrors = {
    /**
     * BadRequest
     */
    400: {
        msg: string;
    };
};
export type UserroleUpdateError = UserroleUpdateErrors[keyof UserroleUpdateErrors];
export type UserroleUpdateResponses = {
    /**
     * OK
     */
    200: unknown;
};
export type UserroleCreateData = {
    body?: UserRoleRequest | Array<UserRoleRequest>;
    path?: never;
    query?: never;
    url: '/api/v2/tables/m39gw1ga3s65q1e/records';
};
export type UserroleCreateErrors = {
    /**
     * BadRequest
     */
    400: {
        msg: string;
    };
};
export type UserroleCreateError = UserroleCreateErrors[keyof UserroleCreateErrors];
export type UserroleCreateResponses = {
    /**
     * OK
     */
    200: UserRoleResponse;
};
export type UserroleCreateResponse = UserroleCreateResponses[keyof UserroleCreateResponses];
export type UserroleReadData = {
    body?: never;
    path: {
        /**
         * Primary key of the record you want to read. If the table have composite primary key then combine them by using `___` and pass it as primary key.
         */
        recordId: string;
    };
    query?: {
        /**
         * Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`.
         */
        fields?: string;
    };
    url: '/api/v2/tables/m39gw1ga3s65q1e/records/{recordId}';
};
export type UserroleReadResponses = {
    /**
     * Created
     */
    201: UserRoleResponse;
};
export type UserroleReadResponse = UserroleReadResponses[keyof UserroleReadResponses];
export type UserroleCountData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Allows you to fetch records that are currently visible within a specific view.
         *
         * Views:
         * * vwqzosct9f9ls7wk - Default view
         */
        viewId?: 'vwqzosct9f9ls7wk';
        /**
         * This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)`
         */
        where?: string;
    };
    url: '/api/v2/tables/m39gw1ga3s65q1e/records/count';
};
export type UserroleCountErrors = {
    /**
     * BadRequest
     */
    400: {
        msg: string;
    };
};
export type UserroleCountError = UserroleCountErrors[keyof UserroleCountErrors];
export type UserroleCountResponses = {
    /**
     * OK
     */
    200: {
        count?: number;
    };
};
export type UserroleCountResponse = UserroleCountResponses[keyof UserroleCountResponses];
export type UserroleNestedUnlinkData = {
    body?: Array<{
        [key: string]: unknown;
    }>;
    path: {
        /**
         * **Links Field Identifier** corresponding to the relation field `Links` established between tables.
         *
         * Link Columns:
         * * cgtq9jq9hmg63k6 - Users
         */
        linkFieldId: 'cgtq9jq9hmg63k6';
        /**
         * Primary key of the record you want to read. If the table have composite primary key then combine them by using `___` and pass it as primary key.
         */
        recordId: string;
    };
    query?: never;
    url: '/api/v2/tables/m39gw1ga3s65q1e/links/{linkFieldId}/records/{recordId}';
};
export type UserroleNestedUnlinkErrors = {
    /**
     * BadRequest
     */
    400: {
        msg: string;
    };
};
export type UserroleNestedUnlinkError = UserroleNestedUnlinkErrors[keyof UserroleNestedUnlinkErrors];
export type UserroleNestedUnlinkResponses = {
    /**
     * OK
     */
    200: unknown;
};
export type UserroleNestedListData = {
    body?: never;
    path: {
        /**
         * **Links Field Identifier** corresponding to the relation field `Links` established between tables.
         *
         * Link Columns:
         * * cgtq9jq9hmg63k6 - Users
         */
        linkFieldId: 'cgtq9jq9hmg63k6';
        /**
         * Primary key of the record you want to read. If the table have composite primary key then combine them by using `___` and pass it as primary key.
         */
        recordId: string;
    };
    query?: {
        /**
         * Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`.
         */
        fields?: string;
        /**
         * Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2`
         */
        sort?: string;
        /**
         * This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)`
         */
        where?: string;
        /**
         * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
         */
        limit?: number;
        /**
         * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
         */
        offset?: number;
    };
    url: '/api/v2/tables/m39gw1ga3s65q1e/links/{linkFieldId}/records/{recordId}';
};
export type UserroleNestedListErrors = {
    /**
     * BadRequest
     */
    400: {
        msg: string;
    };
};
export type UserroleNestedListError = UserroleNestedListErrors[keyof UserroleNestedListErrors];
export type UserroleNestedListResponses = {
    /**
     * OK
     */
    200: {
        /**
         * List of data objects
         */
        list: Array<{
            [key: string]: unknown;
        }>;
        pageInfo: Paginated;
    };
};
export type UserroleNestedListResponse = UserroleNestedListResponses[keyof UserroleNestedListResponses];
export type UserroleNestedLinkData = {
    body?: {
        [key: string]: unknown;
    } | Array<{
        [key: string]: unknown;
    }>;
    path: {
        /**
         * **Links Field Identifier** corresponding to the relation field `Links` established between tables.
         *
         * Link Columns:
         * * cgtq9jq9hmg63k6 - Users
         */
        linkFieldId: 'cgtq9jq9hmg63k6';
        /**
         * Primary key of the record you want to read. If the table have composite primary key then combine them by using `___` and pass it as primary key.
         */
        recordId: string;
    };
    query?: never;
    url: '/api/v2/tables/m39gw1ga3s65q1e/links/{linkFieldId}/records/{recordId}';
};
export type UserroleNestedLinkErrors = {
    /**
     * BadRequest
     */
    400: {
        msg: string;
    };
};
export type UserroleNestedLinkError = UserroleNestedLinkErrors[keyof UserroleNestedLinkErrors];
export type UserroleNestedLinkResponses = {
    /**
     * OK
     */
    200: unknown;
};
//# sourceMappingURL=types.gen.d.ts.map