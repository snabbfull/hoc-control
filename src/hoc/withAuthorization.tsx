import type { ComponentType } from 'react';
import type { AuthProps } from '../types.ts';
import { AccessDenied } from '../components/AccessDenied';

export function withAuthorization<P extends AuthProps>(
  WrappedComponent: ComponentType<P>,
  allowedRoles: string[]
): ComponentType<P> {
  return function WithAuthorization(props: P) {
    const { currentUser } = props;

    // Проверка: пользователь не авторизован или нет ролей
    if (!currentUser || !Array.isArray(currentUser.roles)) {
      return <AccessDenied />;
    }

    // Проверка: есть ли у пользователя хотя бы одна разрешённая роль
    const hasAccess = currentUser.roles.some(role => allowedRoles.includes(role));

    if (!hasAccess) {
      return <AccessDenied />;
    }

    // Доступ разрешён — рендерим оригинальный компонент
    return <WrappedComponent {...props} />;
  };
}