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
