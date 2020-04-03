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
import { ErrorDetails } from './errorDetails';


export interface RemoveCelebTagResponse { 
    traceIdentifier?: string;
    readonly success?: boolean;
    readonly hasError?: boolean;
    messages?: Array<string>;
    errors?: Array<ErrorDetails>;
}
