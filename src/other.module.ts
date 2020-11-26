import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Interceptor } from "./interceptor";

@Module({
    imports: [AppModule],
    providers: [
        {
        provide: APP_INTERCEPTOR,
        useClass: Interceptor,
        },
    ]
}
)
export class OtherModule {}