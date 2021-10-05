{
  /* Body Cols and Rows - custom lines */
}
<div className="grid grid-cols-2 gap-2 grid-flow-col md:grid-cols-3 md:gap-3 bg-gray-300">
  {/* project div - custom lines */}
  <div className="col-span-2 row-start-1 md:row-start-auto md:col-span-1 md:col-start-3 md:col-end-3">
    <div className="w-full flex items-center justify-start mt-14">
      <div className="w-full bg-white dark:bg-gray-800 shadow rounded py-6 px-4">
        {/* title and icon */}
        <div className="w-full flex items-center justify-between">
          <div>
            <p className="text-2xl font-semibold leading-9 text-gray-800 dark:text-gray-100">
              {project.Name}
            </p>
          </div>
        </div>

        {Object.keys(project).map((items, index) => (
          <div
            key={index + 'project'}
            className="mt-6 pb-3 border-b border-gray-200"
          >
            <p className="text-xs font-semibold leading-3 text-gray-800 dark:text-gray-100">
              {items}
            </p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs leading-3 dark:text-gray-400 text-gray-500">
                {project[items]}
              </p>
            </div>
          </div>
        ))}

        <p className="float-right text-xs mt-4 font-semibold leading-none text-indigo-700">
          +12 more
        </p>

        {/* clients div for avatars*/}
        <div>Avatar Component</div>
      </div>
    </div>

    <div>Shared Files</div>
  </div>

  {/* jorunals div */}
  <div className="col-span-2 row-start-2 md:row-start-auto pt-14">
    <div
      className="grid gap-2
grid-cols-4 
grid-rows-2
content-start items-stretch justify-items-stretch pb-4"
    >
      {journalsData.map((journal, index) => (
        <Widget widht="1" height="1" key={index + 'journals'}>
          <div
            className="bg-gray-100 dark:bg-gray-700 rounded-sm p-2 overflow-hidden max-h-32 rounded"
            onClick={() => showJournal(journal)}
          >
            <p className="text-base font-bold leading-none text-gray-700">
              {journal.EntryTitle}
            </p>
            <p className="text-xs leading-3 text-gray-600 dark:text-gray-400">
              {journal.Date}
            </p>
            <p className="text-xs leading-tight text-gray-600 dark:text-gray-400">
              {journal.Description}
            </p>
          </div>
        </Widget>
      ))}
    </div>
  </div>
</div>;
