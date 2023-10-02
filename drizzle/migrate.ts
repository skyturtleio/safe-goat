import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { migrate } from 'drizzle-orm/libsql/migrator';
// import 'dotenv/config';

async function runMigrations() {
	const db = drizzle(
		createClient({
			url: process.env.TURSO_DB_URL as string,
			authToken: process.env.TURSO_DB_AUTH_TOKEN as string,
		}),
	);

	console.log('Running migrations');

	/**
	 * I initially used a relative path of `../../migrations`, but I kept
	 * getting an error. I'm not sure why the code below works, but I
	 * saw it from the example repot for SvelteKit, Turso, and Drizzle:
	 * https://github.com/justinfriebel/sveltekit-turso-drizzle/blob/b6ebcde91e052d47d526b1a6ee4e1e2ce22b8295/src/lib/server/migrate.ts
	 */
	await migrate(db, { migrationsFolder: 'drizzle/migrations' });

	console.log('Migrated successfully');

	process.exit(0);
}

runMigrations().catch((e) => {
	console.error('Error performing migrations', e);
	process.exit(1);
});
