import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import { Container, Content } from './styles';
import Button from '../../components/Button';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <Content>
        <Button onClick={signOut}>
          Logout
          <FiLogOut size={20} style={{ alignSelf: 'center', marginLeft: 10 }} />
        </Button>
      </Content>
    </Container>
  );
};

export default Dashboard;
