Pod::Spec.new do |s|
  s.name           = 'SafeSpaceGrpc'
  s.version        = '1.0.0'
  s.summary        = 'A sample project summary'
  s.description    = 'A sample project description'
  s.author         = ''
  s.homepage       = 'https://docs.expo.dev/modules/'
  s.platforms      = {
    :ios => '16.4',
    :tvos => '16.4'
  }
  s.source         = { git: '' }
  s.static_framework = true

  s.dependency 'ExpoModulesCore'
  s.dependency 'SwiftProtobuf', '~> 1.28'
  s.dependency 'gRPC-Swift', '~> 1.8'

  # Swift/Objective-C compatibility
  s.pod_target_xcconfig = {
    'DEFINES_MODULE' => 'YES',
  }

  # Regenerates the Swift message + gRPC client stubs for RuntimeService.V1.proto
  # (the same .proto compiled natively on Android via the protobuf Gradle plugin).
  # Requires `protoc`, `protoc-gen-swift`, and `protoc-gen-grpc-swift` on PATH, e.g.:
  #   brew install swift-protobuf grpc-swift
  s.prepare_command = <<-CMD
    mkdir -p Generated
    protoc \
      --proto_path=../android/src/main/proto \
      --swift_out=Generated \
      --swift_opt=Visibility=Public \
      --grpc-swift_out=Client=true,Server=false,TestClient=false,Visibility=Public:Generated \
      ../android/src/main/proto/Impactyn.Contracts.RuntimeService.V1.proto
  CMD

  s.source_files = "**/*.{h,m,mm,swift,hpp,cpp}", "Generated/*.swift"
end
