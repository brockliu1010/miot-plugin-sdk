'use strict';var e=require('commander'),n=require('path'),i=require("fs"),r=require("./config/common"),t=r.project_dir,o=r.API_LEVEL,c=r.SDK_VERSION;r.exec,r.execSync,r.makeDirs;e.version(c).usage("[options] <packageName>").description("\u751f\u6210\u9879\u76ee").parse(process.argv);try{!(function(){var r=e.args[0],a=n.join(t,"projects",r);if(i.existsSync(a))throw e.outputHelp(),"the package is exist or invalid package name";i.mkdirSync(a),i.writeFileSync(n.join(a,"project.json"),'{ \n        "package_path": "'+r+'",\n        "min_sdk_api_level":'+o+',\n        "developer_id": "'+(e.developer||'')+'",\n        "version_code":1\n    }'),i.writeFileSync(n.join(a,"package.json"),'{\n        "name": "project-'+r.replace(/[.]/g,'-')+'",\n        "version": "'+c+'",\n        "scripts":{\n            "start":"node ../../bin/runProject.js"\n        },\n        "dependencies":{\n            \n        }\n    }'),i.writeFileSync(n.join(a,"index.ios.js"),'import "./index.js";'),i.writeFileSync(n.join(a,"index.js"),'\n    import React from \'react\';\n    import { API_LEVEL, Package, Device, Service, Host } from \'miot\';\n    import { PackageEvent, DeviceEvent } from \'miot\';\n    import { View, Text } from \'react-native\';\n\n    class App extends React.Component {\n        render() {\n            return (\n            <View style={{ flex: 1, justifyContent: \'center\', alignItems: \'center\', backgroundColor: \'powderblue\' }}>\n            <Text>hello, this is a tiny plugin project of MIOT</Text>\n            <Text>API_LEVEL:{API_LEVEL}</Text>\n            <Text>NATIVE_API_LEVEL:{Host.apiLevel}</Text>\n            <Text>{Package.packageName}</Text>\n            <Text>models:{Package.models}</Text>\n            </View>\n            )\n        }\n    }\n    Package.entry(App, () => {\n        \n    })\n    '),i.mkdirSync(n.join(a,"resources")),i.mkdirSync(n.join(a,"build"))})()}catch(e){console.log(e)}