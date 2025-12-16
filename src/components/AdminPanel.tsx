import type { AuthProps } from '../types.ts';

export function AdminPanel({ currentUser }: AuthProps) {
  return (
    <div>
      <h1>Панель администратора</h1>
      <p>Привет, {currentUser?.roles.join(', ')}!</p>
    </div>
  );
}
