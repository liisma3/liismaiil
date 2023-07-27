import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import Spinner from '@/components/Spinner/Spinner';
//import { NextPage } from 'next';
const GET_PROFILES = gql`
  query GetProfiles {
    getProfiles {
      profile
    }
  }
`;
interface ProfileFeatures {
  login?: string;
  email: string;
}
/* interface dataProps {
  profile?: ProfileFeatures;
}
 */ const Profiles = async () => {
  const { loading, data, error } = await useQuery(GET_PROFILES);
  useEffect(() => {
    console.log({ error });
  }, [error]);
  try {
    if (data.length > 0 && !loading) {
      return data.map((profile: ProfileFeatures, index: number) => {
        return <div key={index}>{profile}</div>;
      });
    } else {
      return <Spinner />;
    }
  } catch (error) {
    console.log({ error });
  }
};

export default Profiles;
