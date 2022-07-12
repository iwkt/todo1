// import { cssFactory } from '@mantine/styles/lib/tss/use-css';

export const ChileArea = (props: any) => {
  const { open } = props;
  return (
    <>
      {open ? (
        <div>
          <p>ChileArea</p>
        </div>
      ) : null}
    </>
  );
};
