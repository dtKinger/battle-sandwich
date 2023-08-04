module.exports = {
  
    presets: [["env", {"modules": false}]],
  
    plugins: ["syntax-dynamic-import"],
  
    env: {
      "test": {
        "plugins": ["dynamic-import-node"]
      }
    }
  
  // presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};


