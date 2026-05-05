import type { ReactNode } from "react"
import { userStorage } from "../../features/auth/model/userStorage"
import type { RoleType } from "../../shared/types/types"

const GuardPage = ({ children, approveRoles }: { children: ReactNode, approveRoles?: RoleType[] }) => {
  
  if (!!approveRoles?.length && !approveRoles.includes(userStorage.getUser()?.role)) {
    return <h1>Вы вкусили запретный плод!</h1>
  }

  return (
    <div>
      {children}
    </div>
  )
}

export default GuardPage