import dateScalar from "../dateScalar";
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
// import { policies } from "../mockData";
import { lowerCasedValues } from "../helpers/getLowercasedValues";
import { firebaseConfig } from "../config/firebase";

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const resolvers = {
  Date: dateScalar,
  Query: {
    // allPolicies: () => {
    //   const policies = getDocs(collection(db, "policies"))
    //     .then((snap) => {
    //       let policiesArr: any = [];
    //       snap.docs.map((doc) => {
    //         policiesArr.push(doc.data());
    //       });
    //       return policiesArr;
    //     })
    //     .catch((err) => console.log(err));
    //   return policies;
    // },
    filterPolicies: (parent: ParentNode, args: { filter: string }) => {
      const policies: any = getDocs(collection(db, "policies"))
        .then((snap) => {
          let policiesArr: any = [];
          snap.docs.forEach((doc) => {
            policiesArr.push(doc.data());
          });
          return policiesArr;
        })
        .catch((err) => console.log(err));
      if (args.filter) {
        const filteredPolicies = policies?.filter((policy: any) => {
          const customerValues: (string | undefined)[] = lowerCasedValues(
            policy.customer
          );
          const policiesValues: (string | undefined)[] =
            lowerCasedValues(policy);
          let allValuesArr: (string | Date | undefined)[] = [
            ...policiesValues,
            ...customerValues,
          ];
          if (allValuesArr.includes(args.filter.toLowerCase())) {
            return policy;
          }
        });
        return filteredPolicies;
      }
      return policies;
    },
  },
};
