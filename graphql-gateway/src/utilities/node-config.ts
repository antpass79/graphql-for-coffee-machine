import fs from 'fs';

export class NodeConfig {

    // data members

    private static _json: any;

    // public functions

    static init(configurationPath: string) {
        NodeConfig._json = this.readConfig(configurationPath);
    }

    static getValue(key: string) {

        return process.env[key] || NodeConfig._json[key];
    }

    // private functions

    private static readConfig(configurationPath: string) {

        let buffer = fs.readFileSync(configurationPath, { encoding: 'utf-8' });
        let jsonBuffer = buffer.toString();
        let jsonData = JSON.parse(jsonBuffer);

        return jsonData;
    }
}