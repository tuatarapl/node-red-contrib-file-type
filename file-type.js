const FileType = require("file-type");

module.exports = function (RED) {
	function FileTypeNode(config) {
		RED.nodes.createNode(this, config);
		var node = this;
		node.on("input", async function (msg) {
			const fileType = await FileType.fromBuffer(msg.payload);
			node.send({ ...msg, fileType });
		});
	}
	RED.nodes.registerType("file-type", FileTypeNode);
};
