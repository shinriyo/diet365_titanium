/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"avh8LVULIlv3RzCYIwb9FfJr5eiGxsLy"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"vOvmaX56OqqHIuDDI5sZ0LKK2c5zWpQI"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"1DbCzgK3VN6feQRTgPHFruyOwdLg87PI"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"2aEd4pFFZoW4KlCiruz1eQprvYe6DMUG"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"QRkXXcKewZ4aslDmTaHOwhH6Mdt1nrss"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"V2Z2SvFtGhBOC3xAUeoBKgQs5XdcOszO"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
