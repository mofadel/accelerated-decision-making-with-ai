(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{TH39:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return h}));var a=n("wx14"),r=n("zLVn"),s=(n("q1tI"),n("7ljp")),o=n("013z"),p=(n("Kfvu"),n("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",t)}},i=c("PageDescription"),l=c("AnchorLinks"),b=c("AnchorLink"),m=c("Row"),d=c("Column"),u=c("ArticleCard"),O={_frontmatter:p},j=o.a;function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)(j,Object(a.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)(i,{mdxType:"PageDescription"},Object(s.b)("p",null,"To setup the application server, follow the following steps:"),Object(s.b)(l,{mdxType:"AnchorLinks"},Object(s.b)(b,{mdxType:"AnchorLink"},"Encrypt master and server password "),Object(s.b)(b,{mdxType:"AnchorLink"},"Install mvn dependencies and package "),Object(s.b)(b,{mdxType:"AnchorLink"},"Paste the Configurations YAML File "),Object(s.b)(b,{mdxType:"AnchorLink"},"Setup pgAdmin "),Object(s.b)(b,{mdxType:"AnchorLink"},"Run the Application Server "))),Object(s.b)("h2",null,"Encrypt master and server password"),Object(s.b)("p",null,"As described ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://maven.apache.org/guides/mini/guide-encryption.html"}),"here"),", encrypt the master and server password to allow access to the ungana-models from Jfog Artifactory."),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Create and encrypt master password with ")," "),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"mvn --encrypt-master-password\n"))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Store the generated encypted master password in ")," ",Object(s.b)("inlineCode",{parentName:"p"},"${user.home}/.m2/settings-security.xml")," ",Object(s.b)("strong",{parentName:"p"},"in this format ")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:"path=settings-security.xml",path:"settings-security.xml"}),"<settingsSecurity>\n<master>{ENCRYPTED_MASTER_PASSWORD}</master>\n</settingsSecurity>\n")),Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"N.B "),": If the .m2 folder does not exist, create it in the root directory then perform step 2")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Create and encypt sever password with ")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"mvn --encrypt-password\n"))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Store the generated encypted server password in ")," ",Object(s.b)("inlineCode",{parentName:"p"},"${user.home}/.m2/settings.xml")," ",Object(s.b)("strong",{parentName:"p"},"in this format ")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:"path=settings.xml",path:"settings.xml"}),"<settings>\n            <servers>\n                <server>\n                    <id>central</id>\n                    <username>SERVER_USERNAME</username>\n                    <password>{ENCRPTED_SERVER_PASSWORD}</password>\n                </server>\n                <server>\n                    <id>snapshots</id>\n                    <username>SERVER_USERNAME</username>\n                    <password>{ENCRPTED_SERVER_PASSWORD}</password>\n                </server>\n                <server>\n                    <id>na-artifactory</id>\n                    <username>SERVER_USERNAME</username>\n                    <password>{ENCRPTED_SERVER_PASSWORD}</password>\n                </server>\n                <server>\n                    <id>na-snapshots</id>\n                    <username>SERVER_USERNAME</username>\n                    <password>{ENCRPTED_SERVER_PASSWORD}</password>\n                </server>\n            </servers>\n        </settings>\n")))),Object(s.b)("h2",null,"Install mvn dependencies and package"),Object(s.b)("p",null,"In the AppServer directory, run the following command:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mvn clean package\n")),Object(s.b)("h2",null,"Create the configurations YAML file (application-local.yaml) using the following format:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:"path=ADMAI/AppServer/src/main/resources/application-local.yaml",path:"ADMAI/AppServer/src/main/resources/application-local.yaml"}),"    spring:\n        datasource:\n            jdbc-url: ${POSTGRES_URL}\n            username: ${POSTGRES_USERNAME}\n            password: ${POSTGRES_PASS}\n            driver-class-name: org.postgresql.Driver\n            platform: postgres\n            hikari:\n            connection-test-query: SELECT 1\n            connection-timeout: 60000\n            idle-timeout: 600000\n            max-lifetime: 1800000\n            maximum-pool-size: 20\n        jpa:\n            database: POSTGRESQL\n            show-sql: false\n            hibernate:\n            ddl-auto: update\n            properties:\n            hibernate:\n                dialect: org.hibernate.dialect.PostgreSQL95Dialect\n                format_sql: true\n                jdbc:\n                use_get_generated_keys: true\n                temp:\n                use_jdbc_metadata_defaults: false\n\n        app:\n        version: ${APP_VERSION}\n        hostname: ${HOSTNAME}\n        default_data_repo: ${COS_STORAGE}\n        default_environment_command_name: ${ENVIRONMENT_COMMAND_NAME}\n        job_batch_timeout: 12\n\n        authentication:\n        encryption:\n            key: ${ENCRYPTION_KEY}\n        key:\n            base64: ${KEY_64}\n            base64E: AQAB\n            base64N: ${KEY_64N}\n\n")),Object(s.b)("p",null,"Edit the credentials "),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"NOTE ")," The ",Object(s.b)("inlineCode",{parentName:"p"},"application-local.yaml")," file is the configuration file used to setup the server and add a database."),Object(s.b)("h2",null,"Setup pgAdmin"),Object(s.b)("p",null,"Using the credentials in the application-local.yaml file ",Object(s.b)("inlineCode",{parentName:"p"},"add a server")," and ",Object(s.b)("inlineCode",{parentName:"p"},"create a database")),Object(s.b)("h2",null,"Run the Application Server"),Object(s.b)("p",null,"Run the TaskClerkMainApplication.java file "),Object(s.b)("h2",null,"Continue setting up…"),Object(s.b)(m,{mdxType:"Row"},Object(s.b)(d,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(s.b)(u,{title:"The Dashboard",href:"/contribute/dashboard_setup",color:"dark",actionIcon:"arrowRight",mdxType:"ArticleCard"})),Object(s.b)(d,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(s.b)(u,{title:"The Job Deployment Service ",href:"/contribute/jobdeploymentservice_setup",actionIcon:"arrowRight",mdxType:"ArticleCard"}))))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-contribute-appserver-setup-mdx-a7b45cfb2036ef1dc33b.js.map