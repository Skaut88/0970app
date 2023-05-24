export const Settings = () => {
  return (
    <div className="mx-auto flex flex-col justify-between">
      <div className="flex flex-col xl:flex-row md:text-base xl:text-xs">
        <a href="tel:+71234567890" className="hover:text-red-800">
          <span className="hidden xl:inline-block">
            Moscow
          </span>
          +7(123)456-78-90
        </a>
      </div>
    </div>
  );
};
