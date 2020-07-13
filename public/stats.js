function stats(linksArray) {
  const links = linksArray.map((itens) => itens.href);
  const uniqueLinks = Array.from(new Set(links));
  const linksStats = {
    total: linksArray.length,
    unique: uniqueLinks.length,
  };
  return linksStats;
}

module.exports = stats;
