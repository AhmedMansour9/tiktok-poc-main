/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
var $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $String = $util.global.String, $Array = $util.global.Array, $Number = $util.global.Number, $parseInt = $util.global.parseInt, $BigInt = $util.global.BigInt;

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

        V1.ResourceId = (function() {

            /**
             * Properties of a ResourceId.
             * @typedef {Object} Common.V1.ResourceId.$Properties
             * @property {string|null} [resourceType] ResourceId resourceType
             * @property {string|null} [namespace] ResourceId namespace
             * @property {string|null} [name] ResourceId name
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a ResourceId.
             * @memberof Common.V1
             * @interface IResourceId
             * @augments Common.V1.ResourceId.$Properties
             * @deprecated Use Common.V1.ResourceId.$Properties instead.
             */

            /**
             * Shape of a ResourceId.
             * @typedef {Common.V1.ResourceId.$Properties} Common.V1.ResourceId.$Shape
             */

            /**
             * Constructs a new ResourceId.
             * @memberof Common.V1
             * @classdesc Represents a ResourceId.
             * @constructor
             * @param {Common.V1.ResourceId.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var ResourceId = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * ResourceId resourceType.
             * @member {string} resourceType
             * @memberof Common.V1.ResourceId
             * @instance
             */
            ResourceId.prototype.resourceType = "";

            /**
             * ResourceId namespace.
             * @member {string} namespace
             * @memberof Common.V1.ResourceId
             * @instance
             */
            ResourceId.prototype.namespace = "";

            /**
             * ResourceId name.
             * @member {string} name
             * @memberof Common.V1.ResourceId
             * @instance
             */
            ResourceId.prototype.name = "";

            /**
             * Creates a new ResourceId instance using the specified properties.
             * @function create
             * @memberof Common.V1.ResourceId
             * @static
             * @param {Common.V1.ResourceId.$Properties=} [properties] Properties to set
             * @returns {Common.V1.ResourceId} ResourceId instance
             * @type {{
             *   (properties: Common.V1.ResourceId.$Shape): Common.V1.ResourceId & Common.V1.ResourceId.$Shape;
             *   (properties?: Common.V1.ResourceId.$Properties): Common.V1.ResourceId;
             * }}
             */
            ResourceId.create = function(properties) {
                return new ResourceId(properties);
            };

            /**
             * Encodes the specified ResourceId message. Does not implicitly {@link Common.V1.ResourceId.verify|verify} messages.
             * @function encode
             * @memberof Common.V1.ResourceId
             * @static
             * @param {Common.V1.ResourceId.$Properties} message ResourceId message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResourceId.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.resourceType != null && $Object.hasOwnProperty.call(message, "resourceType") && message.resourceType !== "")
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.resourceType);
                if (message.namespace != null && $Object.hasOwnProperty.call(message, "namespace") && message.namespace !== "")
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.namespace);
                if (message.name != null && $Object.hasOwnProperty.call(message, "name") && message.name !== "")
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified ResourceId message, length delimited. Does not implicitly {@link Common.V1.ResourceId.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Common.V1.ResourceId
             * @static
             * @param {Common.V1.ResourceId.$Properties} message ResourceId message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResourceId.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a ResourceId message from the specified reader or buffer.
             * @function decode
             * @memberof Common.V1.ResourceId
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Common.V1.ResourceId & Common.V1.ResourceId.$Shape} ResourceId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResourceId.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Common.V1.ResourceId(), value;
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
                                message.resourceType = value;
                            else
                                delete message.resourceType;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.namespace = value;
                            else
                                delete message.namespace;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.name = value;
                            else
                                delete message.name;
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
             * Decodes a ResourceId message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Common.V1.ResourceId
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Common.V1.ResourceId & Common.V1.ResourceId.$Shape} ResourceId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResourceId.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResourceId message.
             * @function verify
             * @memberof Common.V1.ResourceId
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResourceId.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.resourceType != null && $Object.hasOwnProperty.call(message, "resourceType"))
                    if (!$util.isString(message.resourceType))
                        return "resourceType: string expected";
                if (message.namespace != null && $Object.hasOwnProperty.call(message, "namespace"))
                    if (!$util.isString(message.namespace))
                        return "namespace: string expected";
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                return null;
            };

            /**
             * Creates a ResourceId message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Common.V1.ResourceId
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Common.V1.ResourceId} ResourceId
             */
            ResourceId.fromObject = function (object, _depth) {
                if (object instanceof $root.Common.V1.ResourceId)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".Common.V1.ResourceId: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.Common.V1.ResourceId();
                if (object.resourceType != null)
                    if (typeof object.resourceType !== "string" || object.resourceType.length)
                        message.resourceType = $String(object.resourceType);
                if (object.namespace != null)
                    if (typeof object.namespace !== "string" || object.namespace.length)
                        message.namespace = $String(object.namespace);
                if (object.name != null)
                    if (typeof object.name !== "string" || object.name.length)
                        message.name = $String(object.name);
                return message;
            };

            /**
             * Creates a plain object from a ResourceId message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Common.V1.ResourceId
             * @static
             * @param {Common.V1.ResourceId} message ResourceId
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResourceId.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.defaults) {
                    object.resourceType = "";
                    object.namespace = "";
                    object.name = "";
                }
                if (message.resourceType != null && $Object.hasOwnProperty.call(message, "resourceType"))
                    object.resourceType = message.resourceType;
                if (message.namespace != null && $Object.hasOwnProperty.call(message, "namespace"))
                    object.namespace = message.namespace;
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    object.name = message.name;
                return object;
            };

            /**
             * Converts this ResourceId to JSON.
             * @function toJSON
             * @memberof Common.V1.ResourceId
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResourceId.prototype.toJSON = function() {
                return ResourceId.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for ResourceId
             * @function getTypeUrl
             * @memberof Common.V1.ResourceId
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            ResourceId.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/Common.V1.ResourceId";
            };

            return ResourceId;
        })();

        V1.ResourceToken = (function() {

            /**
             * Properties of a ResourceToken.
             * @typedef {Object} Common.V1.ResourceToken.$Properties
             * @property {Common.V1.ResourceId.$Properties|null} [resourceId] ResourceToken resourceId
             * @property {string|null} [sas] ResourceToken sas
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a ResourceToken.
             * @memberof Common.V1
             * @interface IResourceToken
             * @augments Common.V1.ResourceToken.$Properties
             * @deprecated Use Common.V1.ResourceToken.$Properties instead.
             */

            /**
             * Shape of a ResourceToken.
             * @typedef {Common.V1.ResourceToken.$Properties} Common.V1.ResourceToken.$Shape
             */

            /**
             * Constructs a new ResourceToken.
             * @memberof Common.V1
             * @classdesc Represents a ResourceToken.
             * @constructor
             * @param {Common.V1.ResourceToken.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var ResourceToken = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * ResourceToken resourceId.
             * @member {Common.V1.ResourceId.$Properties|null|undefined} resourceId
             * @memberof Common.V1.ResourceToken
             * @instance
             */
            ResourceToken.prototype.resourceId = null;

            /**
             * ResourceToken sas.
             * @member {string} sas
             * @memberof Common.V1.ResourceToken
             * @instance
             */
            ResourceToken.prototype.sas = "";

            /**
             * Creates a new ResourceToken instance using the specified properties.
             * @function create
             * @memberof Common.V1.ResourceToken
             * @static
             * @param {Common.V1.ResourceToken.$Properties=} [properties] Properties to set
             * @returns {Common.V1.ResourceToken} ResourceToken instance
             * @type {{
             *   (properties: Common.V1.ResourceToken.$Shape): Common.V1.ResourceToken & Common.V1.ResourceToken.$Shape;
             *   (properties?: Common.V1.ResourceToken.$Properties): Common.V1.ResourceToken;
             * }}
             */
            ResourceToken.create = function(properties) {
                return new ResourceToken(properties);
            };

            /**
             * Encodes the specified ResourceToken message. Does not implicitly {@link Common.V1.ResourceToken.verify|verify} messages.
             * @function encode
             * @memberof Common.V1.ResourceToken
             * @static
             * @param {Common.V1.ResourceToken.$Properties} message ResourceToken message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResourceToken.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.resourceId != null && $Object.hasOwnProperty.call(message, "resourceId"))
                    $root.Common.V1.ResourceId.encode(message.resourceId, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.sas != null && $Object.hasOwnProperty.call(message, "sas") && message.sas !== "")
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.sas);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified ResourceToken message, length delimited. Does not implicitly {@link Common.V1.ResourceToken.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Common.V1.ResourceToken
             * @static
             * @param {Common.V1.ResourceToken.$Properties} message ResourceToken message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResourceToken.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a ResourceToken message from the specified reader or buffer.
             * @function decode
             * @memberof Common.V1.ResourceToken
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Common.V1.ResourceToken & Common.V1.ResourceToken.$Shape} ResourceToken
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResourceToken.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Common.V1.ResourceToken(), value;
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
                            message.resourceId = $root.Common.V1.ResourceId.decode(reader, reader.uint32(), $undefined, _depth + 1, message.resourceId);
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.stringVerify()).length)
                                message.sas = value;
                            else
                                delete message.sas;
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
             * Decodes a ResourceToken message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Common.V1.ResourceToken
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Common.V1.ResourceToken & Common.V1.ResourceToken.$Shape} ResourceToken
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResourceToken.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResourceToken message.
             * @function verify
             * @memberof Common.V1.ResourceToken
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResourceToken.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.resourceId != null && $Object.hasOwnProperty.call(message, "resourceId")) {
                    var error = $root.Common.V1.ResourceId.verify(message.resourceId, _depth + 1);
                    if (error)
                        return "resourceId." + error;
                }
                if (message.sas != null && $Object.hasOwnProperty.call(message, "sas"))
                    if (!$util.isString(message.sas))
                        return "sas: string expected";
                return null;
            };

            /**
             * Creates a ResourceToken message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Common.V1.ResourceToken
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Common.V1.ResourceToken} ResourceToken
             */
            ResourceToken.fromObject = function (object, _depth) {
                if (object instanceof $root.Common.V1.ResourceToken)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".Common.V1.ResourceToken: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.Common.V1.ResourceToken();
                if (object.resourceId != null) {
                    if (!$util.isObject(object.resourceId))
                        throw $TypeError(".Common.V1.ResourceToken.resourceId: object expected");
                    message.resourceId = $root.Common.V1.ResourceId.fromObject(object.resourceId, _depth + 1);
                }
                if (object.sas != null)
                    if (typeof object.sas !== "string" || object.sas.length)
                        message.sas = $String(object.sas);
                return message;
            };

            /**
             * Creates a plain object from a ResourceToken message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Common.V1.ResourceToken
             * @static
             * @param {Common.V1.ResourceToken} message ResourceToken
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResourceToken.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.defaults) {
                    object.resourceId = null;
                    object.sas = "";
                }
                if (message.resourceId != null && $Object.hasOwnProperty.call(message, "resourceId"))
                    object.resourceId = $root.Common.V1.ResourceId.toObject(message.resourceId, options, _depth + 1);
                if (message.sas != null && $Object.hasOwnProperty.call(message, "sas"))
                    object.sas = message.sas;
                return object;
            };

            /**
             * Converts this ResourceToken to JSON.
             * @function toJSON
             * @memberof Common.V1.ResourceToken
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResourceToken.prototype.toJSON = function() {
                return ResourceToken.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for ResourceToken
             * @function getTypeUrl
             * @memberof Common.V1.ResourceToken
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            ResourceToken.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/Common.V1.ResourceToken";
            };

            return ResourceToken;
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

$root.ExternalContent = (function() {

    /**
     * Namespace ExternalContent.
     * @exports ExternalContent
     * @namespace
     */
    var ExternalContent = {};

    ExternalContent.V1 = (function() {

        /**
         * Namespace V1.
         * @memberof ExternalContent
         * @namespace
         */
        var V1 = {};

        V1.GetUserExternalReelsResponse = (function() {

            /**
             * Properties of a GetUserExternalReelsResponse.
             * @typedef {Object} ExternalContent.V1.GetUserExternalReelsResponse.$Properties
             * @property {Common.V1.ResourceToken.$Properties|null} [reelsFeed] GetUserExternalReelsResponse reelsFeed
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a GetUserExternalReelsResponse.
             * @memberof ExternalContent.V1
             * @interface IGetUserExternalReelsResponse
             * @augments ExternalContent.V1.GetUserExternalReelsResponse.$Properties
             * @deprecated Use ExternalContent.V1.GetUserExternalReelsResponse.$Properties instead.
             */

            /**
             * Shape of a GetUserExternalReelsResponse.
             * @typedef {ExternalContent.V1.GetUserExternalReelsResponse.$Properties} ExternalContent.V1.GetUserExternalReelsResponse.$Shape
             */

            /**
             * Constructs a new GetUserExternalReelsResponse.
             * @memberof ExternalContent.V1
             * @classdesc Represents a GetUserExternalReelsResponse.
             * @constructor
             * @param {ExternalContent.V1.GetUserExternalReelsResponse.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var GetUserExternalReelsResponse = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * GetUserExternalReelsResponse reelsFeed.
             * @member {Common.V1.ResourceToken.$Properties|null|undefined} reelsFeed
             * @memberof ExternalContent.V1.GetUserExternalReelsResponse
             * @instance
             */
            GetUserExternalReelsResponse.prototype.reelsFeed = null;

            /**
             * Creates a new GetUserExternalReelsResponse instance using the specified properties.
             * @function create
             * @memberof ExternalContent.V1.GetUserExternalReelsResponse
             * @static
             * @param {ExternalContent.V1.GetUserExternalReelsResponse.$Properties=} [properties] Properties to set
             * @returns {ExternalContent.V1.GetUserExternalReelsResponse} GetUserExternalReelsResponse instance
             * @type {{
             *   (properties: ExternalContent.V1.GetUserExternalReelsResponse.$Shape): ExternalContent.V1.GetUserExternalReelsResponse & ExternalContent.V1.GetUserExternalReelsResponse.$Shape;
             *   (properties?: ExternalContent.V1.GetUserExternalReelsResponse.$Properties): ExternalContent.V1.GetUserExternalReelsResponse;
             * }}
             */
            GetUserExternalReelsResponse.create = function(properties) {
                return new GetUserExternalReelsResponse(properties);
            };

            /**
             * Encodes the specified GetUserExternalReelsResponse message. Does not implicitly {@link ExternalContent.V1.GetUserExternalReelsResponse.verify|verify} messages.
             * @function encode
             * @memberof ExternalContent.V1.GetUserExternalReelsResponse
             * @static
             * @param {ExternalContent.V1.GetUserExternalReelsResponse.$Properties} message GetUserExternalReelsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetUserExternalReelsResponse.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.reelsFeed != null && $Object.hasOwnProperty.call(message, "reelsFeed"))
                    $root.Common.V1.ResourceToken.encode(message.reelsFeed, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified GetUserExternalReelsResponse message, length delimited. Does not implicitly {@link ExternalContent.V1.GetUserExternalReelsResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ExternalContent.V1.GetUserExternalReelsResponse
             * @static
             * @param {ExternalContent.V1.GetUserExternalReelsResponse.$Properties} message GetUserExternalReelsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetUserExternalReelsResponse.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a GetUserExternalReelsResponse message from the specified reader or buffer.
             * @function decode
             * @memberof ExternalContent.V1.GetUserExternalReelsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ExternalContent.V1.GetUserExternalReelsResponse & ExternalContent.V1.GetUserExternalReelsResponse.$Shape} GetUserExternalReelsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetUserExternalReelsResponse.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.ExternalContent.V1.GetUserExternalReelsResponse(), value;
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
                            message.reelsFeed = $root.Common.V1.ResourceToken.decode(reader, reader.uint32(), $undefined, _depth + 1, message.reelsFeed);
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
             * Decodes a GetUserExternalReelsResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ExternalContent.V1.GetUserExternalReelsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ExternalContent.V1.GetUserExternalReelsResponse & ExternalContent.V1.GetUserExternalReelsResponse.$Shape} GetUserExternalReelsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetUserExternalReelsResponse.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetUserExternalReelsResponse message.
             * @function verify
             * @memberof ExternalContent.V1.GetUserExternalReelsResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetUserExternalReelsResponse.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.reelsFeed != null && $Object.hasOwnProperty.call(message, "reelsFeed")) {
                    var error = $root.Common.V1.ResourceToken.verify(message.reelsFeed, _depth + 1);
                    if (error)
                        return "reelsFeed." + error;
                }
                return null;
            };

            /**
             * Creates a GetUserExternalReelsResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ExternalContent.V1.GetUserExternalReelsResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ExternalContent.V1.GetUserExternalReelsResponse} GetUserExternalReelsResponse
             */
            GetUserExternalReelsResponse.fromObject = function (object, _depth) {
                if (object instanceof $root.ExternalContent.V1.GetUserExternalReelsResponse)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".ExternalContent.V1.GetUserExternalReelsResponse: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.ExternalContent.V1.GetUserExternalReelsResponse();
                if (object.reelsFeed != null) {
                    if (!$util.isObject(object.reelsFeed))
                        throw $TypeError(".ExternalContent.V1.GetUserExternalReelsResponse.reelsFeed: object expected");
                    message.reelsFeed = $root.Common.V1.ResourceToken.fromObject(object.reelsFeed, _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from a GetUserExternalReelsResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ExternalContent.V1.GetUserExternalReelsResponse
             * @static
             * @param {ExternalContent.V1.GetUserExternalReelsResponse} message GetUserExternalReelsResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetUserExternalReelsResponse.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.defaults)
                    object.reelsFeed = null;
                if (message.reelsFeed != null && $Object.hasOwnProperty.call(message, "reelsFeed"))
                    object.reelsFeed = $root.Common.V1.ResourceToken.toObject(message.reelsFeed, options, _depth + 1);
                return object;
            };

            /**
             * Converts this GetUserExternalReelsResponse to JSON.
             * @function toJSON
             * @memberof ExternalContent.V1.GetUserExternalReelsResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetUserExternalReelsResponse.prototype.toJSON = function() {
                return GetUserExternalReelsResponse.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for GetUserExternalReelsResponse
             * @function getTypeUrl
             * @memberof ExternalContent.V1.GetUserExternalReelsResponse
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            GetUserExternalReelsResponse.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/ExternalContent.V1.GetUserExternalReelsResponse";
            };

            return GetUserExternalReelsResponse;
        })();

        V1.ExternalReviewPublicView = (function() {

            /**
             * Properties of an ExternalReviewPublicView.
             * @typedef {Object} ExternalContent.V1.ExternalReviewPublicView.$Properties
             * @property {Common.V1.ResourceId.$Properties|null} [externalReelId] ExternalReviewPublicView externalReelId
             * @property {Common.V1.ResourceId.$Properties|null} [externalReelLink] ExternalReviewPublicView externalReelLink
             * @property {Common.V1.ResourceToken.$Properties|null} [externalFeedId] ExternalReviewPublicView externalFeedId
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an ExternalReviewPublicView.
             * @memberof ExternalContent.V1
             * @interface IExternalReviewPublicView
             * @augments ExternalContent.V1.ExternalReviewPublicView.$Properties
             * @deprecated Use ExternalContent.V1.ExternalReviewPublicView.$Properties instead.
             */

            /**
             * Shape of an ExternalReviewPublicView.
             * @typedef {ExternalContent.V1.ExternalReviewPublicView.$Properties} ExternalContent.V1.ExternalReviewPublicView.$Shape
             */

            /**
             * Constructs a new ExternalReviewPublicView.
             * @memberof ExternalContent.V1
             * @classdesc Represents an ExternalReviewPublicView.
             * @constructor
             * @param {ExternalContent.V1.ExternalReviewPublicView.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var ExternalReviewPublicView = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * ExternalReviewPublicView externalReelId.
             * @member {Common.V1.ResourceId.$Properties|null|undefined} externalReelId
             * @memberof ExternalContent.V1.ExternalReviewPublicView
             * @instance
             */
            ExternalReviewPublicView.prototype.externalReelId = null;

            /**
             * ExternalReviewPublicView externalReelLink.
             * @member {Common.V1.ResourceId.$Properties|null|undefined} externalReelLink
             * @memberof ExternalContent.V1.ExternalReviewPublicView
             * @instance
             */
            ExternalReviewPublicView.prototype.externalReelLink = null;

            /**
             * ExternalReviewPublicView externalFeedId.
             * @member {Common.V1.ResourceToken.$Properties|null|undefined} externalFeedId
             * @memberof ExternalContent.V1.ExternalReviewPublicView
             * @instance
             */
            ExternalReviewPublicView.prototype.externalFeedId = null;

            /**
             * Creates a new ExternalReviewPublicView instance using the specified properties.
             * @function create
             * @memberof ExternalContent.V1.ExternalReviewPublicView
             * @static
             * @param {ExternalContent.V1.ExternalReviewPublicView.$Properties=} [properties] Properties to set
             * @returns {ExternalContent.V1.ExternalReviewPublicView} ExternalReviewPublicView instance
             * @type {{
             *   (properties: ExternalContent.V1.ExternalReviewPublicView.$Shape): ExternalContent.V1.ExternalReviewPublicView & ExternalContent.V1.ExternalReviewPublicView.$Shape;
             *   (properties?: ExternalContent.V1.ExternalReviewPublicView.$Properties): ExternalContent.V1.ExternalReviewPublicView;
             * }}
             */
            ExternalReviewPublicView.create = function(properties) {
                return new ExternalReviewPublicView(properties);
            };

            /**
             * Encodes the specified ExternalReviewPublicView message. Does not implicitly {@link ExternalContent.V1.ExternalReviewPublicView.verify|verify} messages.
             * @function encode
             * @memberof ExternalContent.V1.ExternalReviewPublicView
             * @static
             * @param {ExternalContent.V1.ExternalReviewPublicView.$Properties} message ExternalReviewPublicView message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExternalReviewPublicView.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.externalReelId != null && $Object.hasOwnProperty.call(message, "externalReelId"))
                    $root.Common.V1.ResourceId.encode(message.externalReelId, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.externalReelLink != null && $Object.hasOwnProperty.call(message, "externalReelLink"))
                    $root.Common.V1.ResourceId.encode(message.externalReelLink, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.externalFeedId != null && $Object.hasOwnProperty.call(message, "externalFeedId"))
                    $root.Common.V1.ResourceToken.encode(message.externalFeedId, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified ExternalReviewPublicView message, length delimited. Does not implicitly {@link ExternalContent.V1.ExternalReviewPublicView.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ExternalContent.V1.ExternalReviewPublicView
             * @static
             * @param {ExternalContent.V1.ExternalReviewPublicView.$Properties} message ExternalReviewPublicView message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExternalReviewPublicView.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes an ExternalReviewPublicView message from the specified reader or buffer.
             * @function decode
             * @memberof ExternalContent.V1.ExternalReviewPublicView
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ExternalContent.V1.ExternalReviewPublicView & ExternalContent.V1.ExternalReviewPublicView.$Shape} ExternalReviewPublicView
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExternalReviewPublicView.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.ExternalContent.V1.ExternalReviewPublicView(), value;
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
                            message.externalReelId = $root.Common.V1.ResourceId.decode(reader, reader.uint32(), $undefined, _depth + 1, message.externalReelId);
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.externalReelLink = $root.Common.V1.ResourceId.decode(reader, reader.uint32(), $undefined, _depth + 1, message.externalReelLink);
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.externalFeedId = $root.Common.V1.ResourceToken.decode(reader, reader.uint32(), $undefined, _depth + 1, message.externalFeedId);
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
             * Decodes an ExternalReviewPublicView message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ExternalContent.V1.ExternalReviewPublicView
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ExternalContent.V1.ExternalReviewPublicView & ExternalContent.V1.ExternalReviewPublicView.$Shape} ExternalReviewPublicView
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExternalReviewPublicView.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ExternalReviewPublicView message.
             * @function verify
             * @memberof ExternalContent.V1.ExternalReviewPublicView
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExternalReviewPublicView.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.externalReelId != null && $Object.hasOwnProperty.call(message, "externalReelId")) {
                    var error = $root.Common.V1.ResourceId.verify(message.externalReelId, _depth + 1);
                    if (error)
                        return "externalReelId." + error;
                }
                if (message.externalReelLink != null && $Object.hasOwnProperty.call(message, "externalReelLink")) {
                    var error = $root.Common.V1.ResourceId.verify(message.externalReelLink, _depth + 1);
                    if (error)
                        return "externalReelLink." + error;
                }
                if (message.externalFeedId != null && $Object.hasOwnProperty.call(message, "externalFeedId")) {
                    var error = $root.Common.V1.ResourceToken.verify(message.externalFeedId, _depth + 1);
                    if (error)
                        return "externalFeedId." + error;
                }
                return null;
            };

            /**
             * Creates an ExternalReviewPublicView message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ExternalContent.V1.ExternalReviewPublicView
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ExternalContent.V1.ExternalReviewPublicView} ExternalReviewPublicView
             */
            ExternalReviewPublicView.fromObject = function (object, _depth) {
                if (object instanceof $root.ExternalContent.V1.ExternalReviewPublicView)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".ExternalContent.V1.ExternalReviewPublicView: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.ExternalContent.V1.ExternalReviewPublicView();
                if (object.externalReelId != null) {
                    if (!$util.isObject(object.externalReelId))
                        throw $TypeError(".ExternalContent.V1.ExternalReviewPublicView.externalReelId: object expected");
                    message.externalReelId = $root.Common.V1.ResourceId.fromObject(object.externalReelId, _depth + 1);
                }
                if (object.externalReelLink != null) {
                    if (!$util.isObject(object.externalReelLink))
                        throw $TypeError(".ExternalContent.V1.ExternalReviewPublicView.externalReelLink: object expected");
                    message.externalReelLink = $root.Common.V1.ResourceId.fromObject(object.externalReelLink, _depth + 1);
                }
                if (object.externalFeedId != null) {
                    if (!$util.isObject(object.externalFeedId))
                        throw $TypeError(".ExternalContent.V1.ExternalReviewPublicView.externalFeedId: object expected");
                    message.externalFeedId = $root.Common.V1.ResourceToken.fromObject(object.externalFeedId, _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from an ExternalReviewPublicView message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ExternalContent.V1.ExternalReviewPublicView
             * @static
             * @param {ExternalContent.V1.ExternalReviewPublicView} message ExternalReviewPublicView
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ExternalReviewPublicView.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.defaults) {
                    object.externalReelId = null;
                    object.externalReelLink = null;
                    object.externalFeedId = null;
                }
                if (message.externalReelId != null && $Object.hasOwnProperty.call(message, "externalReelId"))
                    object.externalReelId = $root.Common.V1.ResourceId.toObject(message.externalReelId, options, _depth + 1);
                if (message.externalReelLink != null && $Object.hasOwnProperty.call(message, "externalReelLink"))
                    object.externalReelLink = $root.Common.V1.ResourceId.toObject(message.externalReelLink, options, _depth + 1);
                if (message.externalFeedId != null && $Object.hasOwnProperty.call(message, "externalFeedId"))
                    object.externalFeedId = $root.Common.V1.ResourceToken.toObject(message.externalFeedId, options, _depth + 1);
                return object;
            };

            /**
             * Converts this ExternalReviewPublicView to JSON.
             * @function toJSON
             * @memberof ExternalContent.V1.ExternalReviewPublicView
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ExternalReviewPublicView.prototype.toJSON = function() {
                return ExternalReviewPublicView.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for ExternalReviewPublicView
             * @function getTypeUrl
             * @memberof ExternalContent.V1.ExternalReviewPublicView
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            ExternalReviewPublicView.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/ExternalContent.V1.ExternalReviewPublicView";
            };

            return ExternalReviewPublicView;
        })();

        return V1;
    })();

    return ExternalContent;
})();

$root.Impactyn = (function() {

    /**
     * Namespace Impactyn.
     * @exports Impactyn
     * @namespace
     */
    var Impactyn = {};

    Impactyn.Contracts = (function() {

        /**
         * Namespace Contracts.
         * @memberof Impactyn
         * @namespace
         */
        var Contracts = {};

        Contracts.IndexListPage = (function() {

            /**
             * Namespace IndexListPage.
             * @memberof Impactyn.Contracts
             * @namespace
             */
            var IndexListPage = {};

            IndexListPage.V1 = (function() {

                /**
                 * Namespace V1.
                 * @memberof Impactyn.Contracts.IndexListPage
                 * @namespace
                 */
                var V1 = {};

                V1.IndexListPageItem = (function() {

                    /**
                     * Properties of an IndexListPageItem.
                     * @typedef {Object} Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Properties
                     * @property {Common.V1.ResourceId.$Properties|null} [itemId] IndexListPageItem itemId
                     * @property {number|Long|null} [score] IndexListPageItem score
                     * @property {string|null} [sas] IndexListPageItem sas
                     * @property {Object.<string,string>|null} [decorations] IndexListPageItem decorations
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of an IndexListPageItem.
                     * @memberof Impactyn.Contracts.IndexListPage.V1
                     * @interface IIndexListPageItem
                     * @augments Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Properties
                     * @deprecated Use Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Properties instead.
                     */

                    /**
                     * Shape of an IndexListPageItem.
                     * @typedef {Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Properties} Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Shape
                     */

                    /**
                     * Constructs a new IndexListPageItem.
                     * @memberof Impactyn.Contracts.IndexListPage.V1
                     * @classdesc Represents an IndexListPageItem.
                     * @constructor
                     * @param {Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    var IndexListPageItem = function (properties) {
                        this.decorations = {};
                        if (properties)
                            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * IndexListPageItem itemId.
                     * @member {Common.V1.ResourceId.$Properties|null|undefined} itemId
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageItem
                     * @instance
                     */
                    IndexListPageItem.prototype.itemId = null;

                    /**
                     * IndexListPageItem score.
                     * @member {number|Long} score
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageItem
                     * @instance
                     */
                    IndexListPageItem.prototype.score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * IndexListPageItem sas.
                     * @member {string} sas
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageItem
                     * @instance
                     */
                    IndexListPageItem.prototype.sas = "";

                    /**
                     * IndexListPageItem decorations.
                     * @member {Object.<string,string>} decorations
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageItem
                     * @instance
                     */
                    IndexListPageItem.prototype.decorations = $util.emptyObject;

                    /**
                     * Creates a new IndexListPageItem instance using the specified properties.
                     * @function create
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageItem
                     * @static
                     * @param {Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Properties=} [properties] Properties to set
                     * @returns {Impactyn.Contracts.IndexListPage.V1.IndexListPageItem} IndexListPageItem instance
                     * @type {{
                     *   (properties: Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Shape): Impactyn.Contracts.IndexListPage.V1.IndexListPageItem & Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Shape;
                     *   (properties?: Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Properties): Impactyn.Contracts.IndexListPage.V1.IndexListPageItem;
                     * }}
                     */
                    IndexListPageItem.create = function(properties) {
                        return new IndexListPageItem(properties);
                    };

                    /**
                     * Encodes the specified IndexListPageItem message. Does not implicitly {@link Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.verify|verify} messages.
                     * @function encode
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageItem
                     * @static
                     * @param {Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Properties} message IndexListPageItem message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    IndexListPageItem.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.itemId != null && $Object.hasOwnProperty.call(message, "itemId"))
                            $root.Common.V1.ResourceId.encode(message.itemId, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                        if (message.score != null && $Object.hasOwnProperty.call(message, "score") && (typeof message.score === "object" ? message.score.low || message.score.high : message.score !== 0))
                            writer.uint32(/* id 2, wireType 1 =*/17).sfixed64(message.score);
                        if (message.sas != null && $Object.hasOwnProperty.call(message, "sas") && message.sas !== "")
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.sas);
                        if (message.decorations != null && $Object.hasOwnProperty.call(message, "decorations"))
                            for (var keys = $Object.keys(message.decorations), i = 0; i < keys.length; ++i)
                                writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.decorations[keys[i]]).ldelim();
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (var i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified IndexListPageItem message, length delimited. Does not implicitly {@link Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageItem
                     * @static
                     * @param {Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Properties} message IndexListPageItem message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    IndexListPageItem.encodeDelimited = function(message, writer) {
                        return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                    };

                    /**
                     * Decodes an IndexListPageItem message from the specified reader or buffer.
                     * @function decode
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageItem
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Impactyn.Contracts.IndexListPage.V1.IndexListPageItem & Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Shape} IndexListPageItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    IndexListPageItem.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Impactyn.Contracts.IndexListPage.V1.IndexListPageItem(), key, value;
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
                                    message.itemId = $root.Common.V1.ResourceId.decode(reader, reader.uint32(), $undefined, _depth + 1, message.itemId);
                                    continue;
                                }
                            case 2: {
                                    if (wireType !== 1)
                                        break;
                                    if (typeof (value = reader.sfixed64()) === "object" ? value.low || value.high : value !== 0)
                                        message.score = value;
                                    else
                                        delete message.score;
                                    continue;
                                }
                            case 3: {
                                    if (wireType !== 2)
                                        break;
                                    if ((value = reader.stringVerify()).length)
                                        message.sas = value;
                                    else
                                        delete message.sas;
                                    continue;
                                }
                            case 4: {
                                    if (wireType !== 2)
                                        break;
                                    if (message.decorations === $util.emptyObject)
                                        message.decorations = {};
                                    var end2 = reader.uint32() + reader.pos;
                                    key = "";
                                    value = "";
                                    while (reader.pos < end2) {
                                        var tag2 = reader.tag();
                                        wireType = tag2 & 7;
                                        switch (tag2 >>>= 3) {
                                        case 1:
                                            if (wireType !== 2)
                                                break;
                                            key = reader.stringVerify();
                                            continue;
                                        case 2:
                                            if (wireType !== 2)
                                                break;
                                            value = reader.stringVerify();
                                            continue;
                                        }
                                        reader.skipType(wireType, _depth, tag2);
                                    }
                                    if (key === "__proto__")
                                        $util.makeProp(message.decorations, key);
                                    message.decorations[key] = value;
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
                     * Decodes an IndexListPageItem message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageItem
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Impactyn.Contracts.IndexListPage.V1.IndexListPageItem & Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Shape} IndexListPageItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    IndexListPageItem.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an IndexListPageItem message.
                     * @function verify
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageItem
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    IndexListPageItem.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.itemId != null && $Object.hasOwnProperty.call(message, "itemId")) {
                            var error = $root.Common.V1.ResourceId.verify(message.itemId, _depth + 1);
                            if (error)
                                return "itemId." + error;
                        }
                        if (message.score != null && $Object.hasOwnProperty.call(message, "score"))
                            if (!$util.isInteger(message.score) && !(message.score && $util.isInteger(message.score.low) && $util.isInteger(message.score.high)))
                                return "score: integer|Long expected";
                        if (message.sas != null && $Object.hasOwnProperty.call(message, "sas"))
                            if (!$util.isString(message.sas))
                                return "sas: string expected";
                        if (message.decorations != null && $Object.hasOwnProperty.call(message, "decorations")) {
                            if (!$util.isObject(message.decorations))
                                return "decorations: object expected";
                            var key = $Object.keys(message.decorations);
                            for (var i = 0; i < key.length; ++i)
                                if (!$util.isString(message.decorations[key[i]]))
                                    return "decorations: string{k:string} expected";
                        }
                        return null;
                    };

                    /**
                     * Creates an IndexListPageItem message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageItem
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Impactyn.Contracts.IndexListPage.V1.IndexListPageItem} IndexListPageItem
                     */
                    IndexListPageItem.fromObject = function (object, _depth) {
                        if (object instanceof $root.Impactyn.Contracts.IndexListPage.V1.IndexListPageItem)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".Impactyn.Contracts.IndexListPage.V1.IndexListPageItem: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var message = new $root.Impactyn.Contracts.IndexListPage.V1.IndexListPageItem();
                        if (object.itemId != null) {
                            if (!$util.isObject(object.itemId))
                                throw $TypeError(".Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.itemId: object expected");
                            message.itemId = $root.Common.V1.ResourceId.fromObject(object.itemId, _depth + 1);
                        }
                        if (object.score != null)
                            if (typeof object.score === "object" ? object.score.low || object.score.high : $Number(object.score) !== 0)
                                if ($util.Long)
                                    message.score = $util.Long.fromValue(object.score, false);
                                else if (typeof object.score === "string")
                                    message.score = $parseInt(object.score, 10);
                                else if (typeof object.score === "number")
                                    message.score = object.score;
                                else if (typeof object.score === "object")
                                    message.score = new $util.LongBits(object.score.low >>> 0, object.score.high >>> 0).toNumber();
                        if (object.sas != null)
                            if (typeof object.sas !== "string" || object.sas.length)
                                message.sas = $String(object.sas);
                        if (object.decorations) {
                            if (!$util.isObject(object.decorations))
                                throw $TypeError(".Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.decorations: object expected");
                            message.decorations = {};
                            for (var keys = $Object.keys(object.decorations), i = 0; i < keys.length; ++i) {
                                if (keys[i] === "__proto__")
                                    $util.makeProp(message.decorations, keys[i]);
                                message.decorations[keys[i]] = $String(object.decorations[keys[i]]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an IndexListPageItem message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageItem
                     * @static
                     * @param {Impactyn.Contracts.IndexListPage.V1.IndexListPageItem} message IndexListPageItem
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    IndexListPageItem.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var object = {};
                        if (options.objects || options.defaults)
                            object.decorations = {};
                        if (options.defaults) {
                            object.itemId = null;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.score = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                            } else
                                object.score = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                            object.sas = "";
                        }
                        if (message.itemId != null && $Object.hasOwnProperty.call(message, "itemId"))
                            object.itemId = $root.Common.V1.ResourceId.toObject(message.itemId, options, _depth + 1);
                        if (message.score != null && $Object.hasOwnProperty.call(message, "score"))
                            if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                                object.score = typeof message.score === "number" ? $BigInt(message.score) : $util.Long.fromBits(message.score.low >>> 0, message.score.high >>> 0, false).toBigInt();
                            else if (typeof message.score === "number")
                                object.score = options.longs === $String ? $String(message.score) : message.score;
                            else
                                object.score = options.longs === $String ? $util.Long.prototype.toString.call(message.score) : options.longs === $Number ? new $util.LongBits(message.score.low >>> 0, message.score.high >>> 0).toNumber() : message.score;
                        if (message.sas != null && $Object.hasOwnProperty.call(message, "sas"))
                            object.sas = message.sas;
                        var keys2;
                        if (message.decorations && (keys2 = $Object.keys(message.decorations)).length) {
                            object.decorations = {};
                            for (var j = 0; j < keys2.length; ++j) {
                                if (keys2[j] === "__proto__")
                                    $util.makeProp(object.decorations, keys2[j]);
                                object.decorations[keys2[j]] = message.decorations[keys2[j]];
                            }
                        }
                        return object;
                    };

                    /**
                     * Converts this IndexListPageItem to JSON.
                     * @function toJSON
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageItem
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    IndexListPageItem.prototype.toJSON = function() {
                        return IndexListPageItem.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for IndexListPageItem
                     * @function getTypeUrl
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageItem
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    IndexListPageItem.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/Impactyn.Contracts.IndexListPage.V1.IndexListPageItem";
                    };

                    return IndexListPageItem;
                })();

                V1.IndexListPageResource = (function() {

                    /**
                     * Properties of an IndexListPageResource.
                     * @typedef {Object} Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Properties
                     * @property {Common.V1.ResourceId.$Properties|null} [nextPage] IndexListPageResource nextPage
                     * @property {Array.<Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Properties>|null} [items] IndexListPageResource items
                     * @property {string|null} [sas] IndexListPageResource sas
                     * @property {string|null} [nextPageSas] IndexListPageResource nextPageSas
                     * @property {google.protobuf.Timestamp.$Properties|null} [notAfter] IndexListPageResource notAfter
                     * @property {google.protobuf.Timestamp.$Properties|null} [refreshAt] IndexListPageResource refreshAt
                     * @property {number|Long|null} [listCount] IndexListPageResource listCount
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of an IndexListPageResource.
                     * @memberof Impactyn.Contracts.IndexListPage.V1
                     * @interface IIndexListPageResource
                     * @augments Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Properties
                     * @deprecated Use Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Properties instead.
                     */

                    /**
                     * Shape of an IndexListPageResource.
                     * @typedef {Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Properties} Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Shape
                     */

                    /**
                     * Constructs a new IndexListPageResource.
                     * @memberof Impactyn.Contracts.IndexListPage.V1
                     * @classdesc Represents an IndexListPageResource.
                     * @constructor
                     * @param {Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    var IndexListPageResource = function (properties) {
                        this.items = [];
                        if (properties)
                            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * IndexListPageResource nextPage.
                     * @member {Common.V1.ResourceId.$Properties|null|undefined} nextPage
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageResource
                     * @instance
                     */
                    IndexListPageResource.prototype.nextPage = null;

                    /**
                     * IndexListPageResource items.
                     * @member {Array.<Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Properties>} items
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageResource
                     * @instance
                     */
                    IndexListPageResource.prototype.items = $util.emptyArray;

                    /**
                     * IndexListPageResource sas.
                     * @member {string} sas
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageResource
                     * @instance
                     */
                    IndexListPageResource.prototype.sas = "";

                    /**
                     * IndexListPageResource nextPageSas.
                     * @member {string} nextPageSas
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageResource
                     * @instance
                     */
                    IndexListPageResource.prototype.nextPageSas = "";

                    /**
                     * IndexListPageResource notAfter.
                     * @member {google.protobuf.Timestamp.$Properties|null|undefined} notAfter
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageResource
                     * @instance
                     */
                    IndexListPageResource.prototype.notAfter = null;

                    /**
                     * IndexListPageResource refreshAt.
                     * @member {google.protobuf.Timestamp.$Properties|null|undefined} refreshAt
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageResource
                     * @instance
                     */
                    IndexListPageResource.prototype.refreshAt = null;

                    /**
                     * IndexListPageResource listCount.
                     * @member {number|Long} listCount
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageResource
                     * @instance
                     */
                    IndexListPageResource.prototype.listCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new IndexListPageResource instance using the specified properties.
                     * @function create
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageResource
                     * @static
                     * @param {Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Properties=} [properties] Properties to set
                     * @returns {Impactyn.Contracts.IndexListPage.V1.IndexListPageResource} IndexListPageResource instance
                     * @type {{
                     *   (properties: Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Shape): Impactyn.Contracts.IndexListPage.V1.IndexListPageResource & Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Shape;
                     *   (properties?: Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Properties): Impactyn.Contracts.IndexListPage.V1.IndexListPageResource;
                     * }}
                     */
                    IndexListPageResource.create = function(properties) {
                        return new IndexListPageResource(properties);
                    };

                    /**
                     * Encodes the specified IndexListPageResource message. Does not implicitly {@link Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.verify|verify} messages.
                     * @function encode
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageResource
                     * @static
                     * @param {Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Properties} message IndexListPageResource message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    IndexListPageResource.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.nextPage != null && $Object.hasOwnProperty.call(message, "nextPage"))
                            $root.Common.V1.ResourceId.encode(message.nextPage, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                        if (message.items != null && message.items.length)
                            for (var i = 0; i < message.items.length; ++i)
                                $root.Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.encode(message.items[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                        if (message.sas != null && $Object.hasOwnProperty.call(message, "sas") && message.sas !== "")
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.sas);
                        if (message.nextPageSas != null && $Object.hasOwnProperty.call(message, "nextPageSas") && message.nextPageSas !== "")
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.nextPageSas);
                        if (message.notAfter != null && $Object.hasOwnProperty.call(message, "notAfter"))
                            $root.google.protobuf.Timestamp.encode(message.notAfter, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
                        if (message.refreshAt != null && $Object.hasOwnProperty.call(message, "refreshAt"))
                            $root.google.protobuf.Timestamp.encode(message.refreshAt, writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
                        if (message.listCount != null && $Object.hasOwnProperty.call(message, "listCount") && (typeof message.listCount === "object" ? message.listCount.low || message.listCount.high : message.listCount !== 0))
                            writer.uint32(/* id 7, wireType 1 =*/57).sfixed64(message.listCount);
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (var i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified IndexListPageResource message, length delimited. Does not implicitly {@link Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageResource
                     * @static
                     * @param {Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Properties} message IndexListPageResource message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    IndexListPageResource.encodeDelimited = function(message, writer) {
                        return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                    };

                    /**
                     * Decodes an IndexListPageResource message from the specified reader or buffer.
                     * @function decode
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageResource
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {Impactyn.Contracts.IndexListPage.V1.IndexListPageResource & Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Shape} IndexListPageResource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    IndexListPageResource.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Impactyn.Contracts.IndexListPage.V1.IndexListPageResource(), value;
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
                                    message.nextPage = $root.Common.V1.ResourceId.decode(reader, reader.uint32(), $undefined, _depth + 1, message.nextPage);
                                    continue;
                                }
                            case 2: {
                                    if (wireType !== 2)
                                        break;
                                    if (!(message.items && message.items.length))
                                        message.items = [];
                                    message.items.push($root.Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.decode(reader, reader.uint32(), $undefined, _depth + 1));
                                    continue;
                                }
                            case 3: {
                                    if (wireType !== 2)
                                        break;
                                    if ((value = reader.stringVerify()).length)
                                        message.sas = value;
                                    else
                                        delete message.sas;
                                    continue;
                                }
                            case 4: {
                                    if (wireType !== 2)
                                        break;
                                    if ((value = reader.stringVerify()).length)
                                        message.nextPageSas = value;
                                    else
                                        delete message.nextPageSas;
                                    continue;
                                }
                            case 5: {
                                    if (wireType !== 2)
                                        break;
                                    message.notAfter = $root.google.protobuf.Timestamp.decode(reader, reader.uint32(), $undefined, _depth + 1, message.notAfter);
                                    continue;
                                }
                            case 6: {
                                    if (wireType !== 2)
                                        break;
                                    message.refreshAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32(), $undefined, _depth + 1, message.refreshAt);
                                    continue;
                                }
                            case 7: {
                                    if (wireType !== 1)
                                        break;
                                    if (typeof (value = reader.sfixed64()) === "object" ? value.low || value.high : value !== 0)
                                        message.listCount = value;
                                    else
                                        delete message.listCount;
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
                     * Decodes an IndexListPageResource message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageResource
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {Impactyn.Contracts.IndexListPage.V1.IndexListPageResource & Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Shape} IndexListPageResource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    IndexListPageResource.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an IndexListPageResource message.
                     * @function verify
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageResource
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    IndexListPageResource.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.nextPage != null && $Object.hasOwnProperty.call(message, "nextPage")) {
                            var error = $root.Common.V1.ResourceId.verify(message.nextPage, _depth + 1);
                            if (error)
                                return "nextPage." + error;
                        }
                        if (message.items != null && $Object.hasOwnProperty.call(message, "items")) {
                            if (!$Array.isArray(message.items))
                                return "items: array expected";
                            for (var i = 0; i < message.items.length; ++i) {
                                var error = $root.Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.verify(message.items[i], _depth + 1);
                                if (error)
                                    return "items." + error;
                            }
                        }
                        if (message.sas != null && $Object.hasOwnProperty.call(message, "sas"))
                            if (!$util.isString(message.sas))
                                return "sas: string expected";
                        if (message.nextPageSas != null && $Object.hasOwnProperty.call(message, "nextPageSas"))
                            if (!$util.isString(message.nextPageSas))
                                return "nextPageSas: string expected";
                        if (message.notAfter != null && $Object.hasOwnProperty.call(message, "notAfter")) {
                            var error = $root.google.protobuf.Timestamp.verify(message.notAfter, _depth + 1);
                            if (error)
                                return "notAfter." + error;
                        }
                        if (message.refreshAt != null && $Object.hasOwnProperty.call(message, "refreshAt")) {
                            var error = $root.google.protobuf.Timestamp.verify(message.refreshAt, _depth + 1);
                            if (error)
                                return "refreshAt." + error;
                        }
                        if (message.listCount != null && $Object.hasOwnProperty.call(message, "listCount"))
                            if (!$util.isInteger(message.listCount) && !(message.listCount && $util.isInteger(message.listCount.low) && $util.isInteger(message.listCount.high)))
                                return "listCount: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates an IndexListPageResource message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageResource
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {Impactyn.Contracts.IndexListPage.V1.IndexListPageResource} IndexListPageResource
                     */
                    IndexListPageResource.fromObject = function (object, _depth) {
                        if (object instanceof $root.Impactyn.Contracts.IndexListPage.V1.IndexListPageResource)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".Impactyn.Contracts.IndexListPage.V1.IndexListPageResource: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var message = new $root.Impactyn.Contracts.IndexListPage.V1.IndexListPageResource();
                        if (object.nextPage != null) {
                            if (!$util.isObject(object.nextPage))
                                throw $TypeError(".Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.nextPage: object expected");
                            message.nextPage = $root.Common.V1.ResourceId.fromObject(object.nextPage, _depth + 1);
                        }
                        if (object.items) {
                            if (!$Array.isArray(object.items))
                                throw $TypeError(".Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.items: array expected");
                            message.items = $Array(object.items.length);
                            for (var i = 0; i < object.items.length; ++i) {
                                if (!$util.isObject(object.items[i]))
                                    throw $TypeError(".Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.items: object expected");
                                message.items[i] = $root.Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.fromObject(object.items[i], _depth + 1);
                            }
                        }
                        if (object.sas != null)
                            if (typeof object.sas !== "string" || object.sas.length)
                                message.sas = $String(object.sas);
                        if (object.nextPageSas != null)
                            if (typeof object.nextPageSas !== "string" || object.nextPageSas.length)
                                message.nextPageSas = $String(object.nextPageSas);
                        if (object.notAfter != null) {
                            if (!$util.isObject(object.notAfter))
                                throw $TypeError(".Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.notAfter: object expected");
                            message.notAfter = $root.google.protobuf.Timestamp.fromObject(object.notAfter, _depth + 1);
                        }
                        if (object.refreshAt != null) {
                            if (!$util.isObject(object.refreshAt))
                                throw $TypeError(".Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.refreshAt: object expected");
                            message.refreshAt = $root.google.protobuf.Timestamp.fromObject(object.refreshAt, _depth + 1);
                        }
                        if (object.listCount != null)
                            if (typeof object.listCount === "object" ? object.listCount.low || object.listCount.high : $Number(object.listCount) !== 0)
                                if ($util.Long)
                                    message.listCount = $util.Long.fromValue(object.listCount, false);
                                else if (typeof object.listCount === "string")
                                    message.listCount = $parseInt(object.listCount, 10);
                                else if (typeof object.listCount === "number")
                                    message.listCount = object.listCount;
                                else if (typeof object.listCount === "object")
                                    message.listCount = new $util.LongBits(object.listCount.low >>> 0, object.listCount.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from an IndexListPageResource message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageResource
                     * @static
                     * @param {Impactyn.Contracts.IndexListPage.V1.IndexListPageResource} message IndexListPageResource
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    IndexListPageResource.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.items = [];
                        if (options.defaults) {
                            object.nextPage = null;
                            object.sas = "";
                            object.nextPageSas = "";
                            object.notAfter = null;
                            object.refreshAt = null;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.listCount = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                            } else
                                object.listCount = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                        }
                        if (message.nextPage != null && $Object.hasOwnProperty.call(message, "nextPage"))
                            object.nextPage = $root.Common.V1.ResourceId.toObject(message.nextPage, options, _depth + 1);
                        if (message.items && message.items.length) {
                            object.items = $Array(message.items.length);
                            for (var j = 0; j < message.items.length; ++j)
                                object.items[j] = $root.Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.toObject(message.items[j], options, _depth + 1);
                        }
                        if (message.sas != null && $Object.hasOwnProperty.call(message, "sas"))
                            object.sas = message.sas;
                        if (message.nextPageSas != null && $Object.hasOwnProperty.call(message, "nextPageSas"))
                            object.nextPageSas = message.nextPageSas;
                        if (message.notAfter != null && $Object.hasOwnProperty.call(message, "notAfter"))
                            object.notAfter = $root.google.protobuf.Timestamp.toObject(message.notAfter, options, _depth + 1);
                        if (message.refreshAt != null && $Object.hasOwnProperty.call(message, "refreshAt"))
                            object.refreshAt = $root.google.protobuf.Timestamp.toObject(message.refreshAt, options, _depth + 1);
                        if (message.listCount != null && $Object.hasOwnProperty.call(message, "listCount"))
                            if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                                object.listCount = typeof message.listCount === "number" ? $BigInt(message.listCount) : $util.Long.fromBits(message.listCount.low >>> 0, message.listCount.high >>> 0, false).toBigInt();
                            else if (typeof message.listCount === "number")
                                object.listCount = options.longs === $String ? $String(message.listCount) : message.listCount;
                            else
                                object.listCount = options.longs === $String ? $util.Long.prototype.toString.call(message.listCount) : options.longs === $Number ? new $util.LongBits(message.listCount.low >>> 0, message.listCount.high >>> 0).toNumber() : message.listCount;
                        return object;
                    };

                    /**
                     * Converts this IndexListPageResource to JSON.
                     * @function toJSON
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageResource
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    IndexListPageResource.prototype.toJSON = function() {
                        return IndexListPageResource.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for IndexListPageResource
                     * @function getTypeUrl
                     * @memberof Impactyn.Contracts.IndexListPage.V1.IndexListPageResource
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    IndexListPageResource.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/Impactyn.Contracts.IndexListPage.V1.IndexListPageResource";
                    };

                    return IndexListPageResource;
                })();

                return V1;
            })();

            return IndexListPage;
        })();

        return Contracts;
    })();

    return Impactyn;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @typedef {Object} google.protobuf.Timestamp.$Properties
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @augments google.protobuf.Timestamp.$Properties
             * @deprecated Use google.protobuf.Timestamp.$Properties instead.
             */

            /**
             * Shape of a Timestamp.
             * @typedef {google.protobuf.Timestamp.$Properties} google.protobuf.Timestamp.$Shape
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @constructor
             * @param {google.protobuf.Timestamp.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var Timestamp = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp.$Properties=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             * @type {{
             *   (properties: google.protobuf.Timestamp.$Shape): google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape;
             *   (properties?: google.protobuf.Timestamp.$Properties): google.protobuf.Timestamp;
             * }}
             */
            Timestamp.create = function(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp.$Properties} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.seconds != null && $Object.hasOwnProperty.call(message, "seconds") && (typeof message.seconds === "object" ? message.seconds.low || message.seconds.high : message.seconds !== 0))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && $Object.hasOwnProperty.call(message, "nanos") && message.nanos !== 0)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp.$Properties} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.Timestamp(), value;
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
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.seconds = value;
                            else
                                delete message.seconds;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.nanos = value;
                            else
                                delete message.nanos;
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
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.seconds != null && $Object.hasOwnProperty.call(message, "seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && $Object.hasOwnProperty.call(message, "nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function (object, _depth) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".google.protobuf.Timestamp: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if (typeof object.seconds === "object" ? object.seconds.low || object.seconds.high : $Number(object.seconds) !== 0)
                        if ($util.Long)
                            message.seconds = $util.Long.fromValue(object.seconds, false);
                        else if (typeof object.seconds === "string")
                            message.seconds = $parseInt(object.seconds, 10);
                        else if (typeof object.seconds === "number")
                            message.seconds = object.seconds;
                        else if (typeof object.seconds === "object")
                            message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    if ($Number(object.nanos) !== 0)
                        message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.seconds = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && $Object.hasOwnProperty.call(message, "seconds"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.seconds = typeof message.seconds === "number" ? $BigInt(message.seconds) : $util.Long.fromBits(message.seconds.low >>> 0, message.seconds.high >>> 0, false).toBigInt();
                    else if (typeof message.seconds === "number")
                        object.seconds = options.longs === $String ? $String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === $String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === $Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && $Object.hasOwnProperty.call(message, "nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function() {
                return Timestamp.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Timestamp
             * @function getTypeUrl
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Timestamp.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/google.protobuf.Timestamp";
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
