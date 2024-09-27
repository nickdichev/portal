{
  pkgs,
  lib,
  config,
  inputs,
  ...
}:

{
  packages = [
    pkgs.git
    pkgs.pocketbase
  ];

  languages = {
    go = {
      enable = true;
    };

    javascript = {
      enable = true;
      bun = {
        enable = true;
        install.enable = true;
      };
    };
  };

  # https://devenv.sh/processes/
  # processes.cargo-watch.exec = "cargo-watch";

  # https://devenv.sh/services/
  # services.postgres.enable = true;

  enterShell = '''';

  enterTest = '''';
}
