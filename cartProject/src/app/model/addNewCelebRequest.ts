/**
 * Fan API
 * Fan API
 *
 * OpenAPI spec version: v1.0
 * Contact: Dilip.Singh@market-Cube.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface AddNewCelebRequest { 
    userId?: number;
    handleName?: string;
    displayName?: string;
    profession?: string;
    tagLine?: string;
    message?: string;
    includeInSearch?: boolean;
    availableForBooking?: boolean;
    minResponseDays?: number;
    maxResponseDays?: number;
    booking_Price?: number;
    booking_Price_Currency?: string;
    categories?: Array<number>;
    tags?: Array<number>;
    facebook_Profile_Url?: string;
    twitter_Profile_Url?: string;
    instagram_Profile_Url?: string;
    youtube_Profile_Url?: string;
}
