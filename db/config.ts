import { defineDb, defineTable, column } from 'astro:db';

const ShortUrl = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    url: column.text(),
  }
});

export default defineDb({
  tables: { ShortUrl: ShortUrl },
});
