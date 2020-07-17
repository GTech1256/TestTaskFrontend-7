import React from 'react';

import { AllRepositoriesQueryType } from '../../../../services/graphql/queries/getRepositories';
import RepositoryView from '../RepositoryView';


type Props = {
  className?: string
  reposetories: AllRepositoriesQueryType['search']['edges']
}

const RepositoriesView = ({
  className = '',
  reposetories
}: Props) => (
  <div className={`list-group ${className}`}>
    {reposetories.map(({ node: reposetory }) => <RepositoryView key={reposetory.url} {...reposetory} />)}
  </div>
)

export default RepositoriesView;