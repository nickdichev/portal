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

  env = {
    # Frontend
    API_URL = "http://127.0.0.1:8090";
  };

  # https://devenv.sh/processes/
  # processes.cargo-watch.exec = "cargo-watch";

  # https://devenv.sh/services/
  # services.postgres.enable = true;

  enterShell = '''';

  enterTest = '''';
}
