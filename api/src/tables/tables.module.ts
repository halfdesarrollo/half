import { Module } from '@nestjs/common';
import { TablesService } from './tables.service';
import { TablesController } from './tables.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tables, TablesSchema } from './schema/tables.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tables.name, schema: TablesSchema }]),
  ],
  controllers: [TablesController],
  providers: [TablesService]
})
export class TablesModule {}
