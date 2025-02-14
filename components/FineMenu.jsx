export default function FineMenu({ coperto, altre_info }) {
  return (
    <div className="container mx-auto p-4 md:p-0 text-center space-y-4 md:space-y-6">
      {coperto && <div className="text-22">{coperto}</div>}

      {altre_info && (
        <div className="space-y-2">
          {altre_info.map((item, index) => (
            <div key={index} className="text-17">
              {item.info}  {/* Qui si accede alla proprietà 'info' di ogni oggetto */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
