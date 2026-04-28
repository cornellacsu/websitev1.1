export const SubteamCategorySection = ({
  category,
  variant,
}: {
  category: {
    title: string;
    icon: any;
    description: string;
    image: string;
  };
  variant: "left" | "right" | "center";
}) => {
  const Icon = category.icon;

  if (variant === "center") {
    return (
      <div className="mb-16 relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-red-800/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-red-500/5 via-transparent to-transparent"></div>

        <div className="relative p-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Icon className="text-red-500" size={32} />
            <h3 className="text-3xl font-bold text-white">{category.title}</h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300 leading-relaxed text-center text-lg mb-8">
              {category.description}
            </p>
            <div className="text-center">
              <img src={category.image}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "left") {
    return (
      <div className="mb-16 relative overflow-hidden rounded-2xl">
        {/* Diagonal gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 via-red-500/5 to-gray-600/30"></div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Image - Left */}
            <div className="order-2 lg:order-1">
              <div className="text-center">
                <img src={category.image}></img>
              </div>
            </div>

            {/* Description - Right */}
            <div className="flex flex-col justify-center pr-10 order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Icon className="text-red-500" size={28} />
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // variant === "right"
  return (
    <div className="mb-16 relative overflow-hidden rounded-2xl">
      {/* Diagonal gradient opposite direction */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 via-red-500/5 to-gray-600/30"></div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Description - Left */}
          <div className="flex flex-col justify-center pl-10">
            <div className="flex items-center gap-3 mb-4">
              <Icon className="text-red-500" size={28} />
              <h3 className="text-2xl font-bold text-white">
                {category.title}
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {category.description}
            </p>
          </div>

          {/* Image Placeholder - Right */}
          <div>
            <div className="text-center">
              <img src={category.image}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
