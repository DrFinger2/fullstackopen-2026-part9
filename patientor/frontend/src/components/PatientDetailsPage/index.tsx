import { useParams } from "react-router-dom";
import type { Patient } from "../../types";
import patients from "../../services/patients";
import { useEffect, useState } from "react";

const PatientDetailsPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState<Patient | null | undefined>(undefined);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!id) {
        setDetails(undefined);
        return;
      }
      setDetails(undefined);
      patients.get(id).then(setDetails);
    };
    fetchDetails();
  }, [id]);

  if (!id) {
    return <p>Patient ID is missing from the URL.</p>;
  } else if (details === undefined) {
    return <p>Loading…</p>;
  } else if (details === null) {
    return <p>Patient not found.</p>;
  }

  return <p>Correctly formed id!</p>;
};

export default PatientDetailsPage;
