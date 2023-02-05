// import { StatusFilter } from 'components/StatusFilter/StatusFilter';
// import { TaskCounter } from "components/TaskCounter/TaskCounter";
// import css from './AppBar.module.css';

// export const AppBar = () => {
//   return (
//     <header className={css.wrapper}>
//       <section className={css.section}>
//         <h2 className={css.title}>Tasks</h2>
//       </section>
//       <section className={css.section}>
//         <h2 className={css.title}>Filter by status</h2>
//       </section>
//     </header>
//   );
// };

import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
