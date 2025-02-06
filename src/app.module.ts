import { DynamicModule, Module } from '@nestjs/common/index';
import { MainModule } from './modules/main.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

async function getDynamicImports(
  coop: string | undefined,
): Promise<DynamicModule[]> {
  if (coop === 'fca') {
    const { FCAModule } = await import('./modules/coop/fca/fca.module');
    return [FCAModule.register()];
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
