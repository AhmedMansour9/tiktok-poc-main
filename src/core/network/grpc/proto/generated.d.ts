import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace Common. */
export namespace Common {

    /** Namespace V1. */
    namespace V1 {

        /**
         * Properties of a KeyValuePair.
         * @deprecated Use Common.V1.KeyValuePair.$Properties instead.
         */
        interface IKeyValuePair extends Common.V1.KeyValuePair.$Properties {
        }

        /** Represents a KeyValuePair. */
        class KeyValuePair {

            /**
             * Constructs a new KeyValuePair.
             * @param [properties] Properties to set
             */
            constructor(properties?: Common.V1.KeyValuePair.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** KeyValuePair key. */
            key: string;

            /** KeyValuePair value. */
            value: string;

            /**
             * Creates a new KeyValuePair instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KeyValuePair instance
             */
            static create(properties: Common.V1.KeyValuePair.$Shape): Common.V1.KeyValuePair & Common.V1.KeyValuePair.$Shape;
            static create(properties?: Common.V1.KeyValuePair.$Properties): Common.V1.KeyValuePair;

            /**
             * Encodes the specified KeyValuePair message. Does not implicitly {@link Common.V1.KeyValuePair.verify|verify} messages.
             * @param message KeyValuePair message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: Common.V1.KeyValuePair.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KeyValuePair message, length delimited. Does not implicitly {@link Common.V1.KeyValuePair.verify|verify} messages.
             * @param message KeyValuePair message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: Common.V1.KeyValuePair.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KeyValuePair message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {Common.V1.KeyValuePair & Common.V1.KeyValuePair.$Shape} KeyValuePair
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Common.V1.KeyValuePair & Common.V1.KeyValuePair.$Shape;

            /**
             * Decodes a KeyValuePair message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {Common.V1.KeyValuePair & Common.V1.KeyValuePair.$Shape} KeyValuePair
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Common.V1.KeyValuePair & Common.V1.KeyValuePair.$Shape;

            /**
             * Verifies a KeyValuePair message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KeyValuePair message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KeyValuePair
             */
            static fromObject(object: { [k: string]: any }): Common.V1.KeyValuePair;

            /**
             * Creates a plain object from a KeyValuePair message. Also converts values to other types if specified.
             * @param message KeyValuePair
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: Common.V1.KeyValuePair, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KeyValuePair to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for KeyValuePair
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace KeyValuePair {

            /** Properties of a KeyValuePair. */
            interface $Properties {

                /** KeyValuePair key */
                key?: (string|null);

                /** KeyValuePair value */
                value?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a KeyValuePair. */
            type $Shape = Common.V1.KeyValuePair.$Properties;
        }

        /**
         * Properties of a ResourceId.
         * @deprecated Use Common.V1.ResourceId.$Properties instead.
         */
        interface IResourceId extends Common.V1.ResourceId.$Properties {
        }

        /** Represents a ResourceId. */
        class ResourceId {

            /**
             * Constructs a new ResourceId.
             * @param [properties] Properties to set
             */
            constructor(properties?: Common.V1.ResourceId.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ResourceId resourceType. */
            resourceType: string;

            /** ResourceId namespace. */
            namespace: string;

            /** ResourceId name. */
            name: string;

            /**
             * Creates a new ResourceId instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceId instance
             */
            static create(properties: Common.V1.ResourceId.$Shape): Common.V1.ResourceId & Common.V1.ResourceId.$Shape;
            static create(properties?: Common.V1.ResourceId.$Properties): Common.V1.ResourceId;

            /**
             * Encodes the specified ResourceId message. Does not implicitly {@link Common.V1.ResourceId.verify|verify} messages.
             * @param message ResourceId message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: Common.V1.ResourceId.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceId message, length delimited. Does not implicitly {@link Common.V1.ResourceId.verify|verify} messages.
             * @param message ResourceId message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: Common.V1.ResourceId.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceId message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {Common.V1.ResourceId & Common.V1.ResourceId.$Shape} ResourceId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Common.V1.ResourceId & Common.V1.ResourceId.$Shape;

            /**
             * Decodes a ResourceId message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {Common.V1.ResourceId & Common.V1.ResourceId.$Shape} ResourceId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Common.V1.ResourceId & Common.V1.ResourceId.$Shape;

            /**
             * Verifies a ResourceId message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceId message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceId
             */
            static fromObject(object: { [k: string]: any }): Common.V1.ResourceId;

            /**
             * Creates a plain object from a ResourceId message. Also converts values to other types if specified.
             * @param message ResourceId
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: Common.V1.ResourceId, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceId to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ResourceId
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ResourceId {

            /** Properties of a ResourceId. */
            interface $Properties {

                /** ResourceId resourceType */
                resourceType?: (string|null);

                /** ResourceId namespace */
                namespace?: (string|null);

                /** ResourceId name */
                name?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ResourceId. */
            type $Shape = Common.V1.ResourceId.$Properties;
        }

        /**
         * Properties of a ResourceToken.
         * @deprecated Use Common.V1.ResourceToken.$Properties instead.
         */
        interface IResourceToken extends Common.V1.ResourceToken.$Properties {
        }

        /** Represents a ResourceToken. */
        class ResourceToken {

            /**
             * Constructs a new ResourceToken.
             * @param [properties] Properties to set
             */
            constructor(properties?: Common.V1.ResourceToken.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ResourceToken resourceId. */
            resourceId?: (Common.V1.ResourceId.$Properties|null);

            /** ResourceToken sas. */
            sas: string;

            /**
             * Creates a new ResourceToken instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceToken instance
             */
            static create(properties: Common.V1.ResourceToken.$Shape): Common.V1.ResourceToken & Common.V1.ResourceToken.$Shape;
            static create(properties?: Common.V1.ResourceToken.$Properties): Common.V1.ResourceToken;

            /**
             * Encodes the specified ResourceToken message. Does not implicitly {@link Common.V1.ResourceToken.verify|verify} messages.
             * @param message ResourceToken message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: Common.V1.ResourceToken.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceToken message, length delimited. Does not implicitly {@link Common.V1.ResourceToken.verify|verify} messages.
             * @param message ResourceToken message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: Common.V1.ResourceToken.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceToken message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {Common.V1.ResourceToken & Common.V1.ResourceToken.$Shape} ResourceToken
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Common.V1.ResourceToken & Common.V1.ResourceToken.$Shape;

            /**
             * Decodes a ResourceToken message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {Common.V1.ResourceToken & Common.V1.ResourceToken.$Shape} ResourceToken
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Common.V1.ResourceToken & Common.V1.ResourceToken.$Shape;

            /**
             * Verifies a ResourceToken message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceToken message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceToken
             */
            static fromObject(object: { [k: string]: any }): Common.V1.ResourceToken;

            /**
             * Creates a plain object from a ResourceToken message. Also converts values to other types if specified.
             * @param message ResourceToken
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: Common.V1.ResourceToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceToken to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ResourceToken
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ResourceToken {

            /** Properties of a ResourceToken. */
            interface $Properties {

                /** ResourceToken resourceId */
                resourceId?: (Common.V1.ResourceId.$Properties|null);

                /** ResourceToken sas */
                sas?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ResourceToken. */
            type $Shape = Common.V1.ResourceToken.$Properties;
        }
    }
}

/** Namespace Example. */
export namespace Example {

    /** Namespace V1. */
    namespace V1 {

        /**
         * Properties of a PingRequest.
         * @deprecated Use Example.V1.PingRequest.$Properties instead.
         */
        interface IPingRequest extends Example.V1.PingRequest.$Properties {
        }

        /** Represents a PingRequest. */
        class PingRequest {

            /**
             * Constructs a new PingRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Example.V1.PingRequest.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** PingRequest message. */
            message: string;

            /** PingRequest metadata. */
            metadata: Common.V1.KeyValuePair.$Properties[];

            /**
             * Creates a new PingRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PingRequest instance
             */
            static create(properties: Example.V1.PingRequest.$Shape): Example.V1.PingRequest & Example.V1.PingRequest.$Shape;
            static create(properties?: Example.V1.PingRequest.$Properties): Example.V1.PingRequest;

            /**
             * Encodes the specified PingRequest message. Does not implicitly {@link Example.V1.PingRequest.verify|verify} messages.
             * @param message PingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: Example.V1.PingRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PingRequest message, length delimited. Does not implicitly {@link Example.V1.PingRequest.verify|verify} messages.
             * @param message PingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: Example.V1.PingRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PingRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {Example.V1.PingRequest & Example.V1.PingRequest.$Shape} PingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Example.V1.PingRequest & Example.V1.PingRequest.$Shape;

            /**
             * Decodes a PingRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {Example.V1.PingRequest & Example.V1.PingRequest.$Shape} PingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Example.V1.PingRequest & Example.V1.PingRequest.$Shape;

            /**
             * Verifies a PingRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PingRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PingRequest
             */
            static fromObject(object: { [k: string]: any }): Example.V1.PingRequest;

            /**
             * Creates a plain object from a PingRequest message. Also converts values to other types if specified.
             * @param message PingRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: Example.V1.PingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PingRequest to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PingRequest
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PingRequest {

            /** Properties of a PingRequest. */
            interface $Properties {

                /** PingRequest message */
                message?: (string|null);

                /** PingRequest metadata */
                metadata?: (Common.V1.KeyValuePair.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PingRequest. */
            type $Shape = Example.V1.PingRequest.$Properties;
        }

        /**
         * Properties of a PingResponse.
         * @deprecated Use Example.V1.PingResponse.$Properties instead.
         */
        interface IPingResponse extends Example.V1.PingResponse.$Properties {
        }

        /** Represents a PingResponse. */
        class PingResponse {

            /**
             * Constructs a new PingResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Example.V1.PingResponse.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** PingResponse message. */
            message: string;

            /** PingResponse serverTime. */
            serverTime: string;

            /**
             * Creates a new PingResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PingResponse instance
             */
            static create(properties: Example.V1.PingResponse.$Shape): Example.V1.PingResponse & Example.V1.PingResponse.$Shape;
            static create(properties?: Example.V1.PingResponse.$Properties): Example.V1.PingResponse;

            /**
             * Encodes the specified PingResponse message. Does not implicitly {@link Example.V1.PingResponse.verify|verify} messages.
             * @param message PingResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: Example.V1.PingResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PingResponse message, length delimited. Does not implicitly {@link Example.V1.PingResponse.verify|verify} messages.
             * @param message PingResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: Example.V1.PingResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PingResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {Example.V1.PingResponse & Example.V1.PingResponse.$Shape} PingResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Example.V1.PingResponse & Example.V1.PingResponse.$Shape;

            /**
             * Decodes a PingResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {Example.V1.PingResponse & Example.V1.PingResponse.$Shape} PingResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Example.V1.PingResponse & Example.V1.PingResponse.$Shape;

            /**
             * Verifies a PingResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PingResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PingResponse
             */
            static fromObject(object: { [k: string]: any }): Example.V1.PingResponse;

            /**
             * Creates a plain object from a PingResponse message. Also converts values to other types if specified.
             * @param message PingResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: Example.V1.PingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PingResponse to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PingResponse
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PingResponse {

            /** Properties of a PingResponse. */
            interface $Properties {

                /** PingResponse message */
                message?: (string|null);

                /** PingResponse serverTime */
                serverTime?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PingResponse. */
            type $Shape = Example.V1.PingResponse.$Properties;
        }
    }
}

/** Namespace ExternalContent. */
export namespace ExternalContent {

    /** Namespace V1. */
    namespace V1 {

        /**
         * Properties of a GetUserExternalReelsResponse.
         * @deprecated Use ExternalContent.V1.GetUserExternalReelsResponse.$Properties instead.
         */
        interface IGetUserExternalReelsResponse extends ExternalContent.V1.GetUserExternalReelsResponse.$Properties {
        }

        /** Represents a GetUserExternalReelsResponse. */
        class GetUserExternalReelsResponse {

            /**
             * Constructs a new GetUserExternalReelsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ExternalContent.V1.GetUserExternalReelsResponse.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** GetUserExternalReelsResponse reelsFeed. */
            reelsFeed?: (Common.V1.ResourceToken.$Properties|null);

            /**
             * Creates a new GetUserExternalReelsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetUserExternalReelsResponse instance
             */
            static create(properties: ExternalContent.V1.GetUserExternalReelsResponse.$Shape): ExternalContent.V1.GetUserExternalReelsResponse & ExternalContent.V1.GetUserExternalReelsResponse.$Shape;
            static create(properties?: ExternalContent.V1.GetUserExternalReelsResponse.$Properties): ExternalContent.V1.GetUserExternalReelsResponse;

            /**
             * Encodes the specified GetUserExternalReelsResponse message. Does not implicitly {@link ExternalContent.V1.GetUserExternalReelsResponse.verify|verify} messages.
             * @param message GetUserExternalReelsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: ExternalContent.V1.GetUserExternalReelsResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetUserExternalReelsResponse message, length delimited. Does not implicitly {@link ExternalContent.V1.GetUserExternalReelsResponse.verify|verify} messages.
             * @param message GetUserExternalReelsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: ExternalContent.V1.GetUserExternalReelsResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetUserExternalReelsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {ExternalContent.V1.GetUserExternalReelsResponse & ExternalContent.V1.GetUserExternalReelsResponse.$Shape} GetUserExternalReelsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ExternalContent.V1.GetUserExternalReelsResponse & ExternalContent.V1.GetUserExternalReelsResponse.$Shape;

            /**
             * Decodes a GetUserExternalReelsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {ExternalContent.V1.GetUserExternalReelsResponse & ExternalContent.V1.GetUserExternalReelsResponse.$Shape} GetUserExternalReelsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ExternalContent.V1.GetUserExternalReelsResponse & ExternalContent.V1.GetUserExternalReelsResponse.$Shape;

            /**
             * Verifies a GetUserExternalReelsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetUserExternalReelsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetUserExternalReelsResponse
             */
            static fromObject(object: { [k: string]: any }): ExternalContent.V1.GetUserExternalReelsResponse;

            /**
             * Creates a plain object from a GetUserExternalReelsResponse message. Also converts values to other types if specified.
             * @param message GetUserExternalReelsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: ExternalContent.V1.GetUserExternalReelsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetUserExternalReelsResponse to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for GetUserExternalReelsResponse
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace GetUserExternalReelsResponse {

            /** Properties of a GetUserExternalReelsResponse. */
            interface $Properties {

                /** GetUserExternalReelsResponse reelsFeed */
                reelsFeed?: (Common.V1.ResourceToken.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a GetUserExternalReelsResponse. */
            type $Shape = ExternalContent.V1.GetUserExternalReelsResponse.$Properties;
        }

        /**
         * Properties of an ExternalReviewPublicView.
         * @deprecated Use ExternalContent.V1.ExternalReviewPublicView.$Properties instead.
         */
        interface IExternalReviewPublicView extends ExternalContent.V1.ExternalReviewPublicView.$Properties {
        }

        /** Represents an ExternalReviewPublicView. */
        class ExternalReviewPublicView {

            /**
             * Constructs a new ExternalReviewPublicView.
             * @param [properties] Properties to set
             */
            constructor(properties?: ExternalContent.V1.ExternalReviewPublicView.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ExternalReviewPublicView externalReelId. */
            externalReelId?: (Common.V1.ResourceId.$Properties|null);

            /** ExternalReviewPublicView externalReelLink. */
            externalReelLink?: (Common.V1.ResourceId.$Properties|null);

            /** ExternalReviewPublicView externalFeedId. */
            externalFeedId?: (Common.V1.ResourceToken.$Properties|null);

            /**
             * Creates a new ExternalReviewPublicView instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExternalReviewPublicView instance
             */
            static create(properties: ExternalContent.V1.ExternalReviewPublicView.$Shape): ExternalContent.V1.ExternalReviewPublicView & ExternalContent.V1.ExternalReviewPublicView.$Shape;
            static create(properties?: ExternalContent.V1.ExternalReviewPublicView.$Properties): ExternalContent.V1.ExternalReviewPublicView;

            /**
             * Encodes the specified ExternalReviewPublicView message. Does not implicitly {@link ExternalContent.V1.ExternalReviewPublicView.verify|verify} messages.
             * @param message ExternalReviewPublicView message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: ExternalContent.V1.ExternalReviewPublicView.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExternalReviewPublicView message, length delimited. Does not implicitly {@link ExternalContent.V1.ExternalReviewPublicView.verify|verify} messages.
             * @param message ExternalReviewPublicView message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: ExternalContent.V1.ExternalReviewPublicView.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExternalReviewPublicView message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {ExternalContent.V1.ExternalReviewPublicView & ExternalContent.V1.ExternalReviewPublicView.$Shape} ExternalReviewPublicView
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ExternalContent.V1.ExternalReviewPublicView & ExternalContent.V1.ExternalReviewPublicView.$Shape;

            /**
             * Decodes an ExternalReviewPublicView message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {ExternalContent.V1.ExternalReviewPublicView & ExternalContent.V1.ExternalReviewPublicView.$Shape} ExternalReviewPublicView
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ExternalContent.V1.ExternalReviewPublicView & ExternalContent.V1.ExternalReviewPublicView.$Shape;

            /**
             * Verifies an ExternalReviewPublicView message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExternalReviewPublicView message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExternalReviewPublicView
             */
            static fromObject(object: { [k: string]: any }): ExternalContent.V1.ExternalReviewPublicView;

            /**
             * Creates a plain object from an ExternalReviewPublicView message. Also converts values to other types if specified.
             * @param message ExternalReviewPublicView
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: ExternalContent.V1.ExternalReviewPublicView, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExternalReviewPublicView to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ExternalReviewPublicView
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ExternalReviewPublicView {

            /** Properties of an ExternalReviewPublicView. */
            interface $Properties {

                /** ExternalReviewPublicView externalReelId */
                externalReelId?: (Common.V1.ResourceId.$Properties|null);

                /** ExternalReviewPublicView externalReelLink */
                externalReelLink?: (Common.V1.ResourceId.$Properties|null);

                /** ExternalReviewPublicView externalFeedId */
                externalFeedId?: (Common.V1.ResourceToken.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an ExternalReviewPublicView. */
            type $Shape = ExternalContent.V1.ExternalReviewPublicView.$Properties;
        }
    }
}

/** Namespace Impactyn. */
export namespace Impactyn {

    /** Namespace Contracts. */
    namespace Contracts {

        /** Namespace IndexListPage. */
        namespace IndexListPage {

            /** Namespace V1. */
            namespace V1 {

                /**
                 * Properties of an IndexListPageItem.
                 * @deprecated Use Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Properties instead.
                 */
                interface IIndexListPageItem extends Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Properties {
                }

                /** Represents an IndexListPageItem. */
                class IndexListPageItem {

                    /**
                     * Constructs a new IndexListPageItem.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** IndexListPageItem itemId. */
                    itemId?: (Common.V1.ResourceId.$Properties|null);

                    /** IndexListPageItem score. */
                    score: (number|Long);

                    /** IndexListPageItem sas. */
                    sas: string;

                    /** IndexListPageItem decorations. */
                    decorations: { [k: string]: string };

                    /**
                     * Creates a new IndexListPageItem instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IndexListPageItem instance
                     */
                    static create(properties: Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Shape): Impactyn.Contracts.IndexListPage.V1.IndexListPageItem & Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Shape;
                    static create(properties?: Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Properties): Impactyn.Contracts.IndexListPage.V1.IndexListPageItem;

                    /**
                     * Encodes the specified IndexListPageItem message. Does not implicitly {@link Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.verify|verify} messages.
                     * @param message IndexListPageItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IndexListPageItem message, length delimited. Does not implicitly {@link Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.verify|verify} messages.
                     * @param message IndexListPageItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IndexListPageItem message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {Impactyn.Contracts.IndexListPage.V1.IndexListPageItem & Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Shape} IndexListPageItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Impactyn.Contracts.IndexListPage.V1.IndexListPageItem & Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Shape;

                    /**
                     * Decodes an IndexListPageItem message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {Impactyn.Contracts.IndexListPage.V1.IndexListPageItem & Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Shape} IndexListPageItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Impactyn.Contracts.IndexListPage.V1.IndexListPageItem & Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Shape;

                    /**
                     * Verifies an IndexListPageItem message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IndexListPageItem message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IndexListPageItem
                     */
                    static fromObject(object: { [k: string]: any }): Impactyn.Contracts.IndexListPage.V1.IndexListPageItem;

                    /**
                     * Creates a plain object from an IndexListPageItem message. Also converts values to other types if specified.
                     * @param message IndexListPageItem
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: Impactyn.Contracts.IndexListPage.V1.IndexListPageItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IndexListPageItem to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for IndexListPageItem
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace IndexListPageItem {

                    /** Properties of an IndexListPageItem. */
                    interface $Properties {

                        /** IndexListPageItem itemId */
                        itemId?: (Common.V1.ResourceId.$Properties|null);

                        /** IndexListPageItem score */
                        score?: (number|Long|null);

                        /** IndexListPageItem sas */
                        sas?: (string|null);

                        /** IndexListPageItem decorations */
                        decorations?: ({ [k: string]: string }|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an IndexListPageItem. */
                    type $Shape = Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Properties;
                }

                /**
                 * Properties of an IndexListPageResource.
                 * @deprecated Use Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Properties instead.
                 */
                interface IIndexListPageResource extends Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Properties {
                }

                /** Represents an IndexListPageResource. */
                class IndexListPageResource {

                    /**
                     * Constructs a new IndexListPageResource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** IndexListPageResource nextPage. */
                    nextPage?: (Common.V1.ResourceId.$Properties|null);

                    /** IndexListPageResource items. */
                    items: Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Properties[];

                    /** IndexListPageResource sas. */
                    sas: string;

                    /** IndexListPageResource nextPageSas. */
                    nextPageSas: string;

                    /** IndexListPageResource notAfter. */
                    notAfter?: (google.protobuf.Timestamp.$Properties|null);

                    /** IndexListPageResource refreshAt. */
                    refreshAt?: (google.protobuf.Timestamp.$Properties|null);

                    /** IndexListPageResource listCount. */
                    listCount: (number|Long);

                    /**
                     * Creates a new IndexListPageResource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IndexListPageResource instance
                     */
                    static create(properties: Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Shape): Impactyn.Contracts.IndexListPage.V1.IndexListPageResource & Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Shape;
                    static create(properties?: Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Properties): Impactyn.Contracts.IndexListPage.V1.IndexListPageResource;

                    /**
                     * Encodes the specified IndexListPageResource message. Does not implicitly {@link Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.verify|verify} messages.
                     * @param message IndexListPageResource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IndexListPageResource message, length delimited. Does not implicitly {@link Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.verify|verify} messages.
                     * @param message IndexListPageResource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IndexListPageResource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {Impactyn.Contracts.IndexListPage.V1.IndexListPageResource & Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Shape} IndexListPageResource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Impactyn.Contracts.IndexListPage.V1.IndexListPageResource & Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Shape;

                    /**
                     * Decodes an IndexListPageResource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {Impactyn.Contracts.IndexListPage.V1.IndexListPageResource & Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Shape} IndexListPageResource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Impactyn.Contracts.IndexListPage.V1.IndexListPageResource & Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Shape;

                    /**
                     * Verifies an IndexListPageResource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IndexListPageResource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IndexListPageResource
                     */
                    static fromObject(object: { [k: string]: any }): Impactyn.Contracts.IndexListPage.V1.IndexListPageResource;

                    /**
                     * Creates a plain object from an IndexListPageResource message. Also converts values to other types if specified.
                     * @param message IndexListPageResource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: Impactyn.Contracts.IndexListPage.V1.IndexListPageResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IndexListPageResource to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for IndexListPageResource
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace IndexListPageResource {

                    /** Properties of an IndexListPageResource. */
                    interface $Properties {

                        /** IndexListPageResource nextPage */
                        nextPage?: (Common.V1.ResourceId.$Properties|null);

                        /** IndexListPageResource items */
                        items?: (Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Properties[]|null);

                        /** IndexListPageResource sas */
                        sas?: (string|null);

                        /** IndexListPageResource nextPageSas */
                        nextPageSas?: (string|null);

                        /** IndexListPageResource notAfter */
                        notAfter?: (google.protobuf.Timestamp.$Properties|null);

                        /** IndexListPageResource refreshAt */
                        refreshAt?: (google.protobuf.Timestamp.$Properties|null);

                        /** IndexListPageResource listCount */
                        listCount?: (number|Long|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an IndexListPageResource. */
                    type $Shape = Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Properties;
                }
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /**
         * Properties of a Timestamp.
         * @deprecated Use google.protobuf.Timestamp.$Properties instead.
         */
        interface ITimestamp extends google.protobuf.Timestamp.$Properties {
        }

        /** Represents a Timestamp. */
        class Timestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.Timestamp.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Timestamp seconds. */
            seconds: (number|Long);

            /** Timestamp nanos. */
            nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            static create(properties: google.protobuf.Timestamp.$Shape): google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape;
            static create(properties?: google.protobuf.Timestamp.$Properties): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.Timestamp.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.Timestamp.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Timestamp
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Timestamp {

            /** Properties of a Timestamp. */
            interface $Properties {

                /** Timestamp seconds */
                seconds?: (number|Long|null);

                /** Timestamp nanos */
                nanos?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Timestamp. */
            type $Shape = google.protobuf.Timestamp.$Properties;
        }
    }
}
