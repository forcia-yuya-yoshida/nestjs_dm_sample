import { DynamicModule, Module } from '@nestjs/common/index';
import { MainModule } from './modules/main.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

async function getDynamicImports(
  coop: string | undefined,
): Promise<DynamicModule[]> {
  if (coop === 'A') {
    const { CompanyAModule } = await import(
      './modules/coop/company-a/company-a.module'
    );
    return [CompanyAModule.register()];
  }
  if (coop === 'B') {
    const { CompanyBModule } = await import(
      './modules/coop/company-b/company-b.module'
    );
    return [CompanyBModule.register()];
  }
  return [];
}

@Module({})
export class AppModule {
  static async register(): Promise<DynamicModule> {
    const configModule = ConfigModule.forRoot({
      envFilePath: '.env',
    });
    const configService = new ConfigService();

    const dynamicImports = await getDynamicImports(configService.get('COOP'));
    return {
      module: AppModule,
      imports: [configModule, ...dynamicImports, MainModule],
      controllers: [],
      providers: [],
    };
  }
}
