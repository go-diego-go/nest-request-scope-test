import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { AppController } from "./app.controller";
import { AppModule } from "./app.module";
import { Interceptor } from "./interceptor";
import { MyResolver } from "./resolver";

@Module({
    imports: [
        AppModule,
        GraphQLModule.forRoot({
        typePaths: ['./**/*.graphql'],
        definitions: {
            path: join(process.cwd(), 'src/graphql.ts'),
        },
        }),
    ],
    controllers: [AppController],
    providers: [
        MyResolver,
        {
        provide: APP_INTERCEPTOR,
        useClass: Interceptor,
        },
    ]
}
)
export class OtherModule {}