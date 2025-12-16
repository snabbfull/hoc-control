import { AdminPanel } from './components/AdminPanel';
import { withAuthorization } from './hoc/withAuthorization.tsx'
// Защита компонента

const ProtectedAdminPanel = withAuthorization(AdminPanel, ['admin']);

function App() {
  // Пример: авторизованный пользователь
  const user = { roles: ['user', 'editor'] };

  
  return (
    <div>
      {/* Доступ запрещён — покажет заглушку */}
      <ProtectedAdminPanel currentUser={user} />

      {/* Доступ разрешён */}
      <ProtectedAdminPanel currentUser={{ roles: ['admin'] }} />
    </div>
  );
}

export default App