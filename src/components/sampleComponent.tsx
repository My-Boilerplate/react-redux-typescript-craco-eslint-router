import { useEffect } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { getSampleData } from "@store/actions/sampleAction";

const SampleComponent = () => {
  const dispatch = useDispatch();
  const sampleListData = useSelector(
    (state: RootStateOrAny) => state.sampleData
  );
  const { sample } = sampleListData;
  useEffect(() => {
    dispatch(getSampleData());
  }, [dispatch]);
  return <>{JSON.stringify(sample)}</>;
};

export default SampleComponent;
