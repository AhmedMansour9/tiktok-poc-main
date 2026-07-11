/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
var $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $String = $util.global.String, $Array = $util.global.Array;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Common = (function() {

    /**
     * Namespace Common.
     * @exports Common
     * @namespace
     */
    var Common = {};

    Common.V1 = (function() {

        /**
         * Namespace V1.
         * @memberof Common
         * @namespace
         */
        var V1 = {};

        V1.KeyValuePair = (function() {

            /**
             * Properties of a KeyValuePair.
             * @typedef {Object} Common.V1.KeyValuePair.$Properties
             * @property {string|null} [key] KeyValuePair key
             * @property {string|null} [value] KeyValuePair value
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a KeyValuePair.
             * @memberof Common.V1
             * @interface IKeyValuePair
             * @augments Common.V1.KeyValuePair.$Properties
             * @deprecated Use Common.V1.KeyValuePair.$Properties instead.
             */

            /**
             * Shape of a KeyValuePair.
             * @typedef {Common.V1.KeyValuePair.$Properties} Common.V1.KeyValuePair.$Shape
             */

            /**
             * Constructs a new KeyValuePair.
             * @memberof Common.V1
             * @classdesc Represents a KeyValuePair.
             * @constructor
             * @param {Common.V1.KeyValuePair.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var KeyValuePair = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * KeyValuePair key.
             * @member {string} key
             * @memberof Common.V1.KeyValuePair
             * @instance
             */
            KeyValuePair.prototype.key = "";

            /**
             * KeyValuePair value.
             * @member {string} value
             * @memberof Common.V1.KeyValuePair
             * @instance
             */
            KeyValuePair.prototype.value = "";

            /**
             * Creates a new KeyValuePair instance using the specified properties.
             * @function create
             * @memberof Common.V1.KeyValuePair
             * @static
             * @param {Common.V1.KeyValuePair.$Properties=} [properties] Properties to set
             * @returns {Common.V1.KeyValuePair} KeyValuePair instance
             * @type {{
             *   (properties: Common.V1.KeyValuePair.$Shape): Common.V1.KeyValuePair & Common.V1.KeyValuePair.$Shape;
             *   (properties?: Common.V1.KeyValuePair.$Properties): Common.V1.KeyValuePair;
             * }}
             */
            KeyValuePair.create = function(properties) {
                return new KeyValuePair(properties);
            };

            /**
             * Encodes the specified KeyValuePair message. Does not implicitly {@link Common.V1.KeyValuePair.verify|verify} messages.
             * @function encode
             * @memberof Common.V1.KeyValuePair
             * @static
             * @param {Common.V1.KeyValuePair.$Properties} message KeyValuePair message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            KeyValuePair.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.key != null && $Object.hasOwnProperty.call(message, "key") && message.key !== "")
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
                if (message.value != null && $Object.hasOwnProperty.call(message, "value") && message.value !== "")
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified KeyValuePair message, length delimited. Does not implicitly {@link Common.V1.KeyValuePair.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Common.V1.KeyValuePair
             * @static
             * @param {Common.V1.KeyValuePair.$Properties} message KeyValuePair message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            KeyValuePair.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a KeyValuePair message from the specified reader or buffer.
             * @function decode
             * @memberof Common.V1.KeyValuePair
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Common.V1.KeyValuePair & Common.V1.KeyValuePair.$Shape} KeyValuePair
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            KeyValuePair.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Common.V1.KeyValuePair(), value;
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.key = value;
                            else
                                delete message.key;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.value = value;
                            else
                                delete message.value;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a KeyValuePair message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Common.V1.KeyValuePair
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Common.V1.KeyValuePair & Common.V1.KeyValuePair.$Shape} KeyValuePair
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            KeyValuePair.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a KeyValuePair message.
             * @function verify
             * @memberof Common.V1.KeyValuePair
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            KeyValuePair.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.key != null && $Object.hasOwnProperty.call(message, "key"))
                    if (!$util.isString(message.key))
                        return "key: string expected";
                if (message.value != null && $Object.hasOwnProperty.call(message, "value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                return null;
            };

            /**
             * Creates a KeyValuePair message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Common.V1.KeyValuePair
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Common.V1.KeyValuePair} KeyValuePair
             */
            KeyValuePair.fromObject = function (object, _depth) {
                if (object instanceof $root.Common.V1.KeyValuePair)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".Common.V1.KeyValuePair: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.Common.V1.KeyValuePair();
                if (object.key != null)
                    if (typeof object.key !== "string" || object.key.length)
                        message.key = $String(object.key);
                if (object.value != null)
                    if (typeof object.value !== "string" || object.value.length)
                        message.value = $String(object.value);
                return message;
            };

            /**
             * Creates a plain object from a KeyValuePair message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Common.V1.KeyValuePair
             * @static
             * @param {Common.V1.KeyValuePair} message KeyValuePair
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            KeyValuePair.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.defaults) {
                    object.key = "";
                    object.value = "";
                }
                if (message.key != null && $Object.hasOwnProperty.call(message, "key"))
                    object.key = message.key;
                if (message.value != null && $Object.hasOwnProperty.call(message, "value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this KeyValuePair to JSON.
             * @function toJSON
             * @memberof Common.V1.KeyValuePair
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            KeyValuePair.prototype.toJSON = function() {
                return KeyValuePair.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for KeyValuePair
             * @function getTypeUrl
             * @memberof Common.V1.KeyValuePair
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            KeyValuePair.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/Common.V1.KeyValuePair";
            };

            return KeyValuePair;
        })();

        return V1;
    })();

    return Common;
})();

$root.Example = (function() {

    /**
     * Namespace Example.
     * @exports Example
     * @namespace
     */
    var Example = {};

    Example.V1 = (function() {

        /**
         * Namespace V1.
         * @memberof Example
         * @namespace
         */
        var V1 = {};

        V1.PingRequest = (function() {

            /**
             * Properties of a PingRequest.
             * @typedef {Object} Example.V1.PingRequest.$Properties
             * @property {string|null} [message] PingRequest message
             * @property {Array.<Common.V1.KeyValuePair.$Properties>|null} [metadata] PingRequest metadata
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a PingRequest.
             * @memberof Example.V1
             * @interface IPingRequest
             * @augments Example.V1.PingRequest.$Properties
             * @deprecated Use Example.V1.PingRequest.$Properties instead.
             */

            /**
             * Shape of a PingRequest.
             * @typedef {Example.V1.PingRequest.$Properties} Example.V1.PingRequest.$Shape
             */

            /**
             * Constructs a new PingRequest.
             * @memberof Example.V1
             * @classdesc Represents a PingRequest.
             * @constructor
             * @param {Example.V1.PingRequest.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var PingRequest = function (properties) {
                this.metadata = [];
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * PingRequest message.
             * @member {string} message
             * @memberof Example.V1.PingRequest
             * @instance
             */
            PingRequest.prototype.message = "";

            /**
             * PingRequest metadata.
             * @member {Array.<Common.V1.KeyValuePair.$Properties>} metadata
             * @memberof Example.V1.PingRequest
             * @instance
             */
            PingRequest.prototype.metadata = $util.emptyArray;

            /**
             * Creates a new PingRequest instance using the specified properties.
             * @function create
             * @memberof Example.V1.PingRequest
             * @static
             * @param {Example.V1.PingRequest.$Properties=} [properties] Properties to set
             * @returns {Example.V1.PingRequest} PingRequest instance
             * @type {{
             *   (properties: Example.V1.PingRequest.$Shape): Example.V1.PingRequest & Example.V1.PingRequest.$Shape;
             *   (properties?: Example.V1.PingRequest.$Properties): Example.V1.PingRequest;
             * }}
             */
            PingRequest.create = function(properties) {
                return new PingRequest(properties);
            };

            /**
             * Encodes the specified PingRequest message. Does not implicitly {@link Example.V1.PingRequest.verify|verify} messages.
             * @function encode
             * @memberof Example.V1.PingRequest
             * @static
             * @param {Example.V1.PingRequest.$Properties} message PingRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PingRequest.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.message != null && $Object.hasOwnProperty.call(message, "message") && message.message !== "")
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                if (message.metadata != null && message.metadata.length)
                    for (var i = 0; i < message.metadata.length; ++i)
                        $root.Common.V1.KeyValuePair.encode(message.metadata[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified PingRequest message, length delimited. Does not implicitly {@link Example.V1.PingRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Example.V1.PingRequest
             * @static
             * @param {Example.V1.PingRequest.$Properties} message PingRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PingRequest.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a PingRequest message from the specified reader or buffer.
             * @function decode
             * @memberof Example.V1.PingRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Example.V1.PingRequest & Example.V1.PingRequest.$Shape} PingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PingRequest.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Example.V1.PingRequest(), value;
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.message = value;
                            else
                                delete message.message;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if (!(message.metadata && message.metadata.length))
                                message.metadata = [];
                            message.metadata.push($root.Common.V1.KeyValuePair.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a PingRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Example.V1.PingRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Example.V1.PingRequest & Example.V1.PingRequest.$Shape} PingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PingRequest.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PingRequest message.
             * @function verify
             * @memberof Example.V1.PingRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PingRequest.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.message != null && $Object.hasOwnProperty.call(message, "message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (message.metadata != null && $Object.hasOwnProperty.call(message, "metadata")) {
                    if (!$Array.isArray(message.metadata))
                        return "metadata: array expected";
                    for (var i = 0; i < message.metadata.length; ++i) {
                        var error = $root.Common.V1.KeyValuePair.verify(message.metadata[i], _depth + 1);
                        if (error)
                            return "metadata." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a PingRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Example.V1.PingRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Example.V1.PingRequest} PingRequest
             */
            PingRequest.fromObject = function (object, _depth) {
                if (object instanceof $root.Example.V1.PingRequest)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".Example.V1.PingRequest: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.Example.V1.PingRequest();
                if (object.message != null)
                    if (typeof object.message !== "string" || object.message.length)
                        message.message = $String(object.message);
                if (object.metadata) {
                    if (!$Array.isArray(object.metadata))
                        throw $TypeError(".Example.V1.PingRequest.metadata: array expected");
                    message.metadata = $Array(object.metadata.length);
                    for (var i = 0; i < object.metadata.length; ++i) {
                        if (!$util.isObject(object.metadata[i]))
                            throw $TypeError(".Example.V1.PingRequest.metadata: object expected");
                        message.metadata[i] = $root.Common.V1.KeyValuePair.fromObject(object.metadata[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a PingRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Example.V1.PingRequest
             * @static
             * @param {Example.V1.PingRequest} message PingRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PingRequest.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults)
                    object.metadata = [];
                if (options.defaults)
                    object.message = "";
                if (message.message != null && $Object.hasOwnProperty.call(message, "message"))
                    object.message = message.message;
                if (message.metadata && message.metadata.length) {
                    object.metadata = $Array(message.metadata.length);
                    for (var j = 0; j < message.metadata.length; ++j)
                        object.metadata[j] = $root.Common.V1.KeyValuePair.toObject(message.metadata[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this PingRequest to JSON.
             * @function toJSON
             * @memberof Example.V1.PingRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PingRequest.prototype.toJSON = function() {
                return PingRequest.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for PingRequest
             * @function getTypeUrl
             * @memberof Example.V1.PingRequest
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            PingRequest.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/Example.V1.PingRequest";
            };

            return PingRequest;
        })();

        V1.PingResponse = (function() {

            /**
             * Properties of a PingResponse.
             * @typedef {Object} Example.V1.PingResponse.$Properties
             * @property {string|null} [message] PingResponse message
             * @property {string|null} [serverTime] PingResponse serverTime
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a PingResponse.
             * @memberof Example.V1
             * @interface IPingResponse
             * @augments Example.V1.PingResponse.$Properties
             * @deprecated Use Example.V1.PingResponse.$Properties instead.
             */

            /**
             * Shape of a PingResponse.
             * @typedef {Example.V1.PingResponse.$Properties} Example.V1.PingResponse.$Shape
             */

            /**
             * Constructs a new PingResponse.
             * @memberof Example.V1
             * @classdesc Represents a PingResponse.
             * @constructor
             * @param {Example.V1.PingResponse.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var PingResponse = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * PingResponse message.
             * @member {string} message
             * @memberof Example.V1.PingResponse
             * @instance
             */
            PingResponse.prototype.message = "";

            /**
             * PingResponse serverTime.
             * @member {string} serverTime
             * @memberof Example.V1.PingResponse
             * @instance
             */
            PingResponse.prototype.serverTime = "";

            /**
             * Creates a new PingResponse instance using the specified properties.
             * @function create
             * @memberof Example.V1.PingResponse
             * @static
             * @param {Example.V1.PingResponse.$Properties=} [properties] Properties to set
             * @returns {Example.V1.PingResponse} PingResponse instance
             * @type {{
             *   (properties: Example.V1.PingResponse.$Shape): Example.V1.PingResponse & Example.V1.PingResponse.$Shape;
             *   (properties?: Example.V1.PingResponse.$Properties): Example.V1.PingResponse;
             * }}
             */
            PingResponse.create = function(properties) {
                return new PingResponse(properties);
            };

            /**
             * Encodes the specified PingResponse message. Does not implicitly {@link Example.V1.PingResponse.verify|verify} messages.
             * @function encode
             * @memberof Example.V1.PingResponse
             * @static
             * @param {Example.V1.PingResponse.$Properties} message PingResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PingResponse.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.message != null && $Object.hasOwnProperty.call(message, "message") && message.message !== "")
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                if (message.serverTime != null && $Object.hasOwnProperty.call(message, "serverTime") && message.serverTime !== "")
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.serverTime);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified PingResponse message, length delimited. Does not implicitly {@link Example.V1.PingResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Example.V1.PingResponse
             * @static
             * @param {Example.V1.PingResponse.$Properties} message PingResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PingResponse.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a PingResponse message from the specified reader or buffer.
             * @function decode
             * @memberof Example.V1.PingResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Example.V1.PingResponse & Example.V1.PingResponse.$Shape} PingResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PingResponse.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Example.V1.PingResponse(), value;
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.message = value;
                            else
                                delete message.message;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.serverTime = value;
                            else
                                delete message.serverTime;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a PingResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Example.V1.PingResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Example.V1.PingResponse & Example.V1.PingResponse.$Shape} PingResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PingResponse.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PingResponse message.
             * @function verify
             * @memberof Example.V1.PingResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PingResponse.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.message != null && $Object.hasOwnProperty.call(message, "message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (message.serverTime != null && $Object.hasOwnProperty.call(message, "serverTime"))
                    if (!$util.isString(message.serverTime))
                        return "serverTime: string expected";
                return null;
            };

            /**
             * Creates a PingResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Example.V1.PingResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Example.V1.PingResponse} PingResponse
             */
            PingResponse.fromObject = function (object, _depth) {
                if (object instanceof $root.Example.V1.PingResponse)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".Example.V1.PingResponse: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.Example.V1.PingResponse();
                if (object.message != null)
                    if (typeof object.message !== "string" || object.message.length)
                        message.message = $String(object.message);
                if (object.serverTime != null)
                    if (typeof object.serverTime !== "string" || object.serverTime.length)
                        message.serverTime = $String(object.serverTime);
                return message;
            };

            /**
             * Creates a plain object from a PingResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Example.V1.PingResponse
             * @static
             * @param {Example.V1.PingResponse} message PingResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PingResponse.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.defaults) {
                    object.message = "";
                    object.serverTime = "";
                }
                if (message.message != null && $Object.hasOwnProperty.call(message, "message"))
                    object.message = message.message;
                if (message.serverTime != null && $Object.hasOwnProperty.call(message, "serverTime"))
                    object.serverTime = message.serverTime;
                return object;
            };

            /**
             * Converts this PingResponse to JSON.
             * @function toJSON
             * @memberof Example.V1.PingResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PingResponse.prototype.toJSON = function() {
                return PingResponse.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for PingResponse
             * @function getTypeUrl
             * @memberof Example.V1.PingResponse
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            PingResponse.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/Example.V1.PingResponse";
            };

            return PingResponse;
        })();

        return V1;
    })();

    return Example;
})();

module.exports = $root;
